import React from 'react';
import {AgeGroupList, ClassificationSelect} from '../../select-box';

export default class DivisionForm extends  React.Component{
  constructor(props){
    super(props);
    this.state = {
      ageGroup: this.props.division.agegroup || '',
      classification: this.props.division.classification || '',
      name: this.props.division.name || '',
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
        <div className="division-form-btn-wrap">
          <button type="button" name="remove" >Remove</button>
          <button type='submit' name='save'>Save</button>
        </div>
      </form>
    );
  }
}