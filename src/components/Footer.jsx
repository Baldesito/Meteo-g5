// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-#221f1f text-light py-4">
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 mb-4">
          <Col className="footer-links">
            <p>
              <a href="#" className="text-light" alt="footer link">
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Media Center
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Privacy
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Contact us
              </a>
            </p>
          </Col>
          <Col className="footer-links">
            <p>
              <a href="#" className="text-light" alt="footer link">
                Audio Description
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Investor Relations
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Legal Notices
              </a>
            </p>
          </Col>
          <Col className="footer-links">
            <p>
              <a href="#" className="text-light" alt="footer link">
                Help Center
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Jobs
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Cookie Preferences
              </a>
            </p>
          </Col>
          <Col className="footer-links">
            <p>
              <a href="#" className="text-light" alt="footer link">
                Gift Cards
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#" className="text-light" alt="footer link">
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2">
            <Button
              type="button"
              className="btn-sm footer-button rounded-0 mt-3"
            >
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 mt-2 copyright">© 1997-2024 Baldesito, Inc.</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
