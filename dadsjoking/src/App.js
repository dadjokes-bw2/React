import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LandingPage, LoginPage, SignUpPage, PublicJokes, AddPublicJoke, AddPrivateJoke, PrivateJokes, EditPrivateJoke} from './views'
import {Route} from 'react-router-dom'
import {getPublicJokes, getPrivateJokes} from './actions/index'
import PrivateRoute from './components/PrivateRoute'


class App extends React.Component {
  componentDidMount() {
    this.props.getPublicJokes()
    this.props.getPrivateJokes()
}
  render(){
    return (
    <div className="App">
      
      <Route exact path = '/' component = {LandingPage} />
      
      <PrivateRoute exact path = '/privateJokes' component = {PrivateJokes} />
      <Route path = '/editJoke/:id' render = {props => <EditPrivateJoke {...props}/>}/>
      <Route exact path = '/publicJokes' component = {PublicJokes} />
      
      <Route exact path = '/login' component = {LoginPage} />
      <Route exact path = '/signup' component = {SignUpPage} />
      
      <Route exact path = '/addPublicJoke' component = {AddPublicJoke} />
      <Route exact path = '/addPrivateJoke' component = {AddPrivateJoke} />
    </div>
  );}
}

const mapDispatchToProps = {
  getPublicJokes,
  getPrivateJokes
}

export default withRouter(connect(null, mapDispatchToProps)(App))
