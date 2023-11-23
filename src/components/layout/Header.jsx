import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = props => {
  // Destructor of props object
  const { navLogo, navTitle } = props;
  console.log(props);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          {/* If the image is in pubilc folder */}
          {/* <img src="logo192.png" alt="logo" /> */}
          {/* If the image is in pubilc folder */}
          <img src={navLogo} alt="logo" style={{ width: 50 }} /> {navTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const style = {};

export default Header;
