import React from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Divider,
  Image,
  List,
  Button, 
} from 'semantic-ui-react'
import axios from 'axios' 


class Menu extends React.Component {
  state = { cart: {}, food: [], quantity: ''}

  addItem = (e) => {
    const { food, quantity, cart: { id } } = this.state 
    const cart_food = { cart_id: id, food_id: food, quantity }
    axios.put('/api/cart_foods/:id', { cart_food })
      .then( res => this.setState({ quantity: '' }))
  }
  
  foods = () => {
    const { foods } = this.props
    return foods.map ( food =>
      <List.Item key={food.id}>
        <Image size='small' src={food.image} />
        <List.Content>
          <List.Header as='h4'>{food.name}</List.Header>
          <List.Description>
          {food.description}
          </List.Description>
          <List.Description>
           {food.category}
          </List.Description>
          <List.Description>
           ${food.price}
          </List.Description>
          <input name="quantity" placeholder="quantity" type="integer"/> 
          <Button onClick={this.addItem}> Add Item </Button> 
        </List.Content>
      </List.Item>
    )
  }

  render() {
    return(
      <Container>
        <Header textAlign="center" as="h1"> Menu </Header>
        <Divider />
        <List>
          {this.foods()}
        </List>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { foods } = state
  return {
    foods,
  }
}

export default connect(mapStateToProps)(Menu)