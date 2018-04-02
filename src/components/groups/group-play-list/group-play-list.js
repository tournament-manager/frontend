import './_group-play-view.scss'; 
import React from 'react';
import GroupPlayItem from '../group-play-item/group-play-item';

export default class GroupPlayView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      division: this.props.division,
      direction: 'down',
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(){
    let direction = this.state.direction === 'up' ? 'down' : 'up';
    this.setState({direction: direction});
  }

  render(){
    return (
      <section className={`group-play-view-container ${this.state.direction}`}>
        <h2>Group Play</h2>
        <span className={`toggle-view ${this.state.direction}`} onClick={this.toggleView}></span>
       
        { ['groupA', 'groupB', 'groupC', 'groupD'].map(group =>  
          <GroupPlayItem key={group} groupHeading={group.replace('group', 'Group ')}
            games={this.props.division[group]}/>
        )}

      </section>
    );
  }
} 