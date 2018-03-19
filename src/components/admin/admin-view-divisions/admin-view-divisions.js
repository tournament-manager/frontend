import './_admin-view-divisions.scss';
import React from 'react';
import {DivisionForm} from '../../division';

export default class AdminViewDivisions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      divisions: this.props.divisions,
    };
    this.addDivision = this.addDivision.bind(this);
  }

  addDivision(){
    this.setState({divisions: [...this.state.divisions, {}]});
  }

  render(){
    return (
      <ul>
        {this.state.divisions.map((division, i) => (
          <li key={i} className="admin-view-division-item">
            <DivisionForm  division={division} />
          </li> 
        ) 
        )}
        <li className="add-division" 
          onClick={this.addDivision}>
        add new division
        </li>
      </ul>
    );
  }
}