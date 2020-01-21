import React from 'react'
import './App.css'
import Account from './containers/Account'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'



class App extends React.Component {
  state = {
    userId: null,
    username: null,
    username: '',
    password: '',
    passwordConf: '',
    redirect: false
  } 


  signUp = () => {
    console.log ("login")
    if (this.state.password === this.state.passwordConf) {
      fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password
        })
      })
      .then(resp => resp.json())
      .then(response => {
        console.log(response)
        if (response.errors) {
          alert(response.errors)
        } else {
          this.setState({
            userId: response.id,
            username: response.username
          }, () => {this.props.history.push("/account")})
        }
      })
    } else {
      alert ("Passwords don't match!" )
    }
  }

  logIn = () => {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      })
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if (response.errors) {
        alert(response.errors)
      } else {
        this.setState({
          userId: response.id,
          username: response.username
        }, () => {this.props.history.push("/account")})
      }
    })
  }
  
  logOut = () => { console.log("log out")
    this.setState({
      userId: null,
      signUp: false
    })
  }

  handleForm = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route path= "/" exact render = { (routerProps) => <Login 
            signUp = {this.signUp} 
            logIn = {this.logIn} 
            handleForm = {this.handleForm}
            username = {this.state.username}
            password = {this.state.password}
            confirmPassword = {this.state.passwordConf}
            // action = {this.state.action_type}
            // toggleAction = {this.toggleAction}
            />} />
          
          <Route exact path="/account" render={(routerProps) => this.state.userId ? 
            <Account userId={this.state.userId} logOut={this.logOut} {...routerProps}/>
            :
            <Redirect to="/" />}/>

          <Route render={() => <h1>There's no such route...</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App;
