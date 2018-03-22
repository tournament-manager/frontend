import React from 'react';
import mongoose from 'mongoose';
import Game from '../../../../backend/model/game-model';

class RefereeView extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      gamenumber: [],
      teamA: '',
      teamAResult: '',
      teamBResult: '',
    };
  }

  render(){
    return(
      <div className="referee-submission">
      <select>Game</select>
        <h1>Scoreboard Submission</h1>
        <form>
          <h3>Home Team: {this.state.teamA}</h3>
            <h5>
            <input
              type="number"
              name="Team A Final Score"
              placeholder="Team A Final Score"
              value={this.state.teamAResult}
            />
            Home Results: {this.state.teamAResult}
          </h5>

          <h3>AwayTeam :{this.state.teamAResult}</h3>
          <h5>
            <input
              type="number"
              name="Team B Final Score"
              placeholder="Team B Final Score"
              value={this.state.teamBResult}
            />
            Away Team Results: {this.state.teamAResult}
          </h5>
          <button>Submit Final Result</button>
        </form>
      </div>
    );
  }
}

export default RefereeView;