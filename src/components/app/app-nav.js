import './_app.scss';
import React from 'react';
import {Link} from 'react-router-dom';

export default class AppNav extends React.Component{
  render(){
    return (
      <ul className="app-nav-list">
        <li className="app-nav-item"><Link to="/">Home</Link></li>
        <li className="app-nav-item"><Link to="/admin">Admin</Link></li>
      </ul>
    );
  }
} 