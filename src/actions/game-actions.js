import superagent from 'superagent';

const gameSet = game => ({type: 'GAME_SET', payload: game});

const gameSetAll = game => ({type: 'GAME_SET_ALL', payload: game});

const gameGetRequest = gameId => dispatch => {
  return superagent.get(`${__API_URL__}/game/${gameId}`)
    .then(res => dispatch(gameSet(res.body)));
};

const gameAllGetRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/game`)
    .then(res => dispatch(gameSetAll(res.body)));
};


export {gameGetRequest, gameAllGetRequest};