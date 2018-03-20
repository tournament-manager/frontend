import superagent from 'superagent';

const setStateFromStorage = () => {
  
  let storage = {
    tournaments: localStorage.tournaments ? JSON.parse(localStorage.tournaments) : [],
    divisions: localStorage.divisions ? JSON.parse(localStorage.divisions) : {},
  };

  return {
    type: 'SET_STATE',
    payload: storage,
  };
};

const tournamentsSet = tournaments => ({action: 'TOURNAMENTS_SET', payload: tournaments});

const tournamentGetRequest = token => dispatch => {
  // let token = localStorage.token;
  return superagent.get(`${__API_URL__}/tournament`)
    .set({'Authorization': `Bearer ${token}`})
    .then(res =>  dispatch(tournamentsSet(res.body)));
};

export {tournamentsSet, tournamentGetRequest, setStateFromStorage};