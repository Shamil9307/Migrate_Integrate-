const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Association extends Model {
    static associate(models) {
      Association.belongsTo(models.User, { foreignKey: 'migrId' });
      Association.belongsTo(models.User, { foreignKey: 'kuratId', as: 'Kurator' });
    }
  }

  Association.init(
    {
      migrId: DataTypes.INTEGER,
      kuratId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Associations',
    }
  );

  return Association;
};