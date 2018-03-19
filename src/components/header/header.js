import React from 'react';
import {Nav} from '../nav';

export default class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>Tournament</h1>
        <Nav/>
      </header>
    );
  }
}
