import React from 'react';
import {connect} from 'react-redux';
import GameView from '../../game/game-view';

class DivisionView extends React.Component {
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

  render(){
    return (
      <ul className="division-view-list">
        {this.props.divisions.length ? 
          this.props.divisions.map(division => 
            <li key={division._id}>
              <h4 onClick={this.toggle}>{division.name}</h4>
              { this.state.isVisible ?
                this.props.games[division._id] ?
                  <GameView games={this.props.games[division._id]}/> 
                  :undefined
                :undefined}
            </li>
          )
          : undefined}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games,
});

export default connect(mapStateToProps, null)(DivisionView);
