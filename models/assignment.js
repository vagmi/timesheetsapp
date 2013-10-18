module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignment', {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      project_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
  });
}

