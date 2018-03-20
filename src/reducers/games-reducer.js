export default (state={}, action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.games;

  return takeAction[type] ? takeAction[type](payload) : state;

};