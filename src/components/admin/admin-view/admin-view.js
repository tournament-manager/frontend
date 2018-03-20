import React from 'react';
import AdminViewDivisions from '../admin-view-divisions/admin-view-divisions';
import AdminViewTournament from '../admin-view-tournaments/admin-view-tournaments';
import {TournamentSelect} from '../../select-box';
import {connect} from 'react-redux';

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
          onSelect={this.selectTournament}/>
        {this.state.tournament ?
          <React.Fragment>  
            <AdminViewTournament tournament={this.state.tournament}/>
            <AdminViewDivisions divisions={this.state.divisions}/>
          </React.Fragment>  
          : undefined}
      </section>
    );
  }
}

const mapPropsToState = state => ({
  tournaments: state.tournaments,
  divisions: state.divisions,
});

export default connect(mapPropsToState, null)(AdminView);