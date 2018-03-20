import React from 'react';
import Division from '../../../../backend/model/division-model';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '', //division/tournament name
      'ageGroup': '', //age group
      'fields': '', //field location
      'groupA': '', //first team
      'groupB': '', //2nd team
      'groupC': '', //3rd team or group
      'groupD': '', //4th team or group
      'semiFinal': '', //not sure if we need this
      'final': '', //not sure if we will be displaing scores here
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <h1>Welcome to Tournament Manager! Here Are Our Current Tournaments</h1>
      <h4>{this.state.ageGroup}</h4>
      <h5>{this.state.fields}</h5>
      <ul>
        <li>{this.state.groupA}</li>
        <li>{this.state.groupB}</li>
        <li>{this.state.groupC}</li>
        <li>{this.state.groupD}</li>
      </ul>
    );
  }
}
