const { ctrlWrapper } = require('../../helpers');
const login = require('./login');
const register = require('./register');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
