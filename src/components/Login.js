import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const LogIn = (props) => {


  return(
    <Fragment>
    <div> Login page 
    </div>
    <form>
    <label>
      Name:
      <input onChange = {props.handleForm} value = {props.username} type="text" name="username"/>
    </label>
    <br/>
    <label>
      Password:
      <input onChange = {props.handleForm} value = {props.password} type="password" name="password"/>
      <br/>
      {/* ternary checking props.action*/}
      <button onClick = {props.logIn} type="button" value="Submit">Login</button>
      <br/>
      <button onClick = {props.toggleAction} type="submit" value="Submit">Create Account</button>
      <br/>
      <Link to= '/account'> To Account</Link>
    </label>

    </form>
    </Fragment>
  )
}

export default LogIn