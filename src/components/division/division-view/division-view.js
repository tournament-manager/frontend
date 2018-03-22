import React from 'react';
// import TournamentForm from '../../components/tournament-form';

export default class DivisionView extends React.Component {
  constructor() {
    super();
    this.state = {
      //tournament: [],
      // name: [],
      // agegroup: [],
      // classification: [],
      // fields: [],
      division: [],
      //create a get all division in actions
      //save that data in to state of componenet
      //use that state to render out data

    };
  }

  componentDidMount() {
    let initialDivision = [];
    fetch('https://swapi.co/api/planets/') //plug in mongo tournament schema here
      .then(response => {
        return response.json();
      }).then(data => {
        initialDivision = data.results.map((divisions) => {
          return divisions;
        });
        console.log(initialDivision);
        this.setState({
          tournament: initialDivision,
        });
      });
  }

  render() {
    return (
      <div>
        <h1> Select Age Group</h1>
        <h4>{/*<DivisionView state={this.state}/>*/}</h4>
      </div>
    );
  }
}
