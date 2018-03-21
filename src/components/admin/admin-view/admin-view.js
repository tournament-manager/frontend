import React from 'react';
import AdminViewDivisions from '../admin-view-divisions/admin-view-divisions';
import AdminViewTournament from '../admin-view-tournaments/admin-view-tournaments';
import {TournamentSelect} from '../../select-box';
import {connect} from 'react-redux';
import {tournamentCreateRequest, tournamentUpdateRequest} from '../../../actions/tournament-actions';
import {divisionCreateRequest, divisionUpdateRequest}  from '../../../actions/division-actions';

class AdminView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tournament: '',
      divisions: [],
    };
    this.selectTournament =  this.selectTournament.bind(this);
  }

  selectTournament(tournament){
    this.setState({tournament: tournament, divisions: this.props.divisions[tournament._id]});
  }

  render(){
    return (
      <section className="admin-view-container">
        <TournamentSelect tournaments={this.props.tournaments}
          tournamentName={this.state.tournament.name}
          onSelect={this.selectTournament}/>
        <AdminViewTournament tournament={this.state.tournament}
          submitHandlers={this.props.tournamentFormHandlers}
          selectTournament={this.selectTournament}/>
        {this.state.tournament ?
          <AdminViewDivisions divisions={this.state.divisions}
            submitHandlers={this.props.divisionFormHandlers}/>
          : undefined}
      </section>
    );
  }
}

const mapPropsToState = state => ({
  tournaments: state.tournaments,
  divisions: state.divisions,
});

const mapDispatchToProps = dispatch => ({
  tournamentFormHandlers: {
    tournamentCreateRequest: tournament => dispatch(tournamentCreateRequest(tournament)),
    tournamentUpdateRequest: tournament => dispatch(tournamentUpdateRequest(tournament)),
  },
  divisionFormHandlers: {
    divisionCreateRequest: division => dispatch(divisionCreateRequest(division)),
    divisionUpdateRequest: division => dispatch(divisionUpdateRequest(division)),
  }
});

export default connect(mapPropsToState, mapDispatchToProps)(AdminView);