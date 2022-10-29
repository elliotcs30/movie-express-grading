'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    genres: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'Movies',
    underscored: true
  })
  return Movie
}
