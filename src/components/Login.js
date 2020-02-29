import React, { Component } from 'react'
import Logo from '../photos/image.png'
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import axios from 'axios'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      fields: {
        username: '',
        password: ''
      }
    }
  }

  handleChange (event) {
    const name = event.target.name
    this.setState({ ...this.state, fields: { ...this.state.fields, [name]: event.target.value } })
  }

  signUp () {
    axios.post('https://symcrypt.docs.apiary.io/#reference/authentication/login', {
      username: this.state.fields.username,
      password: this.state.fields.password
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log(error)
      })
  }

  signIn () {
    axios.post('https://symcrypt.docs.apiary.io/#reference/authentication/login', {
      username: this.state.fields.username,
      password: this.state.fields.password
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='main-div'>
        <div className='login-div'>
          <div className='logo-div'>
            <img src={Logo} />
            <p>SYMCRYPT</p>
          </div>
          <div className='input-div'>
            <PersonIcon className='icon-style' />
            <input
              placeholder='Username'
              name='username'
              onChange={(event) => this.handleChange(event)}
            />
            <LockIcon className='lock-style' />
            <input
              placeholder='Password'
              name='password'
              type='password'
              onChange={(event) => this.handleChange(event)}
            />
            <button onClick={() => this.signIn()}>SIGN IN</button>
          </div>
          <div className='signup-div'>
            <a href='http://google.com' target='_blank' rel='noopener noreferrer'>Forgot password?</a>
            <button onClick={() => this.signUp()}>SIGN UP</button>
          </div>
        </div>
      </div>
    )
  }
}
