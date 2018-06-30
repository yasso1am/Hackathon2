import React, { Component } from 'react';
import { 
  Container,
  Header,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class NoMatch extends Component {



  componentWillMount(){
    setTimeout(() => { 
        this.props.history.push('/');
    }, 4000)
}
  render() {
    return (
      <Container>
        <Dimmer active inverted>
          <Loader inverted>
            <Header as='h1' textAlign='center'>
                Page Not Found - Redirecting To Home Page
            </Header>
            <Link to='/'> Home </Link>
          </Loader>
        </Dimmer>
      </Container>
    );
  }
}

export default NoMatch;
