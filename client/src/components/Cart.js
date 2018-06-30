import React from 'react' 
import { setHeaders } from '../../reducers/headers' 
import { Container, List } from 'semantic-ui-react'
//cart pulls items added to it from the database
//cart displays those items, how many there are of each, and their prices 
//cart multiplies the number of each item by their price
//cart adds those numbers together for a total (componentdidupdate?)
//cart provides option to delete items 
//cart gives option to checkout (then shows confirmation)
//cart allows you to choose if pickup or delivery
//cart shows user's address as delivery address if they've chosen delivery 
class Cart extends React.component {

  // export const handleDelete = () => {
  //   return (dispatch) => {

  //   }
  // }

  state = { cart: [] }
  //it gets the food items from the user's cart 
  componentDidMount() {
    axios.get("/api/carts")
      .then( ({ cart, headers }) => {
        dispatch(setHeaders(headers))
        this.setState = { cart: cart } 
      })
      .catch( error => {
        debugger 
        console.log(error.response);
      });
  }
  //it maps over them and makes a list with the food price, food size if applicable, food quantity
  //it gives the option to delete each item from the cart and directs to delete route then refreshes state?
  render() {
    return (
      <Container>
        <List> 
          this.state.cart.map (cart) => {
            <List.item> 
              {cart.name} 
              {cart.price} 
              {cart.quantity}
              <div onClick="handleDelete">X</div> 
            </List.item> 
          }
        </List> 
      </Container> 
    )
  }

  mapStatetoProps(User) 

}

export default Cart 
