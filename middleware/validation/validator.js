const { body, validationResult } = require("express-validator");

 const userValidationRules = () => {
  return [

    body("phoneNum").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 8 }),

    // lastname is required
    body("lastName").not().isEmpty(),


    // firstName is required
    body("firstName").not().isEmpty(),

    // username is required
    body("username").not().isEmpty(),


    // dob is required
    body("dob").not().isEmpty(),
    // password must be at least 5 chars long
    // body("passwordConfirmation").isLength({ min: 8 }),
  ];
};


 const userUpdateValidationRules = () => {
  return [
    // username must not be empty
    body("lastName").not().isEmpty(),
    // firstName is required
    body("firstName").not().isEmpty(),
    // username is required
    body("username").not().isEmpty(),
    // phoneNum is required
    body("phoneNum").not().isEmpty(),

    //validation email
    body("email").isEmail(),
  ];
};


 const updateValidationRules = () => {
  return [
    // tittle must not be empty
    body("title").not().isEmpty(),
    // body is required
    body("body").not().isEmpty(),
  ];
};

 const sessionValidationRules = () => {
  return [
    //validation email
    body("email").not().isEmpty(),
    // password must be at least 8 chars long
    body("password").isLength({ min: 8 }),
  ];
};


 const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  //@ts-ignore
  errors.array().map((err) => extractedErrors.push({ [err?.param]: err?.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validate, sessionValidationRules, updateValidationRules,userUpdateValidationRules, userValidationRules
}
