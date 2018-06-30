import React, { Component } from 'react';
import { 
  Header,
  Image, 
} from 'semantic-ui-react';
<<<<<<< HEAD
import Mom from '../images/mom.jpg'
import MomDrop from '../images/momDrop.jpg'
import Togo from '../images/toGo.jpg'
=======
import About from './About'
>>>>>>> food form

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Mom's Kitchen</Header>
          <Image.Group size="small" align='center' padded>
            <Image src={Mom} />
            <Image src={Togo} />
            <Image src={MomDrop} />
          </Image.Group>
      </div>
    );
  }
}

export default Home;
