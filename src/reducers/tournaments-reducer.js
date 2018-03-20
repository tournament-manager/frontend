export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.tournaments;

  return takeAction[type] ? takeAction[type](payload) : state;

};