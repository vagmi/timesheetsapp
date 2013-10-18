module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeEntry', {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      project_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      minutes: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      billable: DataTypes.BOOLEAN
  });
}
