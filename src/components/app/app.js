import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import Landing from '../landing/landing';
import {AdminView} from '../admin';
import {setStateFromStorage} from '../../actions/tournament-actions';
import {saveToLocalStorage} from '../../lib/local-storage';
import {tournamentAllGetRequest} from '../../actions/tournament-actions';
import {divisionAllGetRequest} from '../../actions/division-actions';
import {teamAllGetRequest} from '../../actions/team-actions';
import {adminTournamentsGetRequest} from '../../actions/admin-tournaments-actions';
import {setToken} from '../../actions/signin-signup-actions';
import {AppNav} from './';

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default class App extends React.Component{

  componentWillMount(){
    let state = store.getState();
    if (!state.token && localStorage.token) store.dispatch(setToken(localStorage.token));

    Promise.all([
      store.dispatch(tournamentAllGetRequest()),
      store.dispatch(divisionAllGetRequest()),
      store.dispatch(teamAllGetRequest()),
    ])
      .then(() => {
        if(store.getState().token) return store.dispatch(adminTournamentsGetRequest());
      })
      .then(() => {
        let state = store.getState();
        if(!state.tournaments.length && localStorage.tournaments) store.dispatch(setStateFromStorage());
      })
      .catch(console.error);
  }

  render(){
    return (
      <Provider store={store}>
        <React.Fragment>
          {store.getState().token ? <AppNav/> : undefined}
          <main>
            <h1>Tournament!</h1>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/admin" component={AdminView}/>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}
