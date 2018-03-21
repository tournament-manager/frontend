import React from 'react';
import {AgeGroupList, ClassificationSelect} from '../../select-box';

export default class DivisionForm extends  React.Component{
  constructor(props){
    super(props);
    this.state = {
      agegroup: '',
      classification: '',
      name: '',
      _id: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.division) return;
    this.setState({
      agegroup: nextProps.division.agegroup,
      classification: nextProps.division.classification,
      name: nextProps.division.name,
      _id: nextProps.division._id,
    });
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.name) return;
    let division = {...this.state};
    if (division._id === '') delete division._id;
    this.props.onComplete(division);
  }

  render(){
    return(
      <form className="division-form" name="division" onSubmit={this.handleSubmit}>
        <input name="name"
          placeholder="Division Name"  
          type="text"
          onChange={this.handleChange}
          value={this.state.name}/>

        <ClassificationSelect onSelect={this.handleChange}
          textValue={this.state.classification}/>

        <AgeGroupList onSelect={this.handleChange} 
          textValue={this.state.agegroup} />
        <div className="division-form-btn-wrap">
          <button type="button" name="remove" >Remove</button>
          <button type='submit' name='save'>Save</button>
        </div>
      </form>
    );
  }
}