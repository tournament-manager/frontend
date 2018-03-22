import React from 'react';
import {Link} from 'react-router-dom';
//import GameView from '../../game/game-view';
import {connect} from 'react-redux';


class DivisionView extends React.Component {
  constructor() {
    super();
    this.state = {
      //tournament: [],
      // name: [],
      // agegroup: [],
      // classification: [],
      // fields: [],
      division: [],
      //create a get all division in actions
      //save that data in to state of componenet
      //use that state to render out data

    };
  }

  componentDidMount() {
  //  let initialDivision = [];
    // fetch('https://swapi.co/api/planets/') //plug in mongo tournament schema here
    //   .then(response => {
    //     return response.json();
    //   }).then(data => {
    //     initialDivision = data.results.map((divisions) => {
    //       return divisions;
    //     });
    //     console.log(initialDivision);
    //     this.setState({
    //       tournament: initialDivision,
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <h1> Select Age Group</h1>
        <h4><Link to="/games">Games: <DivisionView state={this.state}/></Link></h4>

        <Link to ="./">Home</Link>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  division: state.division,
  game: state.game,
});

export default connect(mapStateToProps, null)(DivisionView);
