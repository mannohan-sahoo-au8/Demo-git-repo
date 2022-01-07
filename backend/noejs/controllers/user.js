const usermodel = require('../models/user');

exports.createUser = (req, res, next) => {
  usermodel.create(
    {
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
    (err, result) => {
      if (err) newxt(err);
      else res.json({ status: 'user created successfull' });
    }
  );
};

// exports.loginUser = (req,res,next) => {
//   usermodel.findOne({
//     email:req.body.email
//   })
// }
