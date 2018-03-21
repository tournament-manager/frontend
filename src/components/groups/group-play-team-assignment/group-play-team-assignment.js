import React from 'react';
import {TeamSelect} from '../../select-box';

export default class GroupTeamAssignment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      divisions: '',
      teams: '',
    };
  }


  render(){
    return (
      <section className="group-team-assignment-container">
        <article className="group-play-container" >
          <h3>Group A</h3>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article>
        <article className="group-play-container" >
          <h3>Group B</h3>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article> 
        <article className="group-play-container" >
          <h3>Group C</h3>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article> 
        <article className="group-play-container" >
          <h3>Group D</h3>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article>   
      </section>
    );
  }

}