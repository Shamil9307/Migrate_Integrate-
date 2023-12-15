const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Status, { foreignKey: 'statusId' });
      this.belongsTo(models.Role, { foreignKey: 'roleId' });

      this.hasMany(models.Associations, {
        foreignKey: 'migrId',
        sourceKey: 'id',
        scope: {
          roleId: 1, // Update with the roleId for migrants
        },
      });

      this.hasMany(models.Associations, {
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
