import React, { useState, useEffect } from "react";
import { Button, Form, Row, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { addData } from "../services/api";
import { addUser, addUserAction } from "../store/action/addAction";
import { useDispatch } from 'react-redux';

export default function AddNewPerson() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isValid, setValid] = useState(false);
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
  })
  const validate = () => {
    return formData.firstName.length & formData.lastName.length
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [formData.firstName, formData.lastName]);

  const handleClick = () => {
    console.log('handleClick', formData)
    dispatch(addUser(formData))
  }

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>

      <Container>
        <Button type='button' onClick={() => navigate("/")}>Back</Button>

        <Row>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>firstName</Form.Label>

              <Form.Control type="text" name="firstName" value={formData.firstName}
                onChange={handleChange}
              />
              <Form.Label>lastName</Form.Label>

              <Form.Control type="text" name="lastName" value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Button disabled={!isValid} onClick={() => {
              handleClick();
            }}>
              Add User
            </Button>
          </Form>
        </Row>
      </Container>






    </>
  );
}