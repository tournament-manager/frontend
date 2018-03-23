import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamenumber: '',
      field:'',
      startTime: '',
      teamA: '',
      teamB: '',
    };
  }

  // componentDidMount() {
  //   let initialTournament = [];
  //   fetch(`${__API_URL__}/tournament`) //plug in store actions
  //     .then(response => {
  //       return response.json();
  //     }).then(data => {
  //       initialTournament = data.results.map((tournaments) => {
  //         return tournaments;
  //       });
  //       console.log(initialTournament);
  //       this.setState({
  //         tournament: initialTournament,
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Here are all the games in your division</h1>
        <ul>
          <li>
            <h3>Game: {this.props.game.number}</h3>
            <h5>Home Team: {this.props.teamA}</h5>
            <h5>Away Team: {this.props.teamB}</h5>
            <h5>Field: {this.props.field}</h5>
            <h5>Start Time: {this.props.startTime}</h5>
          </li>
        </ul>
        <Link to ="./">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gamenumber: state.division,
  game: state.game,
});

export default connect(mapStateToProps, null)(GameView);