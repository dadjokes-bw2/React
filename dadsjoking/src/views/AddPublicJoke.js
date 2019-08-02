import React from 'react'
import {addPublicJoke, getPublicJokes} from '../actions/index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import NavBar from '../components/NavBar'


class AddPublicJoke extends React.Component {
    constructor() {
        super()
        this.state = {
           joke: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
          });
    }

    submit = e => {
        e.preventDefault()
        const {joke} = this.state
        this.props.addPublicJoke(joke)
            .then(() => {
                this.props.history.push("/publicJokes")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const {joke} = this.state
        const {isLoading, errorMessage} = this.props
        return (
            <div className = 'add-joke'>
                <NavBar />
                <Form>
                    <FormGroup>
                        <Label for = 'username'>Tell us a joke!</Label>
                        <Input type = 'text' name = 'joke' placeholder = 'Tell us a joke!' value = {joke} onChange = {this.handleChanges} />
                    </FormGroup>
                   
                    <Button onClick = {this.submit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
})

const mapDispatchToProps = {
    addPublicJoke,
    getPublicJokes
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddPublicJoke))