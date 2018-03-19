import React from 'react';
import {AgeGroupList, ClassificationSelect} from '../../select-box';

export default class DivisionForm extends  React.Component{
  constructor(props){
    super(props);
    this.state = {
      ageGroup: '',
      classification: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <form className="division-form" name="division" onSubmit={this.handleSubmit}>
        <input name="name" 
          type="text"
          onChange={this.handleChange}
          value={this.state.name}/>

        <ClassificationSelect onSelect={this.handleChange}
          textValue={this.state.classification}/>

        <AgeGroupList onSelect={this.handleChange} 
          textValue={this.state.ageGroup} />
      </form>
    );
  }
}