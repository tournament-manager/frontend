import React from 'react';
import {GameSelectItem} from '../';

export default class GameSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game:this.props.games[0],
      isVisible: false,
    };
  

    this.setSelection = this.setSelection.bind();
    this.toggleGames = this.toggleGames.bind(this);
  }

  toggleGames(){
    this.setState({isVisible: !this.state.isVisible});
  }

  setSelection(selected){
    console.log(selected);
    this.setState({selectedGame: selected});
  }

  render(){
    return (
      <div className="game-select-list-wrap">

        <div className="selected-game"
          onClick={this.toggleGames} 
          data-game-selected={this.state.game._id}>
          {this.state.game.name}
        </div>

        <ul className={`game-select-list${this.state.isVisible ? ' visible' : ''}`} >
          <li>game1</li>
          <li>game_2</li>
          {/*this.props.games.map(game =>
            <GameSelectItem game={game} key={game._id} onSelected={this.props.setSelection} />
          ) */}
        </ul>
      </div>
    );
  }
}
