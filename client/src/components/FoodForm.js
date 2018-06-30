import React, { Component } from 'react';
import { 
  Header, 
  Form,
  Image,
  Button, 
  Segment, 
  Checkbox,
  Container,
   } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import styled from 'styled-components';
import axios from 'axios'
import { setHeaders } from './headers'


class Landing extends Component {
  state = { name: '', description: '', price: '' };
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price } = this.state;
    return (dispatch) => {
        axios.post('api/foods/:id')
            .then ({ data, headers }) => {
                dispatch{setHeaders(headers)}
                history.push('/menu')
            }
    }

       this.setState({ name: '', description: '', price: ''})
       this.props.dispatch(setFlash('Thank you, We look foreward to seeing you!', 'green'))
      } else 
      this.props.dispatch(setFlash('Emails do not match!, please try again', 'red'));
    
  }
 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  handleCheckbox = (e) => {
    this.setState({ checkbox: !this.state.checkbox })
  }

  render() {
    const { name, description, price} = this.state;
    return (
      <Background>
      <Segment basic>
        <Header as='h1' textAlign='center'>Terra Nova Opening Soon</Header>
          <Image src='https://specials-images.forbesimg.com/dam/imageserve/521462644/960x0.jpg?fit=scale' alt="YellowStone" height="450px;"  centered />
        <Header textAlign='center' as='h1' > If you want to know more about us, leave us your info</Header>
        <FormStyle > 
        <Container>
          <Form onSubmit={this.handleSubmit}>
          <Form.Field >
              <label htmlFor='name'>Name</label>
              <input
                placeholder='Name'
                name='name'
                required
                value={name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='description'>Description</label>
              <input
                placeholder='Description'
                name='description'
                required
                value={description}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='price'>Price</label>
              <input
                placeholder='Price'
                name="price"
                type='price'
                required
                value={price}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment basic textAlign='center'>
              <Button type='submit'>Submit</Button>
            </Segment>
          </Form>
          </Container>
        </FormStyle>
       </Segment>
       </Background>
        );
    }
}

const Background = styled.div`
  background: slategray;
`
const FormStyle = styled.div`
  width: 655px;
  margin: auto;
`

export default connect()(Landing)