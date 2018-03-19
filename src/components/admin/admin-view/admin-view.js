import React from 'react';
import AdminViewDivisions from '../admin-view-divisions/admin-view-divisions';

const divisions = [{}];

export default class AdminView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="admin-view-container">
        <AdminViewDivisions divisions={divisions}/>
      </section>
    );
  }
}

