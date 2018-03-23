import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class ClassificationView extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      //tournament: [],
      //division: [], //age group
      classification: [], //boys or girls
      date: [],
      field: [],
      post: '',
    };
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen,
    post: postList,
    classification: this.state.field.concat([child.val().field]),
    field: this.state.field.concat([child.val().date]),
    date: this.state.date
  })
}

componentDidMount(){
  const rootRef = mongoose.database().ref(); //enables mongoose references I think
  const post = mongoose.child('post').orderByKey(); //post by mongoose key
  const initialClassification = [];
  fetch(mongoose.database().ref())
    .then(response => {
      return response.json()
    }).then(data => {
      initialClassification = data.results.map((classifications) => {
        return classifications
      })
      console.log('CLASSIFICATIONS LIST', initialClassification)
      this.setState({
        classification: initialClassification,
      })
    })
  }

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
          <br />
          {this.state.tournament[index]}
          <br />
          {this.state.division[index]}
          <br />
          {this.state.classification[index]}
          <br />
          {this.state.date[index]}
          <br />
          {this.state.field[index]}
          <hr />
        </p>
      );

      this.setState({
        post: postList
      });
    });
  });

  handleClick(e) {
    e.preventDefault()
    //this.props.tournament.push('/'); //trying to re-route/display the options below on click
    this.props.classification.push('/'); //trying to re-route/display specific classification
    //this.props.division.push('/');
    this.props.date.push('/');
    this.props.field.push('/');
  }

  render(){
    let classification = this.props.state.classification;
    return (
      <div className="tournament-view">
        <Dropdown isOpen={this.state.dropdownOpen} size="lg" toggle={this.props.division}>
          <DropdownToggle
            tag="span"
            onClick={this.props.classification}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}>
            Tournaments
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Classification: {this.props.classification}</DropdownItem>
            <DropdownItem>Field: {this.props.field}</DropdownItem>
            <DropdownItem>Date: {this.props.date}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
};

export default ClassificationView;
//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/