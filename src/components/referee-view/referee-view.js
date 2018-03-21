import React from 'react';

class RefereeView extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="referee-submission">
        <h1>Scoreboard Submission</h1>
        <form>
          <input
            type="text"
            name="Team Name"
            placeholder="Team A"
            value={this.state.teamName}
          />
          <input
            type="text"
            name="Team Name"
            placeholder="Team B"
            value={this.state.teamName}
          />
          <input
            type="text"
            name="Team A Final Score"
            placeholder="Team A Final Score"
            value={this.state.teamScore}
          />
          <input
            type="text"
            name="Team B Final Score"
            placeholder="Team B Final Score"
            value={this.state.teamScore}
          />
          <button>Submit Final Result</button>
        </form>
      </div>
    );
  }
}

export default RefereeView;