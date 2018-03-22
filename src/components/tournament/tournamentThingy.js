// import React from 'react';


// export default class TournamentViewItem extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {};
//   }

//   render(){
//     return (
//       <li> 
//         <h3>{this.props.tournament.name}</h3>
//         <ul> 
//         {this.props.divisions.length ?
//         this.props.divisions.map(division => 
//           <DivisionViewItem division={division}/>
//         )
//       :undefined}
//       </ul>
//       </li>

//     );
//   }
// };



// export default class  DivisionViewItem extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {};
//   }

//   render(){
//     return (
//       <li> 
//         <h3>{this.props.division.name}</h3>
//         <ul> 
//         { this.props.games.length ? 
//         this.props.games.length.map(game =>
//           <GameViewItem game={this.props.games[division_id]}/>
//         )
//         :undefined
//       };
//       </ul>
//       </li>

//     );
//   }
// };



// export default class  GameViewItem extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {};
//   }

//   render(){
//     return (
//      <li>
//           <h3>{this.props.game.number}</h3>
//       </li>

//     );
//   }
// };