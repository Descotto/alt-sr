import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const LeftSidebarNavbar = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  return (
    <div>
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Brand href="/" className={expanded ? 'expanded-home-link' : ''} style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
        </Navbar.Brand>
        <Navbar.Toggle className='nav-toggler' aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <props.Link
              to="/"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Home
            </props.Link>
            {/* <div className='navline'></div> */}
            <props.Link
              to="/request"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              New Request
            </props.Link>
            {/* <div className='navline'></div> */}
            <props.Link
              to="/lookup"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Search ID
            </props.Link>
            {/* <div className='navline'></div> */}
            <props.Link
              to="/byname"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Search Name
            </props.Link>
            {/* <div className='navline'></div> */}
            <props.Link
              to="/about"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              About
            </props.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default LeftSidebarNavbar;
















