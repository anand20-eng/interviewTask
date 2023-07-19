import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { bindData, update} from '../services/api';


export default function UpdateUser() {
  const navigate = useNavigate();
  const params = useParams();
  const id = parseInt(params.id)

  const [user, setUsers] = useState({
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    bindData(id).then((res) => {
      setUsers(res);
    })
  }, [])

  const handleChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    update(id,user).then((res)=> {
       console.log(res);
    })
  }
  return (
    <>
      <h1> Edit component</h1>
      <Container>
        <Button type='button' onClick={() => navigate("/")}>Back</Button>

        <Row>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>firstName</Form.Label>

              <Form.Control type="text" name="firstName" value={user.firstName}
                onChange={handleChange}
              />
              <Form.Label>lastName</Form.Label>

              <Form.Control type="text" name="lastName" value={user.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="button" onClick={handleClick}>
              Update
            </Button>
          </Form>
        </Row>
      </Container>

    </>
  )

}