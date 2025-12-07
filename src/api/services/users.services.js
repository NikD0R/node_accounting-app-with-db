const { User } = require('../../models/User.model');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  return User.findByPk(id);
};

const createUser = (name) => {
  return User.create({ name });
};

const updateUser = async ({ id, name }) => {
  await User.update({ name }, { where: { id } });

  const user = await User.findByPk(id);

  return user.get({ plain: true });
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

const usersServices = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

module.exports = {
  usersServices,
};
