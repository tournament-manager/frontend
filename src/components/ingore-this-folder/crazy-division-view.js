import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; //so cool!
import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class DivisionView extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      //tournament: [],
      division: [], //age group
       classification: [], //boys or girls
      // date: [],
      // field: [],
      post: '',
    };
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen,
    //tournament: this.state.tournament.concat([child.key]),
    division: this.state.division.concat([classification.val().division]),
    classification: this.state.classification.concat([division.val().classification])
  })
}

componentDidMount(){
  const initialDivision = [];
  fetch(mongoose.database().ref()) //fetch from mongoose schema
    .then(response => {
      return response.json();
    }).then(data => {
      initialDivision = data.results.map((divisions) => {
        return divisions
      })
      console.log('LIST OF DIVISIONS', initialDivision);
      this.setState({
        division: initialDivision,
      })
    })
}
const post = mongoose.child('post').orderByKey(); //post by mongoose key

post.once('value', snap => {
  snap.forEach(child => {
    this.setState({
      division: this.state.division.concat([child.key]),
      division: this.state.date.concat([child.val().date]),
      classification: this.state.field.concat([child.val().field])
    });

    const postList = this.state.date.map((dataList, index) =>
      <p>
        {dataList}
        <br />
        {this.state.division[index]}
        <hr />
      </p>
    );

    toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      post: postList,
      division: this.state.date.concat([child.val().date]),
      classification: this.state.field.concat([child.val().field])
    });
   }
  });
});

handleClick(e) {
  e.preventDefault()
  //this.props.tournament.push('/'); //trying to re-route/display the options below on click
  this.props.classification.push('/'); //trying to re-route/display specific classification
  this.props.division.push('/');
}

render(){
  return (
    <div className="division-view">
      <Dropdown isOpen={this.state.classification} isClose={this.state.division} size="lg" toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.props.classification}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}>
          Divisions
          </DropdownToggle>
        <DropdownMenu>
          <div onClick={this.state.classification}>Age Group: {this.props.division}</div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
};


export default DivisionView
//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/