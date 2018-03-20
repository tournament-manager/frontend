import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../auth/auth-form/auth-form';
import { signupRequest, signinRequest } from '../../action/auth-action';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    // this.props.history.replace(path)
    this.props.history.push(path);
  }
  render() {
    console.log('__LANDING_PROPS__', this.props);
    let { params } = this.props.match;
    let onComplete = params.auth === 'signin' ?
      this.props.signin :
      this.props.signup;

    return (
      <div className="landing-container">
        <h1>Welcome to Tournament Manager</h1>
        <h4>Login to view your tournaments</h4>
        <h4>sign up to customize your tournament views</h4>
        <AuthForm
          auth={params.auth}
          redirect={this.redirect}
          onComplete={onComplete}
        />
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
