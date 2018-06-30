import React, { Component } from 'react';
import { 
  Header, 
  Form,
  Image,
  Button, 
  Segment, 
  Container,
   } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios'
import { setHeaders } from '../reducers/headers'


class FoodForm extends Component {
<<<<<<< HEAD
  state = { name: '', description: '', price: '' };
=======
  state = { name: '', description: '', price: '', image: '' };
>>>>>>> foods reducer update
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { food } = this.state;
    const { history, dispatch } = this.props
    axios.post('api/foods', { food } )
      .then( res => {
        dispatch(setHeaders(res.headers))
<<<<<<< HEAD
        // history.push('/food/menu')
=======
        this.setState({ name: '', description: '', price: '', image: ''})
        alert("Dish added to menu")
>>>>>>> foods reducer update
      })   
  }
 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  render() {
    const { name, description, price} = this.state;
    return (
      <Background>
      <Segment basic>
        <Header as='h1' textAlign='center'>Add a Dish</Header>
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

<<<<<<< HEAD
export default connect()(FoodForm)
=======
export default connect()(FoodForm)


>>>>>>> foods reducer update
