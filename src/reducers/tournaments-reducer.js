export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.tournaments;

  takeAction['RESET_STATE'] = () => null;

  return takeAction[type] ? takeAction[type](payload) : state;

};