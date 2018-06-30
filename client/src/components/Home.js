import React, { Component } from 'react';
import { 
  Header,
  Image, 
} from 'semantic-ui-react';
import About from './about'

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Mom's Kitchen</Header>

        <Image
          src='/images/mom.jpg'
          as='a'
          size='medium'
          href='/about'
          target='_blank'
        />
      </div>
    );
  }
}

export default Home;
