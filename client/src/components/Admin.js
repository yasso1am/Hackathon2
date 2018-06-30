import React from 'react'
import {Container, Header} from 'semantic-ui-react';
import FoodForm from './FoodForm'
import Footer from './Footer'
import styled from 'styled-components'


class Admin extends React.Component {
        render() {
            


            return(
                <Container>
                <HeaderImage></HeaderImage>
                    <Header as='h1' textAlign='center'>This is the admin page</Header>
                    <FoodForm />      
                </Container>
                
            )
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

export default Admin;