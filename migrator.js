var Sequelize = require('sequelize');
var migrationsPath = process.cwd() + '/migrations'
var sequelize = new Sequelize('tsdev',undefined,undefined,{
  dialect: 'sqlite',
  storage: 'db/tsdev.db'
});
var migrator = sequelize.getMigrator({path: migrationsPath});
migrator.migrate().success(function(){
  console.log("Migrations complete!")
  process.exit(0);
});
