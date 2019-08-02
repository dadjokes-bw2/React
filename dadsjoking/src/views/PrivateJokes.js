import React from 'react'
import {connect} from 'react-redux'
import {getPrivateJokes, editPrivateJoke, deletePrivateJoke, addPrivateJoke} from '../actions/index'
import {withRouter, Link} from 'react-router-dom'
import {
    Card, CardBody, CardText, Button,
} from 'reactstrap'
import NavBar from '../components/NavBar'

function PrivateJokes(props) {
    const {isLoading, errorMessage, privateJokes} = props

    if (isLoading) {
        return <p>Loading Jokes...</p>
    }
    
        return (
            <section className = 'private-jokes'>
                <NavBar />
                <h2>Private Jokes</h2>
                {privateJokes.map((joke) => {
                    const location = {
                        pathname: `editJoke/${joke.id}`,
                        state: {
                            joke: joke.joke
                        }
                    }
                    return (
                        <Card key = {joke.id}>
                            <CardBody>
                                <CardText>{joke.joke}</CardText>
                                <Button outline color = 'primary' onClick = {() => {props.deletePrivateJoke(joke.id)}}>✖</Button>
                                <Link to = {location}><Button outline color = 'primary'>✏</Button></Link>
                            </CardBody>
                            
                        </Card>
                    )
                })}
                <Link to = '/addPrivateJoke'><Button outline color = 'secondary'>Add joke!</Button></Link>
            </section>
        )
    
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        privateJokes: state.privateJokes
    }
}

const mapDispatchToProps = {
    addPrivateJoke,
    getPrivateJokes,
    editPrivateJoke,
    deletePrivateJoke
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PrivateJokes))