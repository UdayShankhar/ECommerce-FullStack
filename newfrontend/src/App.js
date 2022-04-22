import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import Store from './Store'
import { useContext } from 'react'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer } from 'react-toastify';
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import SignUpScreen from './screens/SignupScreen.js'
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
// import SearchBox from './components/SearchBox';
import { BsCart3 } from "react-icons/bs";
import Thankingpage from "../src/screens/Thankingpage"

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, userInfo } = state

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href('/')
  }

  return (
    <Router>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position='top-right' limit={1} />
        <header className='NAV'>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand className='main-title'>SHOPPING WORLD
                  <span style={{marginLeft:'10px'}}>
                    <lord-icon
                      src="https://cdn.lordicon.com/ngcezuqf.json"
                      trigger="loop"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{width:'50px',height:'50px'}}>
                    </lord-icon>
                  </span>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                {/* <SearchBox/>  */}
                <Nav className='me-auto w-100 justify-content-end'>
                  <Link to='/cart' className='nav-link'>
                    <BsCart3 />
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg='danger'>
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <NavDropdown.Divider />
                      <Link className='dropdown-item'
                        to='#signout'
                        onClick={signoutHandler}>SignOut</Link>
                    </NavDropdown>
                  ) : (
                    <Link className='nav-link' to='/signin'>Hello, SignIn</Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route exact path='/product/:slug' element={<ProductScreen />} />
              <Route exact path='/cart' element={<CartScreen />} />
              <Route exact path='/signin' element={<SigninScreen />} />
              <Route exact path='/signup' element={<SignUpScreen />} />
              <Route exact path='/shipping' element={<ShippingAddressScreen />} />
              <Route exact path='/payment' element={<PaymentMethodScreen />} />
              <Route exact path='/placeorder' element={<PlaceOrderScreen />} />
              <Route exact path='/order/:id' element={<OrderScreen />} />
              <Route exact path='/orderhistory' element={<OrderHistoryScreen />} />
              <Route exact path='/profile' element={<ProfileScreen />} />
              <Route exact path='/final' element={<Thankingpage />} />
            </Routes>
          </Container>
        </main>
        {/* <footer>
        <div className='text-center'>All rights reserved</div>
      </footer> */}
      </div>
    </Router>
  );
}

export default App;
