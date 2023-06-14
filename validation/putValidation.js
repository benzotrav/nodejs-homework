const Joi = require('joi');

const putValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    phone: Joi.string().regex(/^(?:\+38)?(0\d{9})$/),
    email: Joi.string().email(),
    favorite: Joi.bool(),
  });

  schema
    .validateAsync(req.body)
    .then(_ => next())
    .catch(validationResult => {
      const massage = validationResult.details[0].message;
      return res.status(400).json({ massage });
    });
};

module.exports = putValidation;