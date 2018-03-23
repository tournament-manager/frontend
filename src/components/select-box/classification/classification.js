import './_classification.scss';
import React from 'react';

export default class ClassificationSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      classification: this.props.textValue,
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleVisible(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleChange(e){
    this.toggleVisible();
    this.setState({classification: e.target.textContent});
    this.props.onSelect({target:{name: 'classification', value: e.target.textContent}});
  }

  render(){
    return(
      <div className="classification-list-wrap">
        <div className='classification-value'
          onClick={this.toggleVisible}>
          {this.state.classification || <span className="classification-select-placeholder" >select a class</span>}</div>
        <ul className={`classification-list${this.state.isVisible ? ' visible' : ''}`}>
          <li className="classification-item" 
            onClick={this.handleChange}>boys</li>
          <li className="classification-item" 
            onClick={this.handleChange}>girls</li>
        </ul>
      </div>
    );
  }
} 