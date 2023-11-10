import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal"

function Navigation({ count, cartHandler }) {
  const CartHandler = (e) => {
    if (e == "button") {
     
        
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#All Product">
                All Product
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Populat items">
                Popular items
              </NavDropdown.Item>
              <NavDropdown.Item href="#New Arrivals">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant="outline-dark"
            onClick={(event) => CartHandler(event.target.type)}
          >
            <i class="fa-solid fa-cart-shopping me-3"></i>
            Cart
            <span
              class="Badge bg-dark lg ms-2 text-white rounded-pill"
              style={{ padding: "4px" }}
            >
              {count}
            </span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
