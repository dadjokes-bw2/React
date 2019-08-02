import React from 'react'
import {signUp} from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import NavBar from '../components/NavBar'


class SignUpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
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
        const {username, password} = this.state
        this.props.signUp(username, password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const {username, password} = this.state
        const {isLoading, errorMessage} = this.props
        return (
            <div className = 'signup-page'>
                <NavBar />
                <Form>
                    <FormGroup>
                        <Label for = 'username'>Username</Label>
                        <Input type = 'text' name = 'username' placeholder = 'Username' value = {username} onChange = {this.handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'password'>Password</Label>
                        <Input type = 'text' name = 'password' placeholder = 'Password' value = {password} onChange = {this.handleChanges} />
                    </FormGroup>
                    <Button onClick = {this.submit}>Sign Up!</Button>
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
    signUp
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SignUpPage))