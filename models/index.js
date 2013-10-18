if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null
  sequelize = new Sequelize('tsdev',null,null,{
    dialect: 'sqlite',
    storage: 'db/tsdev.db'
  });

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Client: sequelize.import(__dirname + '/client'),
    Project: sequelize.import(__dirname + '/project'),
    User :sequelize.import(__dirname + '/user'),
    Assignment: sequelize.import(__dirname + '/assignment'),
    TimeEntry: sequelize.import(__dirname + '/time_entry')
  }

  global.db.Client.hasMany(global.db.Project);
  global.db.Project.belongsTo(global.db.Client);
  global.db.Project.hasMany(global.db.Assignment);
  global.db.User.hasMany(global.db.Assignment);
  global.db.Assignment.belongsTo(global.db.Project);
  global.db.Assignment.belongsTo(global.db.User);
  global.db.Project.hasMany(global.db.TimeEntry);
  global.db.User.hasMany(global.db.TimeEntry);
  global.db.TimeEntry.belongsTo(global.db.User);
  global.db.TimeEntry.belongsTo(global.db.Project);
}

module.exports = global.db
