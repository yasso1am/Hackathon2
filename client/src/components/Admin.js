import React from 'react'
import {Container, Header} from 'semantic-ui-react';
import FoodForm from './FoodForm'
import Footer from './Footer'

class Admin extends React.Component {
        render() {

            return(
                <Container>
                    <Header as='h1' textAlign='center'>This is the admin page</Header>
                    <FoodForm />
                </Container>
                
            )
        }
    }


export default Admin;