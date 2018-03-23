import './_group-play-team-assignment.scss';
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
    this.handleAssignTeams =  this.handleAssignTeams.bind(this);
  }

  componentDidMount(){
    if(this.props.division) {
    
      let gameIDs = ['groupA', 'groupB', 'groupC', 'groupD'].reduce((acc, cur) => {
        this.props.division[cur].forEach(gameId => {
          acc[gameId] = [cur];
        });
        return acc;
      }, {});

      this.props.games.forEach(game => {
        if (gameIDs[game._id]) {
          if(game.teamA)  gameIDs[game._id].push(game.teamA, game.teamB);
        }
      });

      let teamIds = Object.values(gameIDs).reduce((acc, cur) => {
        if (cur.length > 1) {
          if (!acc[cur[0]]) acc[cur[0]] = new Set();
          acc[cur[0]].add(...cur.slice(1));
        }
        return acc;
      },{});

      let teams = Object.keys(teamIds).reduce((acc,cur) => {
        teamIds[cur].forEach(teamId => {
          if (!acc[teamId]) acc[teamId] = [];
          acc[teamId].push(cur);
        });
        return acc;
      },{});

      let groupTeams = this.props.teams.reduce((acc, cur) => {
        if (teams[cur._id]) {
          if (! acc[teams[cur._id][0]]) acc[teams[cur._id][0]] = [];
          acc[teams[cur._id][0]].push(cur);
        }
        return acc;
      },{});

      let groupSlots =  Object.keys(groupTeams).reduce((acc, cur) => {
        let letter = cur[cur.length -1];
        groupTeams[cur].forEach((team, i ) => { 
          acc[`${letter}${i + 1}`] = team;
        });
        return acc;
      }, {});
     
      this.setState({groupSlots: {...this.state.groupSlots, ...groupSlots}});
    }
  }

  componentWillReceiveProps(nextProps){
    // if(nextProps.division) {
    
    //   let gameIDs = ['groupA', 'groupB', 'groupC', 'groupD'].reduce((acc, cur) => {
    //     nextProps.division[cur].forEach(gameId => {
    //       acc[gameId] = [cur];
    //     });
    //     return acc;
    //   }, {});

    //   this.props.games.forEach(game => {
    //     if (gameIDs[game._id]) {
    //       if(game.teamA)  gameIDs[game._id].push(game.teamA, game.teamB);
    //     }
    //   });

    //   let teamIds = Object.values(gameIDs).reduce((acc, cur) => {
    //     if (cur.length > 1) {
    //       if (!acc[cur[0]]) acc[cur[0]] = new Set();
    //       acc[cur[0]].add(...cur.slice(1));
    //     }
    //     return acc;
    //   },{});

    //   let teams = Object.keys(teamIds).reduce((acc,cur) => {
    //     teamIds[cur].forEach(teamId => {
    //       if (!acc[teamId]) acc[teamId] = [];
    //       acc[teamId].push(cur);
    //     });
    //     return acc;
    //   },{});

    //   let groupTeams = this.props.teams.reduce((acc, cur) => {
    //     if (teams[cur._id]) {
    //       if (! acc[teams[cur._id][0]]) acc[teams[cur._id][0]] = [];
    //       acc[teams[cur._id][0]].push(cur);
    //     }
    //     return acc;
    //   },{});

    //   let groupSlots =  Object.keys(groupTeams).reduce((acc, cur) => {
    //     let letter = cur[cur.length -1];
    //     groupTeams[cur].forEach((team, i ) => { 
    //       acc[`${letter}${i + 1}`] = team;
    //     });
    //     return acc;
    //   }, {});
     
    //   this.setState({groupSlots: {...this.state.groupSlots, ...groupSlots}});
  
   // }
    if (!nextProps.groupSlots) return;
    this.setState({groupSlots: nextProps.groupSlots, teams: nextProps.teams});
  }

  onTeamSelect(groupSlot, team){
    let groupSlots = {...this.state.groupSlots};
    groupSlots[groupSlot] = team;
    this.setState({groupSlots: groupSlots});
  }

  handleAssignTeams(){
    let teamIds = Object.values(this.state.groupSlots).filter(team => team ? team._id : null );
    this.props.teamAssign(teamIds, this.props.division._id);
  }

  render(){
    return (
      <section className="group-team-assignment-container">
        <div className="group-team-assignment-btn-wrap">
          <button className="group-team-assignment-btn"
            onClick={this.handleAssignTeams}>
          Assign Teams
          </button>
        </div>
        <article className="group-play-container" >
          <h3>Group A</h3>
          <TeamSelect onSelect={this.onTeamSelect} 
            teamName={this.state.groupSlots.A1.name} 
            groupSlot="A1" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.A2.name} 
            groupSlot="A2" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.A3.name} 
            groupSlot="A3" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.A4.name}  
            groupSlot="A4" teams={this.props.teams}/>
        </article>

        <article className="group-play-container" >
          <h3>Group B</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.B1.name} 
            groupSlot="B1" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.B2.name} 
            groupSlot="B2" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.B3.name} 
            groupSlot="B3" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.B4.name} 
            groupSlot="B4" teams={this.props.teams}/>
        </article>

        <article className="group-play-container" >
          <h3>Group C</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.C1.name} 
            groupSlot="C1" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.C2.name} 
            groupSlot="C2" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.C3.name} 
            groupSlot="C3" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.C4.name} 
            groupSlot="C4" teams={this.props.teams}/>
        </article> 

        <article className="group-play-container" >
          <h3>Group D</h3>
          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.D1.name} 
            groupSlot="D1" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.D2.name} 
            groupSlot="D2" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.D3.name} 
            groupSlot="D3" teams={this.props.teams}/>

          <TeamSelect onSelect={this.onTeamSelect}
            teamName={this.state.groupSlots.D4.name} 
            groupSlot="D4" teams={this.props.teams}/>
        </article>   
      </section>
    );
  }
}