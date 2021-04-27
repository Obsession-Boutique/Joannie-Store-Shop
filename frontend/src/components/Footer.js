import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Obsession Boutique
          </Col>
          <Col>
            <div id="google_translate_element"></div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
