const { body } = require('express-validator');

 const Validate = [
    
    body('title').not().escape(),
    body('description').not().escape(),
    body('message').not().escape(),

  ]

  module.exports = Validate;