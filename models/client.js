module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: DataTypes.STRING,
      email: DataTypes.STRING
  });
}
