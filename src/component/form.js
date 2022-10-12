import React, { useState } from "react";
import { Button, Form, Row, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Display() {
  const navigate = useNavigate();

  const [data, setData] = useState([{
    firstName: '',
    lastName: '',

  }])

  const handleClick = () => {
    // localStorage.setItem('firstName', JSON.stringify(data));
  }
  return (
    <>
      <Container>
        <Row>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>firstName</Form.Label>
              <Form.Control type="text" value={data.firstName}
                onChange={(e) => setData(e.target.value)} />


            </Form.Group>
            <Button type="button" onClick={() => {
              handleClick();
              navigate('./display');
            }}>
              Display filed
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}

