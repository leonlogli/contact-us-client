import React, { useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMessages } from "../../actions/messagesActions";
import "./Header.css";
import { useOutsideClickListner } from "../../helpers";

const Header = (props) => {
  const [navExpanded, setNavExpanded] = React.useState(false);
  const navbarRef = useRef(null);
  useOutsideClickListner({ ref: navbarRef, callback: () => closeNavbar() });

  function handleNavbarToggle(expanded) {
    setNavExpanded(expanded);
  }

  function closeNavbar() {
    setNavExpanded(false);
  }

  function onNavLinkSelect(eventKey, event) {
    closeNavbar();
    if(eventKey === "2") {
      props.getMessages();
    }    
  }

  return (
    <header className="Header" ref={navbarRef}>
      <Navbar
        fixed="top"
        expand="md"
        onToggle={handleNavbarToggle}
        expanded={navExpanded}
      >
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          Engice
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto" onSelect={onNavLinkSelect}>
            <Nav.Link eventKey="1" as={Link} to="/">
              Contact us
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/messages">
              Messages
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  getMessages() {
    dispatch(getMessages());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
