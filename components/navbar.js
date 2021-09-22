import Image from 'next/image'
import StyleNav from '../styles/Navbar.module.css'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Row, Col  } from 'react-bootstrap'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavTop(){
    return(
      <Navbar className={StyleNav.navTop}>
        <Container>
            <Col md={{ span: 4, offset: 8 }} className="text-end">
            <FontAwesomeIcon icon={faLock}  />
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              Login
            </a>
            </Col>
        </Container>
      </Navbar>
      
    )
    
}

export function NavLogo(){
  return(
    <Navbar bg="light" expand="lg" style={{ height: '120px' }}>
        <Container>
          <Col md={4}>
            <Image src="/logo-pmac.svg" alt="Vercel Logo" className="mt-2" width={222} height={130} />
          </Col>
          <Col md={{ span: 4, offset: 4 }} className="mr-2 text-end">
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex ">
              <FormControl
                type="search"
                placeholder="Busca"
                className="mr-2 text-start"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
          </Col>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          
        </Container>
      </Navbar>
    
  )
  
}

export function NavMenu(){
  return(
      
    <Navbar bg="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
  
}
