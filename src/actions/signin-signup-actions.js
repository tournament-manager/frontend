import superagent from 'superagent';

const setToken = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

const userSigninRequest = user => dispatch => {
  return  superagent.get(`${__API_URL__}/signin`)
    .auth(user.username, user.password)
    .then(res => dispatch(setToken(res.text)));
}; 

const userSignupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => dispatch(setToken(res.text)));
};

export {setToken, userSigninRequest, userSignupRequest};
