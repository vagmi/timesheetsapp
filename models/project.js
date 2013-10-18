module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      client_id: DataTypes.INTEGER
  });
}
