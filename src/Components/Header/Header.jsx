import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsCartFill} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import './Style.css'
import { Link } from 'react-router-dom';
import CartModel from '../Cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Header() {
  const [show,setShow]=useState(false);
  const handleShow=()=>{
    return setShow(true)
  }
  const quantity=useSelector(state=>state.cart.totalQuantity)
  return (
    <>
    <div className="container-fluid">
    <div className="row topbar">
        <div className="col-5 p-1 d-flex justify-content-around" style={{ backgroundColor: '#E52727', color: 'white', borderRadius: '0px 0px 70px 0px' }}>
          <a><b>Call Us: (800) 060-0730</b></a>
          <div className="d-flex gap-4">
            <a>About Us</a>
            <a>Contacts</a>
            <a>Track Order</a>
          </div>

        </div>
        <div className="col-2">
          <p style={{ fontSize: '9px', paddingTop: '8px' }}>
            <b>AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</b></p>
        </div>
        <div className="col-5 p-1 d-flex justify-content-around" style={{ backgroundColor: '#333333', color: 'white', borderRadius: '0px 0px 0px 70px' }}>
          <div className="d-flex gap-4">
            <a>Compare :<b> 5</b> </a>
            <a>Currency : <b>USD</b></a>
            <a>Language : <b>EN</b></a>
          </div>
        </div>
      </div>
    </div>
      
      <div className="container" >
      <Navbar expand="md"  >
        < >
        <Link to={'/'} style={{textDecoration:'none'}}>
          <h2 ><h4><span style={{color:'red'}}>Red</span>Parts</h4></h2>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav
              className="me-auto my-2 my-lg-0"
            >
              <Nav.Link href="#action1" >Home</Nav.Link>
              <Nav.Link href="#action2">Shop</Nav.Link>
              <NavDropdown title="Blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Blog1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Blog 2
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  Blog 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Blog1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Account 1
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  Account 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Blog1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Page 1
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  Page 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link onClick={() => handleShow()} className='ms-5 text-light'><BsCartFill style={{ fontSize: '25px',color:'red' }} /><Badge bg="primary" pill>{quantity}</Badge></Link>
          </Navbar.Collapse>
        </>
      </Navbar>
      </div>
      {show && <CartModel handleShow={()=>setShow} openmodel={show} />}
    </>
  );
}

export default Header;




