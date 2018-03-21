import React from 'react';
import TeamSelect from '../../select-box';

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
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article>
        <article className="group-play-container" >
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article> 
        <article className="group-play-container" >
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article> 
        <article className="group-play-container" >
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
          <TeamSelect teams={this.state.teams}/>
        </article>   
      </section>
    );
  }

}