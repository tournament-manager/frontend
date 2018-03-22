import React from 'react';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
import Division from '../../../../backend/model/division-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class Tournament extends React.Component {
  constructor() {
    super();
    this.state = {
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      // name: [],
      // agegroup: [],
      // classification: [],
      // fields: [],

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
        <Division state={this.state} />
      </div>
    );
  }
}