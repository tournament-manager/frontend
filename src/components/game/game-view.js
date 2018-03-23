import React from 'react';

export default class GameView extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     game: [],

  //   };
  //   this.onClick = this.onClick.bind(this);
  // }
  // gameClick(){
  //   this.props.history.push('/divisions');
  // }

  render() {
    return (
      <div>
        <h3>{this.props.game}</h3>
        <ul>
          {this.props.game.length ?
            this.props.game.map((game, i) =>
              <li key={i} onClick={this.gameClick}>{game}</li>
            )
            : undefined}
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   game: state.game,
// });