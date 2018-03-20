import './_tournament-list.scss';
import React from 'react';
import TournamentItem from './tournament-item';

export default class TournamentSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tournaments: this.props.tournaments,
      isVisible: false,
      tournamentName: '',
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleVisible(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleChange(tournament){
    this.toggleVisible();
    this.setState({tournamentName: tournament.name});
    this.props.onSelect(tournament);
  }

  render(){
    return(
      <div className="tournament-list-wrap">
        <div className='tournament-value'
          onClick={this.toggleVisible}>
          {this.state.tournamentName || '--'}</div>
        <ul className={`tournament-list${this.state.isVisible ? 'visible' : ''}`}>
          {this.props.tournaments.length ? this.props.tournaments.map(tournament => 
            <TournamentItem key={`${tournament._id}`} toggle={this.handleChange}
              tournament={tournament} />
          ) : undefined}
        </ul>
      </div>
    );
  }
}









{/* <ul>
{this.props.tournaments.map(tournament => (
  <li className="tournament-select-item"
    key={tournament._id}>
      tournament.name
  </li>
))}
</ul>
</div> */}