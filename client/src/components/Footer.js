import React, { Component } from 'react'
import {
  Divider, 
  Header, 
  Icon, 
} from 'semantic-ui-react'

const Footer = () => {
    return(
      <div>
        <Divider />
        <Header as="h2" icon textAlign="center">
          <Icon name="paper plane" circular />
          <Header.Content>Find Us</Header.Content>
        </Header>
        <Header as="h5" textAlign="center">
          2233 South State Street, Salt Lake City, Utah, <br/>
          801.486.0092
        </Header>
      </div>
    )
}

export default Footer
