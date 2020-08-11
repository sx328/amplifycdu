import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link passHref href="/">
        <Navbar.Brand>
          <img
            width="170"
            height="30"
            className="d-inline-block align-top"
            src="assets/img/white.png"
            alt="logo"
          />
        </Navbar.Brand>
      </Link>
      <Link passHref href="/team">
        <Nav.Link>Team</Nav.Link>
      </Link>
      <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSffGJweoZwhw-V3rQ157451KbRIkqsuZtmffh-opcpfEHnXNg/viewform">
        Teach
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Learn" id="basic-nav-dropdown">
            <Link passHref href="/java">
              <NavDropdown.Item>Learn Java</NavDropdown.Item>
            </Link>
            <Link passHref href="/matlab">
              <NavDropdown.Item>Learn MatLab</NavDropdown.Item>
            </Link>
            <Link passHref href="/python">
              <NavDropdown.Item>Learn Python</NavDropdown.Item>
            </Link>
            <Link passHref href="/cpp">
              <NavDropdown.Item>Learn C++ (archived)</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Nav.Link href="https://www.gofundme.com/f/code-the-universe">
            GoFundMe
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
