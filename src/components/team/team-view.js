import React from 'react';

export default class TeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <ul className="team-view-list">
        {this.state.isVisible ? 
          this.props.team ?
            <li>
              <h6>{this.props.team}</h6>
            </li>
            : undefined
          :undefined}
      </ul>
    );
  }
}
