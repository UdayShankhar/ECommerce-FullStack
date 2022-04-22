import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useReducer } from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ProductScreen.css'
import replace from '../images/replace.png'
import warranty from '../images/warranty.png'
import delivery from '../images/delivery.png'
import Store from '../Store'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function ProductScreen() {
  const navigate = useNavigate()
  const params = useParams()
  const {slug} = params

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  })


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get(`/api/products/slug/${slug}`)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }
    }
    fetchData()
  }, [slug])

  const {state,dispatch:ctxDispatch} = useContext(Store)
  const {cart} = state
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x)=>x._id===product._id)
    const quantity = existItem?existItem.quantity+1:1
    const {data} = await axios.get(`/api/products/${product._id}`)
    if(data.countInStock<quantity){
      window.alert('Sorry.Product is out of stock')
    return;
    }
    ctxDispatch({ type:'CART_ADD_ITEM',payload:{...product,quantity}})
  navigate('/cart')
  }

  return (
    loading?(<div>Loading...</div>)
    : error?(<div>{error}</div>)
    :(<div className='pr-page'>
      <Row>
        <Col md={6}>
          <img
          className='image-large'
          src={product.image}
          alt={product.name}
          />
        </Col><br/>
          </Row>
        <div className='second-division'>
          <h3 className='pr-name'>{product.name}</h3>
          <a href={product.storeLink} className='p-link' target='_blank' >{product.visit}</a>
          <hr className='hr1'/>
            <h3 className='pr-price'><span>&#8377;</span>{product.price}</h3>
            <p className='tax'>Inclusive of all taxes</p>
            <p className='emi'>EMI starts at <span>&#8377;</span> {product.emi} per month</p>
          <b className='pr-desc'>About this item : 
          {<ul>
            <li>{product.about1}</li>
            <li>{product.about2}</li>
          </ul>}
          </b>
          <div className='icons8-images'>
          <div>
          <img src={replace} alt='' className='replace'/>
                <p className='replacetext'>10 days replacement</p>
                </div>
                <div>
                <img src={warranty} alt='' className='warranty' />
                <p className='warrantytext'>2 years warranty</p>
                </div>
                <div>
                  <img src={delivery} alt='' className='delivery'/>
                  <p className='deliverytext'>Fastest Delivery</p>
                </div>
            </div>
            <div className='buttons'>
              <button onClick={addToCartHandler} className='cart' style={{width:'150px'}}>Add to Cart</button>
            </div>
            
        </div>
    </div>)
  )
}

export default ProductScreen