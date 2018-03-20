import React from 'react';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {AdminView} from '../admin';

export default class App extends React.Component{

  
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
