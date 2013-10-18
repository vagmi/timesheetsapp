var db = require('../models');
module.exports = function(req,res,next){
  if(req.session.currentUserId) {
    db.User.find(req.session.currentUserId).success(function(user){
      if(user) {
        res.locals.currentUser = user;
        next();
      } else {
        res.redirect("/login");
      }
    })

  }
}
