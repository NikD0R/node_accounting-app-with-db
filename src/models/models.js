'use strict';

const { User } = require('./User.model');
const { Expense } = require('./Expense.model');
const { sequelize } = require('../db');

module.exports = {
  models: {
    User,
    Expense,
  },
  sequelize,
};
