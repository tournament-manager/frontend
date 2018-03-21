import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {AdminView} from '../admin';
import {setStateFromStorage} from '../../actions/tournament-actions';
import {saveToLocalStorage} from '../../lib/local-storage';

import {userSignupRequest} from '../../actions/signin-signup-actions';

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default class App extends React.Component{

  componentWillMount(){

    if (!localStorage.token){
      store.dispatch(userSignupRequest({
        email: 'kevin@kevin.com',
        fullname: 'Kevin Miller',
        password: 'password',
        notification: true,
      }));
    }
    let state = store.getState();
    if(!state.tournaments.length && localStorage.tournaments) store.dispatch(setStateFromStorage());
  }

  render(){
    return (
      <Provider store={store}>
        <main>
          <h1>Tournament!</h1>
          <Route exact path="/admin" component={AdminView}/>
        </main>
      </Provider>
    );
  }
}

