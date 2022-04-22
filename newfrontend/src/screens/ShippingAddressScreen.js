import  Button  from 'react-bootstrap/Button'
import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup  from 'react-bootstrap/FormGroup'
import {  useNavigate } from 'react-router-dom'
import Store from '../Store.js'
import CheckoutSteps from '../components/CheckoutSteps.js'

function ShippingAddressScreen() {
    const navigate = useNavigate()
    const {state,dispatch:cxtDispatch} = useContext(Store)
   const {
       userInfo,
       cart : {shippingAddress},
   } = state;
    const [fullName,setFullName] = useState(shippingAddress.fullName||'')
    const [address,setAddress] = useState(shippingAddress.address||'')
    const [city,setCity] = useState(shippingAddress.city||'')
    const [postalcode,setPostalCode] = useState(shippingAddress.postalcode||'')
    const [country,setCountry] = useState(shippingAddress.country||'')

useEffect(()=>{
    if(!userInfo){
        navigate('/signin?redirect=/shipping')
    }
},[userInfo,navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        cxtDispatch({
            type:'SAVE_SHIPPING_ADDRESS',
            payload:{
                fullName,
                address,
                city,
                postalcode,
                country
            }
        })

        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                fullName,
                address,
                city,
                postalcode,
                country
            })
        )
        navigate('/payment')
    }

  return (
    <div>
    <CheckoutSteps step1 step2></CheckoutSteps>
    <div className='container small-container'>
        <h2 className='my-3'>Shipping Address</h2>
        <Form onSubmit={submitHandler}>
            <FormGroup className='mb-3' controlId='fullName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                required
                ></Form.Control>
            </FormGroup>

              <FormGroup className='mb-3' controlId='address'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                  ></Form.Control>
              </FormGroup>

              <FormGroup className='mb-3' controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                  ></Form.Control>
              </FormGroup>

              <FormGroup className='mb-3' controlId='postalcode'>
                  <Form.Label>Postcal Code</Form.Label>
                  <Form.Control
                      value={postalcode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                  ></Form.Control>
              </FormGroup>

              <FormGroup className='mb-3' controlId='country'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                  ></Form.Control>
              </FormGroup>

              <FormGroup>
                  <div className='mb-3'>
                      <Button variant='primary' type='submit'>Continue</Button>
                  </div>
              </FormGroup>
        </Form>
          </div>
    </div>
  )
}

export default ShippingAddressScreen