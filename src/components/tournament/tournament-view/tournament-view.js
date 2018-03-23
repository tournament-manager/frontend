import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class TournamentView extends React.Component {
  constructor() {
    super();
    this.state = {
      tournaments: [],
      tournaments2: [{
        _id: '5ab47d7246f303090ce9b905',
        name: 'tournament A',
        director: 'asdfasdfasdf456789',
        dateStart: new Date(),
        dateEnd: new Date(),
      }, {
        _id: '5ab47d7246f303090ce9b904',
        name: 'tournament B',
        director: 'Bill',
        dateStart: new Date(),
        dateEnd: new Date(),
      }],
    };
    this.tournamentClick = this.tournamentClick.bind(this);
  }
  tournamentClick(e){
    e.preventDefault();
    // this.props.history.push('/divisions');
  }

  render() {
    return (
      <div>
        <h1>Tournaments</h1>
        <ul>
          {this.state.tournaments2.length ?
            this.state.tournaments2.map((tournaments2, i) =>
              <Link to="/divisions" key={i}><br /><li id={tournaments2._id} className="tournament-view" onClick={this.tournamentClick}><Link to="/divisions">{tournaments2.name}</Link></li></Link>
            )
            : undefined}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  division: state.division,
  game: state.game,
});

export default connect(mapStateToProps, null)(TournamentView);