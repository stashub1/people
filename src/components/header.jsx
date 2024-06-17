import React from "react";

import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";

export const Header = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <Container className="col-md-8 col-md-offset-2 intro-text">
                <Row>
                  <Col>
                    <h1>
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>{props.data ? props.data.paragraph : "Loading"}</p>
                    <a href="#features" className="btn btn-custom btn-lg page-scroll">
                      Learn More
                    </a>{" "}
                  </Col>
                </Row>
                {/* <Button variant="primary" onClick={handleShow}>
                  Open Form
                </Button> */}
              </Container>
              <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>User Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="userName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="userQuestion">
                      <Form.Label>Question</Form.Label>
                      <Form.Control type="text" placeholder="Enter your question" />
                    </Form.Group>
                    <Form.Group controlId="userEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
