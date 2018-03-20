import React from 'react';
import {TournamentForm} from '../../tournament'; 

export default class AdminViewTournament extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tournament: this.props.tournament,
    };
  }

  render(){
    return (
      <section className="admin-tournament-view-container"> 
        <h2>{this.state.tournament.name}</h2>
        <TournamentForm tournament={this.state.tournament}/>
      </section>
    );
  }
}