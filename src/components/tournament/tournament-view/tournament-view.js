import './_tournament-view.scss';
import React from 'react';
import {connect} from 'react-redux';
import {TournamentSelect, DivisionSelect} from '../../select-box';
import {GroupPlayView} from '../../groups';
import EliminationRoundView from '../../elimination-round/elimination-round-view/elimination-round-view';

class TournamentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      tournament: '',
      divisions: '',
      division: '',
    };
    this.toggle = this.toggle.bind(this);
    this.selectTournament = this.selectTournament.bind(this);
    this.selectDivision = this.selectDivision.bind(this);
  }

  toggle(){
    this.setState({isVisible: !this.state.isVisible});
  }

  selectTournament(tournament){
    this.setState({
      tournament: tournament,
      divisions: tournament.divisions,
    });
  }

  selectDivision(division){
    this.setState({
      division: division,
    });
  }

  render() {
    return (
      <section className="tournament-view-container">
        <div className="tournament-view-selections-wrap">
          <h2>Tournaments</h2>
          <TournamentSelect tournaments={this.props.tournaments}
            tournamentName={this.state.tournament.name}
            onSelect={this.selectTournament}/>

          <DivisionSelect divisions={this.state.divisions}
            DivisionName={this.state.tournament.name}
            onSelect={this.selectDivision}/>
        </div>
        {this.state.division ?
          ( 
            <React.Fragment >
              <GroupPlayView division={this.state.division} />
              <EliminationRoundView heading="Consolidation"
                games={this.state.division.consolidation}/>
              <EliminationRoundView heading="Semifinals"
                games={this.state.division.semiFinal}/>
              <EliminationRoundView heading="Final"
                games={this.state.division.final}/>
            </React.Fragment >
          )
          : undefined}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  //divisions: state.divisions,
  //game: state.game,
});

export default connect(mapStateToProps, null)(TournamentView);