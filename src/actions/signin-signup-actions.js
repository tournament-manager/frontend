import superagent from 'superagent';

const setToken = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

const userSigninRequest = user => dispatch => {
  console.log(user.username, user.password);
  return  superagent.get(`${__API_URL__}/signin`)
    .auth(user.username, user.password)
    .then(res => dispatch(setToken(res.body)));
};

const userSignupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => dispatch(setToken(res.body)));
};

export {setToken, userSigninRequest, userSignupRequest};
