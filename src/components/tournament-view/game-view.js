import React from 'react';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
import Division from '../../../../backend/model/division-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';
import { Link } from 'react-router-dom';

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
    this.handleClick = this.handleClick.bind(this);
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
        <Link to={this.state.division}><Division state={this.state} /></Link>
      </div>
    );
  }
}