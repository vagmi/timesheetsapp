var db = require('../models');
exports.login = function(req, res){
  res.render("user/login");
};
exports.signin = function(req, res){
  console.log("Sign in called");
  var username = req.body.username;
  var password = req.body.password;
  db.User.find({where: {username: username}}).success(function(user){
    if(user && user.password==password) {
      req.session.currentUserId=user.id;
      res.redirect('/');
      return;
    } else {
      res.render("user/login",{message:"Username or password is wrong"});
    }
  }).failure(function(err){
    console.log("Error finding user: ")
    console.log(err);
    res.render("user/login",{message:"Something went wrong while signing you in"});
  });
}
