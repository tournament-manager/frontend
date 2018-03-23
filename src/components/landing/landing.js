import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth';
import {userSignupRequest, userSigninRequest} from '../../actions/signin-signup-actions';
import TournamentView from '../tournament/tournament-view/tournament-view';
import DivisionView from '../division/division-view/division-view';
import GameView from '../game/game-view';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.push(path);
  }

  render () {
    console.log('__LANDING_PROPS__', this.props);
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup;

    return (
      <div className="landing-container">
        <h1> Tournaments! </h1>
        <h3>Please {this.props.match.params.auth === 'signin' ? 'Sign In' : 'Sign Up'}</h3>
        <AuthForm
          auth={params.auth}
          history={this.props.history}
          onComplete={onComplete}/>
        <TournamentView />
        <DivisionView/>
        <GameView/>
      </div>


    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(userSignupRequest(user)),
  signin: user => dispatch(userSigninRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
