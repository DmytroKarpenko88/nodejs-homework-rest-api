const { ctrlWrapper } = require('../../helpers');
const login = require('./login');
const logout = require('./logout');
const register = require('./register');
const updateAvatar = require('./updateAvatar');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
};
