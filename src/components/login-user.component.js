import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import banner from './maxresdefault.jpg';
import regions from './Lviv_regions.svg';


export default class News extends Component {

    render() {
        return (
          
          <div className="App">
              <div className="App-form">
              <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
          Login
        </Button>
      </Form>
    </div>
    </div>
            </div>
      );
      }
}