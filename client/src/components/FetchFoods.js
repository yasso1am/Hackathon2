import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getFoods } from '../reducers/foods'
import Menu from './Menu'

class FetchFoods extends React.Component { 

  componentDidMount() {
    this.props.dispatch(getFoods())
  }

  render() {
      return(
        <div>
          <Route path="/food/menu" component={Menu} />
        </div>
      )   
  }
}

export default connect()(FetchFoods)