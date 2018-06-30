import React, { Component } from 'react';
import { 
  Header, 
  Form, 
  Button, 
  Segment,
  Container,
} from 'semantic-ui-react';
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
    admin: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { admin, street_address, city, zip, state, telephone, name, email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ admin, street_address, city, zip, state, telephone, name, email, password, passwordConfirmation }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  checkAdmin = (e) => {
    const { admin } = this.state
    this.setState({ admin: !admin})
  }

  render() {
    const { admin, name, street_address, city, zip, state, telephone, email, password, passwordConfirmation } = this.state;

    return (
      <Container>
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form 
          onSubmit={this.handleSubmit}
          textAlign='center'>
        <Form.Group>
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
          </Form.Group>
          <Form.Group>
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
          </Form.Group>
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
          <Form.Group>
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
          </Form.Group>
          <Form.Checkbox
              label='Are you an admin?'
              onChange={this.checkAdmin}
              />
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
      </Container>
    );
  }
}

export default connect()(Register);
