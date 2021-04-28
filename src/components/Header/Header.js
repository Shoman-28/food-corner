import React, { useContext } from "react";
import './header.css'
import {Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Header = () => {
    const {user}=useContext(userContext) 
    const {displayName, email}= user;  
    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <div className="container">
                <Link to="/home" className="header-name">Food Corner</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link to='/home' className="nav-item">Home</Link>
                        <Link to='/orders' className="nav-item">Orders</Link>
                        <Link to='/admin' className="nav-item">Admin</Link>
                        <Link to='/deals' className="nav-item">Deals</Link>
                        <Link to='/memes' className="nav-item">{displayName}
                        {!displayName && <Link to='/loging' variant="primary">Loging</Link>
                        }
                        </Link>                    
                    </Nav>
                </Navbar.Collapse>
            </div>
            
        </Navbar>
    );
};

export default Header;
