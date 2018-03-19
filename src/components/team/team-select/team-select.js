import React from 'react';

export default class TeamSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <ul className="team-select-list">
        <li>team_1</li>
        <li>team_2</li>
      </ul>
    );
  }
}
