import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {AdminView} from '../admin';
import {setStateFromStorage} from '../../actions/tournament-actions';
import {saveToLocalStorage} from '../../lib/local-storage';
import Landing from '../landing/landing-divisions';

import Navbar from '../navbar/navbar'; //not yet created
import { Redirect } from 'react-router-dom';
import Tournament from '../tournament-view/tournament-view';

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default class App extends React.Component{

  componentWillMount(){
    let state = store.getState();
    if(!state.tournaments.length && localStorage.tournaments) store.dispatch(setStateFromStorage());
    if (localStorage.token)
      store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token });
  }

  // render(){
  //   return (
  //     <Provider store={store}>
  //       <main>
  //         <h1>Tournament!</h1>
  //         <Route exact path="/admin" component={AdminView}/>
  //       </main>
  //     </Provider>
  //   );
  // }
  // }

  // const store = createStore();

  // export default class App extends React.Component {
  //   componentWillMount() {
  //     if (localStorage.token)
  //       store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token })
  //   }

  render() {
    let token = store.getState();
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar token={token} store={store} />
              <h1>Tournament!</h1>
              <Route exact path="/admin" component={AdminView} />
              <Route exact path="/welcome/:auth" component={Landing} />
              <Route exact path="/tournaments" component={Tournament}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}