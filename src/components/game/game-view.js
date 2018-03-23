import React from 'react';
import TeamView from '../team/team-view';

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <ul className="game-view-list">
        {this.props.games.length ?
          this.props.games.map((game, i)  =>
            <li className="game-view" 
              key={`${game.id}${i}`} 
              onClick={this.toggle}>
              <h5 key={game.id} >{game.name}</h5>
              <TeamView key={game.teamA_id} team={game.teamA}/>
              <TeamView key={game.teamB_id} team={game.TeamB}/>
            </li>
          )
          : undefined}
      </ul>
    );
  }
}
