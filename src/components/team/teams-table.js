import './_team-view.scss';
import React from 'react';

export default class TeamsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  
  }

  

  render() {
    return (
      <table className="team-table">
      <tr>
        <td></td>
        <td>Goals</td>
        <td>Points</td>
        <td>Points Total</td>
      </tr>
      <tr>
        <td>{this.props.game.teamA.name}</td>
        <td>{this.props.game.teamAResult}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Goals</td>
        <td>Points</td>
        <td>Points Total</td>
      </tr>
  </table>
        {this.props.team ?
          this.state.isVisible ? 
            <li className="team-view-item">
              <div>
                <span>{this.props.team.name ? this.props.team.name : ''}</span>
                <span className="goals">{this.props.result}</span>
              </div>
            </li>
            : undefined
          :undefined}
      </ul>
    );
  }
}
