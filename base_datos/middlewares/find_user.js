const User = require('../models').User;

module.exports = function(req,res,next){

  console.log(req.session.userId);

  if(!req.session.userId) return next();
    User.findByPk(req.session.userId).then(user=>{
        if(user){
          req.user = user;
          next();
        }
    })
}
