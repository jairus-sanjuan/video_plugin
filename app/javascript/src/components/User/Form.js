import React, { useState } from 'react'
import axios from '../../../utils/req'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
const UserForm = () => {
  const [data, setData] = useState({
    key: '',
    secret: '',
  })

  const [progress, setProgress] = useState(true)

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { key, secret } = data

    axios
      .post('/api/v1/users', {
        key,
        secret,
      })
      .then((resp) => {
        const data = resp['data']['data']['attributes']

        const { key, secret } = data

        setData({
          key,
          secret,
        })

        setProgress(false)
      })
      .catch((error) => console.log('Error : ', error))
  }

  return (
    <Form className="p-4">
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="consumer_key">Consumer Key</Label>
            <Input
              type="text"
              name="consumer_key"
              id="consumer_key"
              readOnly={progress}
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
              readOnly={progress}
              placeholder="This is auto-generated."
              value={data.secret}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      {progress && (
        <Button type="submit" onClick={handleSubmit} block>
          Generate Credentials
        </Button>
      )}
    </Form>
  )
}
export default UserForm
