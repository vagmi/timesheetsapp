var Q = require('q');
module.exports = {
  up: function(migration, DataTypes, done) {
    var clients = migration.createTable("clients",{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      name: DataTypes.STRING,
      email: DataTypes.STRING
    });
    var projects = migration.createTable("projects",{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      client_id: DataTypes.INTEGER
    });
    var users = migration.createTable("projects",{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
    var assignments = migration.createTable("assignments", {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      project_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    });
    var timeEntries = migration.createTable("time_entries",{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      project_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      minutes: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      billable: DataTypes.BOOLEAN
    });
    Q.all([clients,projects,users,
          assignments,timeEntries]).then(function(results){
        done();
    })
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
