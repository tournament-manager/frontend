import React from 'react';
import {connect} from 'react-redux';

class GameView extends React.Component {
  constructor() {
    super();
    this.state = {
      game: [],

    };
    this.gameClick = this.gameClick.bind(this);
  }
  gameClick(e){
    e.preventDefault();
    //this.props.history.push('/divisions');
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
        <ul>
          {this.props.game.length ?
            this.props.game.map((game, i) =>
              <li className="game-view" key={i} onClick={this.gameClick}>{game}<br /></li>
            )
            : undefined}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, null)(GameView)