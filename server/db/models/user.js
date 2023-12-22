const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Chat, { foreignKey: 'userId' });
      User.belongsToMany(models.User, {
        through: 'Associations',
        as: 'Migrant',
        foreignKey: 'migrId',
      });
      User.belongsToMany(models.User, {
        through: 'Associations',
        as: 'Kurator',
        foreignKey: 'kuratId',
      });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      hashpass: DataTypes.STRING,
      email: DataTypes.STRING,
      number: DataTypes.STRING,
      info: DataTypes.TEXT,
      img: DataTypes.TEXT,
      statusId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
