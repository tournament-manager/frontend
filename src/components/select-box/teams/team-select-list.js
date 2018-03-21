import './_team-select-list.scss';
import React from 'react';
import TeamItem from './team-select-item';

export default class TeamSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teams: this.props.teams,
      isVisible: false,
      teamName: '',
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.teamName !== nextProps.teamName)
      this.setState({teamName: nextProps.teamName});
  }

  toggleVisible(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleCreate(){
    this.toggleVisible();
    this.setState({teamName: ''});
    this.props.onSelect('');
  }

  handleChange(team){
    this.toggleVisible();
    this.setState({teamtName: team.name});
    this.props.onSelect(this.props.groupSlot, team);
  }

  render(){
    return(
      <div className="team-list-wrap">
        <div className='team-value'
          onClick={this.toggleVisible}>
          {this.state.teamName || '--'}</div>
        <ul className={`team-list${this.state.isVisible ? 'visible' : ''}`}>
          {this.props.teams.length ? this.props.teams.map(team => 
            <TeamItem key={`${team._id}`} toggle={this.handleChange}
              team={team} />
          ) : undefined}
        </ul>
      </div>
    );
  }
}

