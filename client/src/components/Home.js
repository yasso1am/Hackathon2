import React, { Component } from 'react';
import { 
  Header,
  Image, 
} from 'semantic-ui-react';
import Mom from '../images/mom.jpg'
import MomDrop from '../images/momDrop.jpg'
import Togo from '../images/toGo.jpg'
import styled from 'styled-components';


class Home extends Component {
  render() {
    return (
      <div>
        <HeaderImage>
          <Header as='h1' color='inverted' textAlign='center'>Mom's Kitchen</Header>
        </HeaderImage>
          <Image.Group size="small" align='center' padded>
            <Image src={Mom} />
            <Image src={Togo} />
            <Image src={MomDrop} />
          </Image.Group>
      </div>
    );
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://images.pexels.com/photos/434293/pexels-photo-434293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
`

export default Home;
