import React from 'react';
import {TeamSelect} from '../../select-box';

export default class GroupTeamAssignment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      divisions: '',
      teams: '',
      groupSlots: {
        A1: '',
        A2: '',
        A3: '',
        A4: '',
        B1: '',
        B2: '',
        B3: '',
        B4: '',
        C1: '',
        C2: '',
        C3: '',
        C4: '',
        D1: '',
        D2: '',
        D3: '',
        D4: '',
      },
    };

    this.onTeamSelect = this.onTeamSelect.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.groupSlots) return;
    this.setState({groupSlots: nextProps.groupSlots});
  }

  onTeamSelect(groupSlot, team){
    let groupSlots = {...this.state.groupSlots};
    groupSlots[groupSlot] = team;
    this.setState({groupSlots: groupSlots});
  }

  render(){
    return (
      <section className="group-team-assignment-container">
        <article className="group-play-container" >
          <h3>Group A</h3>
          <TeamSelect onSelect={this.onTeamSelect} 
            teamName={this.state.groupSlot.A1.name} 
            groupSlot="A1" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.A2.name} 
            groupSlot="A2" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.A3.name} 
            groupSlot="A3" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.A4.name}  
            groupSlot="A4" teams={this.state.teams}/>
        </article>

        <article className="group-play-container" >
          <h3>Group B</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.B1.name} 
            groupSlot="B1" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.B2.name} 
            groupSlot="B2" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.B3.name} 
            groupSlot="B3" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.B4.name} 
            groupSlot="B4" teams={this.state.teams}/>
        </article>

        <article className="group-play-container" >
          <h3>Group C</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.C1.name} 
            groupSlot="C1" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.C2.name} 
            groupSlot="C2" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.C3.name} 
            groupSlot="C3" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.C4.name} 
            groupSlot="C4" teams={this.state.teams}/>
        </article> 

        <article className="group-play-container" >
          <h3>Group D</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.D1.name} 
            groupSlot="D1" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.D2.name} 
            groupSlot="D2" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.D3.name} 
            groupSlot="D3" teams={this.state.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlot.D4.name} 
            groupSlot="D4" teams={this.state.teams}/>
        </article>   
      </section>
    );
  }
}