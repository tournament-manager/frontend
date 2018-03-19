import React from 'react';

export default class TournamentSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <ul className="tournament-select-list">
        <li>tournament_1</li>
        <li>tournament_2</li>
      </ul>
    );
  }
}
