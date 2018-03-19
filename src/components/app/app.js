import React from 'react';
import {Route} from 'react-router-dom';
import {AdminView} from '../admin';

export default class App extends React.Component{
 
  render(){
    return (
      <main>
        <h1>Tournament!</h1>
        <Route exact path="/admin" component={AdminView}/>
      </main>
    );
  }
}
