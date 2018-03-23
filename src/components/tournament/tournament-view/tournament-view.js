import React from 'react';
import {Link} from 'react-router-dom';
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
        <h3>{this.props.tournament}</h3>
        <ul>
          {this.props.divisions.length ?
            this.props.divisions.map((division, i) =>
              <li onClick={() => this.props.history.push('/divisions')}>
                <DivisionView key={i} division={division} />
              </li>
            )
            : undefined}
        </ul>
      </div>
    );
  }
}
