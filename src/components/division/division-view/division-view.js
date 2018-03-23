import React from 'react';
import {connect} from 'react-redux';


class DivisionView extends React.Component {
  constructor() {
    super();
    this.state = {
      division: [{
        name: 'soccerStadium',
        tournament: '5ab47d7246f303090ce9b905',

      }],

    };
    this.divisionClick = this.divisionClick.bind(this);
  }
  divisionClick(){
    this.props.history.push('/divisions');
  }

  render() {
    return (
      <div>
        <h3>{this.props.division}</h3>
        <ul>
          {
            this.props.division.map((division, i) =>
              <li key={i} onClick={this.divisionClick}>{division}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  division: state.division,
  game: state.game,
});

export default connect(mapStateToProps, null)(DivisionView);


//setstate is visible
//onClick
//renderif on what we want to hide