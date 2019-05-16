'use strict'

const User = require('../models/user');

exports.get_user = function(req, res) {
  const id = req.params.id;
  console.log(`This is user: ${ id }`);
  User.findById(id)
  .then((user) => {
    user.password = undefined;
    res.status(200).send({
      User: user
    });
  })
  .catch((err) => {
    res.status(500).send({
      message: 'This user does not exist'
    });
  });
};
