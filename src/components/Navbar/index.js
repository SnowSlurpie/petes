import React from 'react'
import { Nav,Logo, Name, Address,Hours } from './navbarElements'
import img from '../../images/logo.png'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <Logo>
            <img src = {img} alt="Pete's Logo"></img>
          </Logo>
          <Hours>
              <div>
                <p>Wednesday 3:30pm-7:30pm </p>
                <p>Thursday 3:30pm - 7:30pm</p>
                <p>Friday: 3pm - 8pm</p>
                <p>Saturday: 3pm - 8pm</p>
                <p>Sunday: 3pm - 7pm</p>
                <p>Monday & Tuesday: CLOSED</p>
              </div>
          </Hours>
        </Nav>
          <Name>Pete's Pizza & Grill</Name>
          <Address> 
              1230 N Knowles Ave, New Richmond, WI
          </Address>

    </>
  );
};

export default Navbar;