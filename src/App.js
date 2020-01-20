import React from 'react';
import './App.css';
import Account from './containers/Account';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login';



class App extends React.Component {
  state = {
    userId: "",
    action_type: "logIn", //"logIn/signUp"
    username: null,
    password: null,
    redirect: false
  } 


  logIn = () => { console.log ("login")
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "action_type": this.state.action_type
      })
    })
    .then(resp => resp.json())
    .then(user => {
      console.log(user)
      this.setState({
        userId: user.id,
        redirect: true
      })
    })
    
  }
  
  
  logOut = () => { console.log("log out")
    this.setState({
      userId: null,
      signUp: false
    })
  }
  
  toggleAction = () => {
    this.setState({
      action_type: this.state.action_type === "logIn"? "signUp":"logIn"
    })
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    let x
    if (this.state.redirect) {
      x = <Redirect to='/account'/>
    } else { 
      x = <Switch>
      <Route path= "/" exact render = { (routerProps) => <Login 
        logIn = {this.logIn} 
        handleForm = {this.handleForm}
        username = {this.state.username}
        password = {this.state.password}
        action = {this.state.action_type}
        toggleAction = {this.toggleAction}
        />} 
      />
      <Route exact path="/account">
        {this.state.userId ? <Account userId = {this.state.userId} logOut = {this.logOut}/> : <Redirect to="/" /> }
      </Route>
      </Switch>
    }
    
    return (
      <Router>
      <div className="App">
        {x}
        {/* <Switch>
        <Route path= "/" exact render = { (routerProps) => <Login 
          logIn = {this.logIn} 
          handleForm = {this.handleForm}
          username = {this.state.username}
          password = {this.state.password}
          action = {this.state.action_type}
          toggleAction = {this.toggleAction}
          />} 
        />
        <Route exact path="/account">
          {this.state.userId ? <Account userId = {this.state.userId} logOut = {this.logOut}/> : <Redirect to="/" /> }
        </Route>
        </Switch> */}
      </div>
      </Router>
    );
  }
}

export default App;
