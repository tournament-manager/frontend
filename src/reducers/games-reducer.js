export default (state={}, action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.games;

  takeAction['RESET_STATE'] = () => {};

  return takeAction[type] ? takeAction[type](payload) : state;

};