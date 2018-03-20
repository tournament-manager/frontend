import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      tournament: [],
      division: [], //age group
      // classification: [], //boys or girls
      // date: [],
      // field: [],
      post: '',
    };
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen,
    tournament: this.state.tournament.concat([child.key]),
    division: this.state.date.concat([child.val().date]),
  })
}

componentDidMount(){
  const initialTournaments = [];
  fetch(mongoose.database().ref())
  .then(response => {
    return response.json();
  }).then(data => {
    initialTournaments = data.results.map((tourney) => {
      return tourney
    })
    console.log('LIST OF TOURNAMENTS', initialTournaments);
    this.setState({
      tournament: initialTournaments,
    })
  })
}
  const post = mongoose.child('post').orderByKey(); //post by mongoose key

  post.once('value', snap => {
    snap.forEach(child => {
      this.setState({
        tournament: this.state.tournament.concat([child.key]),
        division: this.state.date.concat([child.val().date]),
        classification: this.state.field.concat([child.val().field])
      });

      const postList = this.state.date.map((dataList, index) =>
        <p>
          {dataList}
          <br/>
          {this.state.tournament[index]}
          <hr/>
        </p>
      );

      this.setState({
        post: postList
      });
    });
  });

  handleClick(e) {
    e.preventDefault()
    this.props.tournament.push('/'); //trying to re-route/display the options below on click
    this.props.classification.push('/'); //trying to re-route/display specific classification
    this.props.division.push('/');
  }

  render(){
    return (
      <div className="tournament-view">
        <Dropdown isOpen={this.props.division} isClose={this.props.tournament} size="lg" toggle={this.props.tournament}>
          <DropdownToggle
            tag="span"
            onClick={this.props.tournament}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}>
            Tournaments
          </DropdownToggle>
          <DropdownMenu>
            <div onClick={this.state.division}>Age Group: {this.props.division}</div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
};


export default TournamentView
//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/