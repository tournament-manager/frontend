export default (state={}, action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.teams;

  takeAction['RESET_STATE'] = () => null;

  return takeAction[type] ? takeAction[type](payload) : state;

};