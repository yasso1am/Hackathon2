import React from 'react'
import {Container, Header} from 'semantic-ui-react';
import Footer from './Footer'

class Admin extends React.Component {
        render() {

            return(
                <Container>
                    <Header as='h1' textAlign='center'>This is the admin page</Header>
                </Container>
                
            )
        }
    }


export default Admin;