import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';

class Register extends Component {
  state = { 
    street_address: '',
    city: '',
    zip: '',
    state: '',
    telephone: '',
    name: '', 
    email: '', 
    password: '', 
    passwordConfirmation: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { street_address, city, zip, state, telephone, name, email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ street_address, city, zip, state, telephone, name, email, password, passwordConfirmation }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { name, street_address, city, zip, state, telephone, email, password, passwordConfirmation } = this.state;

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              placeholder='Name'
              required
              value={name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='street_address'>Street Address</label>
            <input
              id='street_address'
              placeholder='Street Address'
              required
              value={street_address}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='city'>City</label>
            <input
              id='city'
              placeholder='City'
              required
              value={city}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='zip'>Zip</label>
            <input
              id='zip'
              placeholder='Zip'
              required
              value={zip}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='state'>State</label>
            <input
              id='state'
              placeholder='State'
              required
              value={state}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='telephone'>Telephone</label>
            <input
              id='telephone'
              placeholder='Telephone'
              required
              value={telephone}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);
