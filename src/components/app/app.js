import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';

import {Route} from 'react-router-dom';
import Landing from '../landing/landing';
import {setStateFromStorage} from '../../actions/tournament-actions';
import {saveToLocalStorage} from '../../lib/local-storage';
import {tournamentAllGetRequest} from '../../actions/tournament-actions';
import {divisionAllGetRequest} from '../../actions/division-actions';
import {teamAllGetRequest} from '../../actions/team-actions';
import TournamentView from '../tournament/tournament-view/tournament-view';
import DivisionView from '../division/division-view/division-view';
import AdminView from '../admin/admin-view/admin-view';
import GameView from '../game/game-view';
import Navbar from '../navbar/navbar';
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default class App extends React.Component{

  componentWillMount(){
    // let state = store.getState();
    // if(!state.tournaments.length && localStorage.tournaments) store.dispatch(setStateFromStorage());
    // if (localStorage.token)
    //   store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token });

    Promise.all([
      store.dispatch(tournamentAllGetRequest()),
      store.dispatch(divisionAllGetRequest()),
      store.dispatch(teamAllGetRequest()),
    ])
      .then(() => {
        let state = store.getState();
        if(!state.tournaments.length && localStorage.tournaments) store.dispatch(setStateFromStorage());
      }
      )
      .catch(console.error);

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
          <React.Fragment>
            <Navbar token={token} store={store} />
            <h1>Tournament!</h1>
            <Route exact path="/admin" component={AdminView} />
            <Route exact path="/welcome/:auth" component={Landing} />
            <Route exact path="/tournaments" component={TournamentView} />
            <Route exact path="/divisions" component={DivisionView} />
            <Route exact path="/games" component={GameView} />
          </React.Fragment>
        </Provider>
      </main>
    );
  }
}
