import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
// import Flash from '../../lib/Flash';

export default class AuthLogin extends React.Component {
  state = {
    passwordHidden: true
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token);
        // Flash.setMessage('info', res.data.message);
        this.props.history.push('/films');
      })
      .catch(err => {
        console.log(err.response);
        // Flash.setMessage('danger', 'Invalid email/password');
        // console.log('flash messages is', Flash.getMessages());
        //redirect to current page
        this.props.history.push(this.props.location.pathname);
      });
  };

  handleChange = event => {
    // const {name, value } = event.target; same as line below
    const {  target: { name, value }} = event;
    this.setState({ [name]: value });
  }


  togglePasswordShow = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState( { passwordHidden: passwordHidden });
  }

  render() {
    return (
      <section className="columns is-centered has-text-centered">
        <div className="column is-6 loginDiv has-text-centered">
          <Link className="" to="/"> <img className="logo" src = 'https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/cos_0.png'></img></Link>
          <p>LOGIN</p>
          <p>Not got an account? Register <Link to="/register">here</Link></p>
          <form onSubmit={this.handleSubmit}>
            <input name="email" placeholder="example@email.com" value={this.state.email} onChange={this.handleChange}></input>
            <input name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder='password' value={this.state.password} onChange={this.handleChange}></input>
            <button className="showButton">Submit</button>
          </form>
          <button onClick={this.togglePasswordShow}>👁</button>
        </div>
      </section>

    );
  }
}
