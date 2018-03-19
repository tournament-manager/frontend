import React from 'react';

export default class UserOptions extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <ul className="user-options-list">
        <li>User Settings</li>
        <li>Admin</li>
        <li>Referee</li>
        <li>Logout</li>
      </ul>
    );
  }
}
