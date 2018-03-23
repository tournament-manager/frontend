import React from 'react';

export default class TeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      game: [],

    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    //this.props.history.push('/divisions');
  }

  render() {
    return (
      <ul className="team-view-list">
        {this.props.team ?
          <li>
            <h6>{this.props.team.name}</h6>
          </li>
          : undefined}
      </ul>
    );
  }
}

// const mapStateToProps = state => ({
//   teams: state.teams,
// });

// export default connect(mapStateToProps, null)(GameView);