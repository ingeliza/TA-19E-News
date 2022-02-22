import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ReactDOM, { render } from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/api/v1/login', {
      method: 'post',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      })

    }).then(function(response){
      return response.json();
    }).then(function(userData){
      console.log(userData);
      if (userData.success) {
        // TODO redirect to new list...
      } else {
        // TODO setError(userData.message)
      }
    }).catch(function(error){
      console.error(error);
    })
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="primary">Primary Button</Button>

      </Form>
    </div>  
  ); 
}
