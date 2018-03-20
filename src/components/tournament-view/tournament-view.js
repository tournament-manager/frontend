import React from 'react';
import Division from '../../../../backend/model/tournament-model';
import mongoose from 'mongoose';
import TournamentForm from '../../components/tournament-form';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: [],
      date: [],
      field: [],
      post: ''
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
          {this.state.title[index]}
          <br/>
          {this.state.story[index]}
          <hr/>
        </p>

      );

      this.setState({
        post: postList
      });
    });
  });
  render(){
    return(
      <div className="tournament-view">
        <ul>{this.state.post}</ul>
      </div>
    );
  }
};

export default TournamentView
//source https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react