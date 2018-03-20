import React from 'react';
import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: [],
      division: [], //age group
      classification: [], //boys or girls
      date: [],
      field: [],
      post: '',
    };
  };
}

componentDidMount(){
  const rootRef = mongoose.database().ref();
  const post = mongoose.child('post').orderByKey();

  post.once('value', snap => {
    snap.forEach(child => {
      this.setState({
        date: this.state.tournament.concat([child.key]),
        title: this.state.date.concat([child.val().date]),
        story: this.state.field.concat([child.val().field])
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
    this.props.tournament.push('/');
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
//source fetch one