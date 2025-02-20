import React from 'react'
// nav bar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div style={{height:"60px", width:"100px", display:"flex", justifyContent:"center"}}><Navbar.Brand href="#home"><img src="https://cdn2.iconfinder.com/data/icons/30-audio-and-video-2/512/16_Picturre-512.png" alt="website logo" id='Websitelogo' /></Navbar.Brand></div>
       
       
          <Nav className=" ms-auto  ">
           

            <div >
              <h2 className='navhead'>Image Gallery</h2>
            </div>
            
          </Nav>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Header