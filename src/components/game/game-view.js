import React from 'react';
import {Link} from 'react-router-dom';

export default class GameView extends React.Component {
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
        <h4>{/*<TournamentView state={this.state} />*/}</h4>

        <Link to ="./">Home</Link>
      </div>
    );
  }
}
