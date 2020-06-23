import React, { useState } from 'react'
import axios from 'axios'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
const UserForm = () => {
  const [data, setData] = useState({
    key: '',
    secret: '',
  })

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // axios.post('/users/create', null, { withCredentials: true })
  }

  return (
    <Form className="p-4">
      <Row form onSubmit={handleSubmit}>
        <Col md={6}>
          <FormGroup>
            <Label for="consumer_key">Consumer Key</Label>
            <Input
              type="email"
              name="email"
              id="consumer_key"
              readOnly="true"
              placeholder="This is auto-generated."
              value={data.key}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="consumer_secret">Consumer Secret</Label>
            <Input
              type="text"
              name="password"
              id="consumer_secret"
              readOnly="true"
              placeholder="This is auto-generated."
              value={data.secret}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button block>Generate Credentials</Button>
    </Form>
  )
}
export default UserForm
