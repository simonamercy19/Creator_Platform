import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Container, Image } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar className="header-navbar" expand="md">
          <Link href="/ExporeCreator">
            <Navbar.Brand href="#home">
              LOGO
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pr-4">
              <Form inline className="search-button">
                <span className="icon-search-mobile"></span>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 round-input search-input" />
              </Form>
              <Nav.Link href="/ExporeCreator">Explore</Nav.Link>
              <Link href="/ControlPanel">
                <div className="user-profile-head">
                  <Image src="https://i.pinimg.com/originals/7d/7b/eb/7d7beb95030a5a6ae4817b79ebb856d2.jpg" />
                </div>
              </Link>
              
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
