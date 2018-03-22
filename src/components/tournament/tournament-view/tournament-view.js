import React from 'react';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
// import Division from '../../../../backend/model/tournament-model';

export default class TournamentView extends React.Component {
  constructor() {
    super();
    this.state = {
      tournament: [],
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
        <h1>Here are all the tournaments</h1>
        <h4>{/*<TournamentView state={this.state} />*/}</h4>
      </div>
    );
  }
}
