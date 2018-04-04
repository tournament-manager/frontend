import './_scorecard-view.scss';
import React from 'react';
import {connect} from 'react-redux';
import {TournamentSelect, DivisionSelect, GameSelect} from '../../select-box';
import {gameUpdateRequest} from '../../../actions/game-actions';
import ScorecardForm from '../scorecard-form/scorecard-form';

class ScoreCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: '',
      divisions: '',
      division: '',
      games: '',
      game: '',
    };
    this.selectTournament = this.selectTournament.bind(this);
    this.selectDivision = this.selectDivision.bind(this);
    this.selectGame = this.selectGame.bind(this);
  }

  selectTournament(tournament){
    this.setState({
      tournament: tournament,
      divisions: tournament.divisions,
    });
  }

  selectDivision(division){
    this.setState({division: division});
  }

  selectGame(game){
    this.setState({
      game: game,
    });
  }

  render() {
    return (
      <section className="scorecard-view-container">
        <article className="scorecard-view-selections-wrap">
          <h2>Scorecard</h2>
          {/* <div className="scorecard-view-selections-wrap"> */}
          <TournamentSelect tournaments={this.props.tournaments}
            tournamentName={this.state.tournament.name}
            onSelect={this.selectTournament}/>

          <DivisionSelect divisions={this.state.divisions}
            DivisionName={this.state.tournament.name}
            onSelect={this.selectDivision}/>

          <GameSelect division={this.state.division}
            gameNumber={this.state.game.gamenumber}
            onSelect={this.selectGame}/>
          {/* </div> */}
        </article>
        {this.state.game ? (
          <article className="scorecard-view-form-wrap">
            <h2>{this.state.game.group}: [<span> Game {this.state.game.gamenumber} </span>]</h2>
            <ScorecardForm game={this.state.game}
              resetGameSelection={this.selectGame}
              onComplete={this.props.gameUpdateRequest}/>
          </article>  
        ) : undefined}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
});

const mapDispatchToProps = dispatch => ({
  gameUpdateRequest: game => dispatch(gameUpdateRequest(game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardView);