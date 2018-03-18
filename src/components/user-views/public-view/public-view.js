import React from 'react';
import {UserOptions} from '../../user';
import {TournamentSelect} from '../../tournament';
import {TeamSelect} from '../../team';

export default class PublicView extends React.component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <section className="public-view-container"> 
        <h2>Puplic View</h2>
        <UserOptions/>
        <div className="view-filters">
          <TournamentSelect/>
          <TeamSelect/>
        </div>
        <section className="public-view">

        </section>
      </section>
    );
  }

}