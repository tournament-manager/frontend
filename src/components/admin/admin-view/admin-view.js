import React from 'react';
import {Redirect} from 'react-router-dom';
import AdminViewDivisions from '../admin-view-divisions/admin-view-divisions';
import AdminViewTournament from '../admin-view-tournaments/admin-view-tournaments';
import {TournamentSelect} from '../../select-box';
import {connect} from 'react-redux';
import {teamsGetByTournamentRequest} from '../../../actions/team-actions';
import {tournamentCreateRequest, tournamentUpdateRequest,tournamentGetRequest} from '../../../actions/tournament-actions';
import {divisionCreateRequest, divisionUpdateRequest, divisionDeleteRequest, divisionPopulateRequest}  from '../../../actions/division-actions';

class AdminView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teams: '',
      tournament: '',
      divisions: [],
     // games: this.props.games || [],
    };
    this.selectTournament =  this.selectTournament.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // if(this.state.tournament)
    //   this.setState({
    //     //divisions: nextProps.divisions[this.state.tournament._id] || [], 
    //     //games: this.props.games || [],
    //     //teams: nextProps.teams[this.state.tournament._id] || '',
    //   });
  }

  selectTournament(tournament){
    if (tournament._id){
      return  this.props.tournamentGetRequest(tournament._id)
        .then(tournamentAction => {
          let fullTournament = tournamentAction.payload;
          if (this.props.teams[tournament._id]) return fullTournament;
          return this.props.teamsGetByTournament(tournament._id)
            .then (() => fullTournament);
        })
        .then(tournament => {
          this.setState({
            tournament: tournament, 
            teams: this.props.teams[tournament._id], 
            divisions: tournament.divisions, 
          });
        });
    }

    this.setState({
      tournament: tournament, 
      teams: '', 
      divisions: '', 
      //games: this.props.games || [],
    });
  }

  // selectTournament(tournament){
  //   if (tournament._id && !this.props.teams[tournament._id]){
  //     return this.props.teamsGetByTournament(tournament._id)
  //       .then(() => {
  //         this.setState({
  //           tournament: tournament, 
  //           teams: this.props.teams[tournament._id], 
  //           divisions: this.props.divisions[tournament._id], 
  //           games: this.props.games || [],
  //         });
  //       });
  //   }

  //   this.setState({
  //     tournament: tournament, 
  //     teams: this.props.teams[tournament._id], 
  //     divisions: this.props.divisions[tournament._id], 
  //     games: this.props.games || [],
  //   });
  // }

  render(){
    if (!localStorage.token) return <Redirect to='/' />;
    return (
      <section className="admin-view-container">
        <TournamentSelect tournaments={this.props.tournaments}
          tournamentName={this.state.tournament.name}
          onSelect={this.selectTournament}
          lastOption={true}/>
        <AdminViewTournament tournament={this.state.tournament}
          submitHandlers={this.props.tournamentFormHandlers}
          selectTournament={this.selectTournament}/>
        {this.state.tournament ?
          <AdminViewDivisions divisions={this.state.divisions}
            tournament={this.state.tournament}
            submitHandlers={this.props.divisionFormHandlers}
            teamAssign={this.props.teamAssign}
            teams={this.state.teams}
            //games={this.props.games}
          />
          : undefined}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.adminTournaments,
  // divisions: state.divisions,
  teams: state.teams,
  // games: state.games,
});

const mapDispatchToProps = dispatch => ({
  tournamentFormHandlers: {
    tournamentCreateRequest: tournament => dispatch(tournamentCreateRequest(tournament)),
    tournamentUpdateRequest: tournament => dispatch(tournamentUpdateRequest(tournament)),
  },
  divisionFormHandlers: {
    divisionCreateRequest: division => dispatch(divisionCreateRequest(division)),
    divisionUpdateRequest: division => dispatch(divisionUpdateRequest(division)),
    divisionDeleteRequest: division => dispatch(divisionDeleteRequest(division)),
  },
  teamAssign: (teamIds, divisionId) => dispatch(divisionPopulateRequest(teamIds, divisionId)),
  teamsGetByTournament: tournamentId => dispatch(teamsGetByTournamentRequest(tournamentId)),
  tournamentGetRequest: id => dispatch(tournamentGetRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);