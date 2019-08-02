import React from 'react'
import {connect} from 'react-redux'
import {getPublicJokes, deletePublicJoke} from '../actions/index'
import {withRouter, Link} from 'react-router-dom'
import {
    Card, CardBody, CardText, Button,
} from 'reactstrap'
import NavBar from '../components/NavBar'

class PublicJokes extends React.Component {
    delete = e => {
        e.preventDefault()
        console.log(e.target)
        this.props.deletePublicJoke(e.target.id)
        this.props.getPublicJokes()
    }

    render() {
        const {isLoading, errorMessage, publicJokes} = this.props

        if (isLoading) {
            return <p>Loading Jokes...</p>
        }
        
        return (
            <section className = 'public-jokes'>
                <NavBar />
                <h2>Public Jokes</h2>
                {publicJokes.map((joke) => {
                    return (
                        <Card key = {joke.id}>
                            <CardBody>
                                <CardText>{joke.joke}</CardText>
                                <Button outline color = 'primary' onClick = {this.delete} id = {joke.id}>✖</Button>
                            </CardBody>
                            
                        </Card>
                    )
                })}
                <Link to = '/addPublicJoke'><Button outline color = 'secondary'>Add joke!</Button></Link>
            </section>
        )
    
}
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        publicJokes: state.publicJokes
    }
}

const mapDispatchToProps = {
    getPublicJokes,
    deletePublicJoke
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PublicJokes))