// import React from 'react';
// import DivisionView from '../division/division-view/division-view';
// // import {connect} from 'react-redux'; //might be wrong source

// class TournamentView extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tournament: [],
//       division: [],
//     };
//   }

//   componentDidMount() {
//     let initialTournament = [];
//     fetch('https://swapi.co/api/planets/') //plug in mongo tournament schema here
//       .then(response => {
//         return response.json();
//       }).then(data => {
//         initialTournament = data.results.map((tournaments) => {
//           return tournaments;
//         });
//         console.log(initialTournament);
//         this.setState({
//           tournament: initialTournament,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.props.tournament.name}</h3>
//         <ul>
//           {this.props.divisions.length ?
//             this.props.divisions.map((division, i) =>
//               <li onClick={() => this.props.history.push('/divisions')}>
//                 <DivisionView key={i} division={division} />
//               </li>
//             )
//             : undefined}
//         </ul>
//       </div>
//     );
//   }
// }

/* <div>
  <h3>{this.props.tournament.name}</h3>
  <ul>
    {this.props.divisions.length ?
      this.props.divisions.map((division, i) =>
        <li onClick={() => this.props.history.push('/games')}>
        <DivisionView key={i} division={division} />
        </li>
      )
      : undefined}
  </ul>
</div> */

// const mapStateToProps = state => ({
//   gamenumber: state.division,
//   game: state.game,
// });

// export default connect(mapStateToProps, null)(TournamentView);
//export default TournamentView;


//source Fetch All https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react
//source fetch one https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick
//Dource for Drop down https://reactstrap.github.io/components/dropdowns/