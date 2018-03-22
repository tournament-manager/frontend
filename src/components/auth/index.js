import React from 'react';
import {renderIf} from '../../lib/utils';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      notification: true,
      fullnameError: null,
      emailError: null,
      passwordError: null,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value.trim(),
      fullnameError: name === 'fullname' && !value.trim() ? 'fullname required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError: name === 'password' && !value.trim() ? 'Password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { fullname, email, password, notification } = this.state;
    console.log(this.state.fullname, this.state.email, this.state.password);
    this.props.onComplete({ fullname, email, password, notification })
      .then(() => this.setState({ fullname: '', email: '', password: '' }))
      .then(() => this.props.history.push('/dashboard'))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <form
        className="auth-form"
        onSubmit={this.handleSubmit}
        noValidate>

        <input
          type="text"
          name="fullname"
          placeholder="Enter fullname"
          pattern=""
          value={this.state.fullname}
          onChange={this.handleChange}/>
        {renderIf(this.state.fullnameError, <span className="tooltip">{this.state.fullnameError}</span>)}

        <input
          type="email"
          name="email"
          placeholder="user@email.com"
          value={this.state.email}
          onChange={this.handleChange}/>


        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.auth}Submit</button>
      </form>
    );
  }
}
