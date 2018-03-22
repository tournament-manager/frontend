import React from 'react';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
// import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class Tournament extends React.Component {
  constructor() {
    super();
    this.state = {
      tournament: [],
    };
  }

  componentDidMount() {
    let initialTournament = [];
    fetch('https://swapi.co/api/planets/') //plug in mongo tournament schema here
      .then(response => {
        return response.json();
      }).then(data => {
        initialTournament = data.results.map((tournaments) => {
          return tournaments;
        });
        console.log(initialTournament);
        this.setState({
          tournament: initialTournament,
        });
      });
  }

  render() {
    return (
      <div>
        <Tournament state={this.state} />
      </div>
    );
  }
}

//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/