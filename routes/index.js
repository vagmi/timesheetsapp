
/*
 * GET home page.
 */

exports.index = function(req, res){
  if(!req.session.currentUserId) {
    res.render('index', { title: 'Express' });
  } else {
    res.redirect('/app');
  }
};
