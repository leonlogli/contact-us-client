import React, { useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMessages } from "../../actions/messagesActions";
import { useOutsideClickListner } from "../../helpers";
import "./Header.css";

const Header = (props) => {
  const { getMessages } = props;
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
    if (eventKey === "2") {
      getMessages();
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
        <Navbar.Toggle>
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path fill="white" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </Navbar.Toggle>
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
