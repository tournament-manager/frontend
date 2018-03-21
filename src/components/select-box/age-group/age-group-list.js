import './_age-group.scss';
import React from 'react';
import AgeGroupItem from './age-group-item';

const ageGroups = ['U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16'];

export default class AgeGroupList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      textValue: '',
      age: this.props.textValue,
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleVisible(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleChange(textValue){
    this.toggleVisible();
    this.setState({age: textValue});
    this.props.onSelect({target:{name: 'agegroup', value: textValue}});
  }

  render(){
    return(
      <div className="age-group-list-wrap">
        <div className='age-group-value'
          onClick={this.toggleVisible}>
          {this.state.age || '--'}</div>
        <ul className={`age-group-list${this.state.isVisible ? 'visible' : ''}`}>
          {ageGroups.map((age, i) => 
            <AgeGroupItem key={`${i}_${age}`} toggle={this.handleChange}
              textValue={age} />
          )}
        </ul>
      </div>
    );
  }
}