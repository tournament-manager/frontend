export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['SET_STATE'] = storage => storage.teams;

  takeAction['RESET_STATE'] = () => [];

  takeAction['TEAM_SET'] = team => [...state, team];

  takeAction['TEAM_SET_ALL'] = teams => [...state, ...teams];

  return takeAction[type] ? takeAction[type](payload) : state;

};