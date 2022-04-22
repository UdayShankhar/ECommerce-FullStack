import React, { useContext, useEffect, useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import Form from 'react-bootstrap/Form'
import Store from '../Store.js'
import { useNavigate } from 'react-router-dom'
import FormCheck from 'react-bootstrap/FormCheck'
import axios from 'axios'
// import Button from 'react-bootstrap/Button'

function PaymentMethodScreen() {
    const navigate = useNavigate();
    const [book,setBook] = useState({})
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { shippingAddress, paymentMethod },
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState(
        paymentMethod || 'PayPal'
    );

    useEffect(() => {

        if (!shippingAddress.address) {
            console.log(shippingAddress.address);
            navigate('/shipping');
        }
    }, [shippingAddress, navigate]);


    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeorder');
    };

    const handlePayment = async() => {
        try {
            const orderUrl = "http://localhost:9000/api/rpayment"
        const {data} = await axios.post(orderUrl,{amount:600})
    console.log(data);     
    } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            {/* <h1 className='my-3'>Payment Method</h1> */}
            <Form onSubmit={submitHandler}>
                {/* <FormCheck
                    type='radio'
                    id='PayPal'
                    label='PayPal'
                    value='PayPal'
                    checked={paymentMethodName === 'PayPal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
/> */}
                    <h3 style={{marginTop:'30px'}}>Confirmation Page</h3>
                
                <button onClick={handlePayment} className='buy-btn' style={{marginTop:'20px',backgroundColor:'black',color:'white',borderRadius:'12px'}}>REVIEW ORDER</button>
            </Form>
            {/* <div className='mb-3'>
                <Button onClick={handlePayment} type='submit'>Continue</Button>
            </div> */}
        </div>
    )
}

export default PaymentMethodScreen