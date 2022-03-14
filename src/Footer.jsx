import React from 'react';
import './App';
import './App.css';
import { Container, Nav, } from "reactstrap";

function Footer() {
    return (
      <footer className="footer">
      <Container fluid>
        <Nav>
          <p className='footercontent'>
              Created using OMDb API and react
          </p>
         
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made by{" "}
          <i className="tim-icons icon-heart-2" /> {" "}
          <a
            href="https://www.purpleladder.co.uk"
            target="_blank"
          >
            Laura Mooney
          </a>{" "}
          Digital Business Solutions.
        </div>
      </Container>
    </footer>
    );
  }
  
  export default Footer;