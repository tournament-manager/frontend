import React from 'react';
import store from '../../lib/store';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{

  logout(){
    store.dispatch({type:'RESET_STATE'});
  }

  render(){
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/landing">Home</Link></li>
          <li className="nav-list-item"><Link to="/landing/signin">Sign in</Link></li>
          <li onClick={this.logout}><Link to="/">Sign Out</Link></li>
          <li className="nav-list-item"><Link to="/tournament">Create Tournament</Link></li>
        </ul>
      </nav>
    );
  }
}