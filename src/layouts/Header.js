import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Hooks" id="basic-nav-dropdown">
                <NavDropdown title="useMemo" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/hooks/useMemo/example-1">Example 1</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
