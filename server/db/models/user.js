const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Status, { foreignKey: 'statusId' });
      User.belongsTo(models.Role, { foreignKey: 'roleId' });

      User.hasMany(models.Associations, {
        foreignKey: 'migrId',
        sourceKey: 'id',
        scope: {
          roleId: 1, // Update with the roleId for migrants
        },
      });

      User.hasMany(models.Associations, {
        foreignKey: 'kuratId',
        sourceKey: 'id',
        as: 'Kurator',
        scope: {
          roleId: 2, // Update with the roleId for kurators
        },
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
