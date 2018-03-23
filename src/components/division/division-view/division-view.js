import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class DivisionView extends React.Component {
  constructor() {
    super();
    this.state = {
      division: [],
      game: [],
    };

    this.divisionClick = this.divisionClick.bind(this);
  }
  divisionClick(e){
    e.preventDefault();
    //this.props.history.push('/divisions');
  }

  render() {
    return (
      <div>
        <h3>Divisions</h3>
        <ul>
          {
            this.props.division.map((division, i) =>
              <Link to="/games" key={i}><br /><li id={division._id} className="division-view" onClick={this.divisionClick}>{division._id}</li></Link>
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