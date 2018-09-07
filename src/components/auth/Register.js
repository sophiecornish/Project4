import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

export default class AuthRegister extends React.Component {
  state = {
    passwordHidden: true,
    username: 'Jack Horner',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {}
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirmation) {
      const errors = this.state.errors;
      errors.passwordConfirmation = 'passwords do not match';
      return this.setState({ errors });
    }
    axios.post('/api/register', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token);
        this.props.history.push('/films');
      })
      .catch(err => {
        const oldErrors = this.state.errors;
        const newErrors = err.response.data.response;
        const errors = { ...oldErrors, ...newErrors };
        console.log(err.response.data.response);
        this.setState( {errors });
      });
  }

  handleChange = event => {
    // const {name, value } = event.target; same as line below
    const {  target: { name, value }} = event;
    const errors = this.state.errors;
    delete errors[name];
    this.setState({ [name]: value });
  }


  togglePasswordShow = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState( { passwordHidden: passwordHidden });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          {/* username */}
          <input name="username" placeholder="eg.bananaface" value={this.state.username || ''} onChange={this.handleChange}></input>
          <span style={{ color: 'red'}}>{this.state.errors.username}</span>

          {/* email */}
          <input name="email" placeholder="example@email.com" value={this.state.email || ''} onChange={this.handleChange}></input>
          <span style={{ color: 'red'}}>{this.state.errors.email}</span>

          {/* password */}
          <input name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder='password' value={this.state.password || ''} onChange={this.handleChange}></input>
          <span style={{ color: 'red'}}>{this.state.errors.password}</span>

          {/* password confimation */}
          <input name="passwordConfirmation" type={this.state.passwordHidden ? 'password' : 'text'} placeholder='confirm your password' value={this.state.passwordConfirmation || ''} onChange={this.handleChange}></input>
          <span style={{ color: 'red'}}>{this.state.errors.passwordConfirmation}</span>

          {/* error messages */}
          <span style={{ color: 'red'}}>{this.state.errors.passwordConfirmation}</span>

          <button>Submit</button>
        </form>
        <button onClick={this.togglePasswordShow}>👁</button>
      </section>

    );
  }
}
