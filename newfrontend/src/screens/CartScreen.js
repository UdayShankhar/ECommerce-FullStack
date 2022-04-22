import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Store from '../Store'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MessageBox from '../components/MessageBox'
import  ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { ImBin2 } from "react-icons/im";


export default function CartScreen(){
    const navigate = useNavigate()
const {state,dispatch:ctxDispatch} = useContext(Store)
const {
    cart:{cartItems},
}=state

const updateCartHandler =  async (item,quantity) => {
    const {data} = await axios.get(`/api/products/${item._id}`)
    if (data.countInStock < quantity) {
        window.alert('Sorry.Product is out of stock')
        return;
    }
    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
}

    const removeItemHandler = (item) => {
     ctxDispatch({type:'CART_REMOVE_ITEM',payload:item})   
    }

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping')
    }

return (
    <div>
        <h2 style={{padding:'40px'}}>Your Shopping Cart</h2>
        <Row>
            <Col md={8}>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty . <Link to = '/'>Go Shopping</Link>
                    </MessageBox>
                ):(
                    <ListGroup>
                        {cartItems.map((item)=>(
                            <ListGroupItem key={item._id}>
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <img src={item.image} alt={item.name} className='img-fluid rounded img-thumbnail'></img>{' '}
                                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant='light' disabled={item.quantity === 1} onClick={() => updateCartHandler(item, item.quantity + 1)}>
                                            <BiPlus style={{ cursor: 'pointer' }}/>
                                        </Button>{' '}
                                        <span>{item.quantity}</span>{' '}
                                        <Button variant='light' disabled={item.quantity === item.countInStock} onClick={()=>updateCartHandler(item,item.quantity-1)}>
                                            <BiMinus style={{cursor:'pointer'}}/>
                                        </Button>
                                    </Col>
                                    <Col md={3}>
                                        <span>&#8377;</span> {item.price}
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="light" onClick={()=>removeItemHandler(item)}>
                                            <ImBin2/>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h3>
                                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}items: <span>&#8377;</span>{cartItems.reduce((a,c)=>a+c.price*c.quantity,0)})
                                </h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="d-grid">
                                    <Button
                                    type="button"
                                    variant= "primary"
                                    disabled={cartItems.length===0}
                                    onClick={checkoutHandler}
                                    >Checkout</Button>

                                    <Link to="/">
                                        <Button type="button"
                                            variant="primary" style={{marginTop:'20px',width:'100%',backgroundColor:'black'}}>Go Back</Button>
                                    </Link>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
)
}