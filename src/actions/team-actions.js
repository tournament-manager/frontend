import superagent from 'superagent';

const teamSet = team => ({type: 'TEAM_SET' , payload: team});

const teamSetAll = teams => ({type: 'TEAM_SET_ALL' , payload: teams});

const teamGetRequest = teamId => dispatch => {
  return superagent.get(`${__API_URL__}/team/${teamId}`)
    .then(res => dispatch(teamSet(res.body)));
};


const teamAllGetRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/team`)
    .then(res => dispatch(teamSetAll(res.body)));
};

export {teamGetRequest, teamAllGetRequest};