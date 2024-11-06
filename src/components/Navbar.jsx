import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navigation from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

      <Navigation bg="dark" data-bs-theme="dark">
        <Container>
          <Navigation.Brand >Navigation</Navigation.Brand>
          <Nav className="me-auto">
         <Link to={"/"}>   Home</Link>
         <Link to={"/add"}>  add product</Link> 
          <Link to={"/cart"}>cart</Link>  
          </Nav>
        </Container>
      </Navigation>

  );
}

export default Navbar;