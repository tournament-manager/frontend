import React from 'react';
import {connect} from 'react-redux';
import {DivisionView} from '../../division';

class TournamentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <section className="tournament-view-container">
        <h2>Tournaments</h2>
        <ul className="tournament-view-list">
          {this.props.tournaments.length ?
            this.props.tournaments.map(tournament => (
              <li key={tournament._id}  
                className="tournament-view">
                <h3 onClick={this.toggle}>{tournament.name}</h3>
                {this.state.isVisible ?
                  this.props.divisions[tournament._id] ?
                    <DivisionView divisions={this.props.divisions[tournament._id]}/>
                    :undefined
                  :undefined}
              </li>
            ))
            : undefined}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  divisions: state.divisions,
  game: state.game,
});

export default connect(mapStateToProps, null)(TournamentView);