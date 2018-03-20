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
      classification: [], //boys or girls
      date: [],
      field: [],
      post: '',
    };
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  })
}

componentDidMount(){
  const rootRef = mongoose.database().ref(); //enables mongoose references I think
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
          <br/>
          {this.state.division[index]}
          <br/>
          {this.state.classification[index]}
          <br/>
          {this.state.date[index]}
          <br/>
          {this.state.field[index]}
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
    return(
      <div className="tournament-view">
        <ul>{this.state.post}</ul>
      </div>
    );
  }
};

export default TournamentView
//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/