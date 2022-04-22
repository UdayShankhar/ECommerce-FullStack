import  Button from "react-bootstrap/Button"
import {Link} from 'react-router-dom'
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useContext } from "react";
import Store from "../Store";

function Product(props) { 
    const {product} = props;
    
    const { state, dispatch: ctxDispatch } = useContext(Store)
    const {
        cart: { cartItems },
    } = state

    const addtoCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id)
        const quantity = existItem ? existItem.quantity + 1 : 1
        const { data } = await axios.get(`/api/products/${item._id}`)
        if (data.countInStock < quantity) {
            window.alert('Sorry.Product is out of stock')
            return;
        }
        ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
    }

    return(
        <Card style={{border:'none',textAlign:'center',paddingBottom:'100px'}}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className='card-img-top' alt='' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`} style={{textDecoration:'none',color:'black'}} >
                    <Card.Title>
                    {product.name}</Card.Title>
                </Link>
                <Card.Text style={{fontWeight:700}}> 
                    <span>&#8377;</span> 
                {product.price}</Card.Text>
                <Button className="btn btn-primary" onClick={()=>addtoCartHandler(product)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
 }

 export default Product