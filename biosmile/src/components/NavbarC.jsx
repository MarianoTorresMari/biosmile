import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarC.css";
import { NavLink } from "react-router";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-propio">
        <Container>
          <Navbar.Brand href="#home">
            <img src="../src/assets/logo.png" alt="BioSmile" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"#"} className="navbar__links--azul">
                Inicio
              </NavLink>
              <NavLink to={"#"} className="navbar__links--azul">
                Contacto
              </NavLink>
              <NavLink to={"#"} className="navbar__links--azul">
                Sobre nosotros
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink to={"#"} className="navbar__links__buttons">
                Iniciar sesión
              </NavLink>
              <NavLink to={"#"} className="navbar__links__buttons">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
