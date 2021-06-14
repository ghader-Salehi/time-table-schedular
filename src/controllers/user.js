const User = require('../models/user');

exports.createNewUser = (req, res, next) => {
  const user = User.create({
    firstname: 'Mohammad Amin',
    lastname: 'Sarbazi',
    code: '985367022',
    rule: 'student',
  });
  res.status(200).json({
    status: 200,
    message: 'Alright you got it',
    data: {
      user,
    },
  });
};
