import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Store from '../Store.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function SignupScreen() {
    const navigate = useNavigate()
    const { search } = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/'

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { userInfo } = state

    const submitHandler = async (e) => {
        e.preventDefault()
        if(password!==confirmPassword){
            toast.error(`Password doesnt match`)
        return
        }
        try {
            const { data } = await axios.post('/api/users/signup', {
                name,
                email,
                password
            })
            ctxDispatch({ type: 'USER_SIGNIN', payload: data })
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate(redirect || '/')
        } catch (error) {
            console.log(error);
            toast.error('Invalid credentials')
        }
    }

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo])

    return (
        <Container className='small-container'>
            <h2 className='my-3'>Sign Up</h2>
            <Form onSubmit={submitHandler}>
                <FormGroup className='mb-3' controlled='name'>
                    <FormLabel>Name</FormLabel>
                    <FormControl onChange={(e) => setName(e.target.value)} required />
                </FormGroup>
                <FormGroup className='mb-3' controlled='email'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='email' onChange={(e) => setEmail(e.target.value)} required />
                </FormGroup>
                <FormGroup className='mb-3' controlled='password'>
                    <FormLabel>Password</FormLabel>
                    <FormControl type='password' onChange={(e) => setPassword(e.target.value)} required />
                </FormGroup>
                <FormGroup className='mb-3' controlled='confirmpassword'>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl type='password' onChange={(e) => setconfirmPassword(e.target.value)} required />
                </FormGroup>
                <div className='mb-3'>
                    <Button type='submit'>Sign Up</Button>
                </div>
                <div className='mb-3'>
                    Already have an account?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Sign In</Link>
                </div>
            </Form>
        </Container>
    )
}

export default SignupScreen