'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: 'https://earthobservatory.nasa.gov/Features/CloudsGallery/images/earth_render_2012.jpg',
    validate: {
      isUrl: true
    }
  }
})
