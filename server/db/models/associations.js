'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Associations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'migrId' });
      this.belongsTo(models.User, { foreignKey: 'kuratId', as: 'Kurator' });
      
    }
  }
  Associations.init({
    migrId: DataTypes.INTEGER,
    kuratId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Associations',
  });
  return Associations;
};