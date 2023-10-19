import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FiAlignJustify } from 'react-icons/fi';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = ({ loggedInPerson, onLogin, onLogout, username }) => {
  const handleLogin = () => {
    onLogin();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand style={{ fontSize: '24px' }}>
        GE <FiAlignJustify />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links-container">
          <Nav.Link href="#inspect" className="nav-link-inspect">
            Inspect
          </Nav.Link>
          <Nav.Link href="#result" className="nav-link-result">
            Result
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto navbar-right">
          <Nav.Item className="ml-3">
            <i className="bi bi-heart" style={{ color: 'red' }}></i> 
          </Nav.Item>
          <div className="username-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" /> {username}
          </div>
          {loggedInPerson ? (
            <>
             
              <Button onClick={handleLogout} variant="outline-primary" className="login-button">
                <i className="bi bi-box-arrow-in-right"></i> Logout
              </Button>
            </>
          ) : (
            <Button onClick={handleLogin} variant="outline-primary" className="login-button">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
