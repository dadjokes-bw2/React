import React from 'react'
import NavBar from '../components/NavBar'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class EditPrivateJoke extends React.Component{
    constructor(props) {
        super(props)
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
        const joke = {
            id: this.props.match.params.id,
            joke: this.state.joke
        }
        this.props.editPrivateJoke(joke)
            .then(() => {
                this.props.history.push("/privateJokes")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        console.log(this.props)
        const {joke} = this.state

        return (
            <div className = 'edit-joke'>
            <NavBar />
            <Form>
                <FormGroup>
                    <Label for = 'username'>Edit a Joke!</Label>
                    <Input type = 'text' name = 'joke' placeholder = {this.props.location.state.joke} value = {joke} onChange = {this.handleChanges} />
                </FormGroup>
               
                <Button onClick = {this.submit}>Submit</Button>
            </Form>
        </div>
        )
    }
}
const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(EditPrivateJoke)