import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {AdminView} from '../admin';
import {setStateFromStorage} from '../../actions/tournament-action';

export default class App extends React.Component{

  componentWillMount(){
    let state = store.getState();
    if(!state.token && localStorage.tournaments) store.dispatch(setStateFromStorage());
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
