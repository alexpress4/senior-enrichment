'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get () {
      let first = this.firstName[0].toUpperCase() + this.firstName.slice(1);
      let last = this.lastName[0].toUpperCase() + this.lastName.slice(1);

      return `${first} ${last}`;
    }
  },
  email: {
    type: Sequelize.TEXT,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});
