import React from 'react';
import Division from '../../../../backend/model/tournament-model';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dateStart: '',
      score: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <form className="tournament-create-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Team A"/>

        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Team B" />

        <input
          type="text"
          name="name"
          value={this.state.dateStart}
          onChange={this.handleChange}
          placeholder="Enter Start Date" />

        <input
          type="text"
          name="name"
          value={this.state.score}
          onChange={this.handleChange}
          placeholder="Final Score" />

        <button type="submit">Spend</button>
      </form>
    );
  }
}
