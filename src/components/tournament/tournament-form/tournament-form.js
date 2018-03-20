import React from 'react';

export default class TournamentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.tournament.name || '',
      director: this.props.tournament.director || '',
      dateStart: this.props.tournament.dateStart || '',
      dateEnd: this.props.tournament.dateEnd || '',
    };
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <form className="tournament-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="text" name="director" value={this.state.director} onChange={this.handleChange}/>
        <input type="date" name="dateStart" value={this.state.dateStart} onChange={this.handleChange}/>
        <input type="date" name="dateEnd" value={this.state.dateEnd} onChange={this.handleChange}/>
      </form>
    );
  }
}