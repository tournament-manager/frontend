import React from 'react';

export default class TournamentForm extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   name: this.props.tournament.name || '',
    //   dateStart: this.props.tournament.dateStart || '',
    //   dateEnd: this.props.tournament.dateEnd || '',
    // };
    this.state = {
      name: '',
      dateStart: '',
      dateEnd: '',
    };
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps);
    if (!nextProps.tournament) return this.setState({name: '', dateStart: '', dateEnd: '', _id: ''});
    this.setState({
      _id: nextProps.tournament._id,
      name: nextProps.tournament.name,
      dateStart: nextProps.tournament.dateStart || '',
      dateEnd: nextProps.tournament.dateEnd || '',
    });
  }

  clearForm(){
    if (this.props.tournament) return;
    this.setState({name: '', director: '', dateStart: '', dateEnd: ''});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.name) return;
    let tournament = {...this.state};
    if (tournament._id === '') delete tournament._id;
    this.props.onComplete(tournament)
      .then(action => this.props.selectTournament(action.payload));
  }

  render(){
    return (
      <form className="tournament-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name"
          placeholder="Name" 
          value={this.state.name} 
          onChange={this.handleChange}/>

        <input type="date" name="dateStart" 
          value={this.state.dateStart} 
          onChange={this.handleChange}/>

        <input type="date" name="dateEnd"
          value={this.state.dateEnd} 
          onChange={this.handleChange}/>
        
        <div className="tournament-form-btn-wrap">
          <button type="button" name="remove" onClick={this.clearForm}>Cancel</button>
          <button type='submit' name='save'>Save</button>
        </div>
      </form>
    );
  }
}