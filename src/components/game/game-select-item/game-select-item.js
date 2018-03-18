import React from 'react';

export default class GameSelectItem extends React.Component{
  constructor(props){
    super(props);
  
    this.selectGame = this.selectGame.bind(this);
  }

  selectGame(){
    this.props.onSelected(this.props.game);
  }

  render(){
    return (
      <li className="game-select-item" 
        onClick={this.selectGame}
      >
        {this.props.game.name}
      </li>
    );
  }
}