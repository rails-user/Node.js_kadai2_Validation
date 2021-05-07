const { check } = require('express-validator');

module.exports = [
    check('username').not().isEmpty().withMessage('usernameを入力してください'),
    check('email').not().isEmpty().withMessage('emailを入力してください'),
    check('password').not().isEmpty().withMessage('passwordを入力してください'),
    check('password').isLength({ min: 7 }).withMessage('passwordは7文字以上で入力してください。'),
    check('confirmPassword').not().isEmpty().withMessage('confirmPasswordを入力してください'),
    check('confirmPassword').isLength({ min: 7 }).withMessage('confirmPasswordは7文字以上で入力してください。'),
    check('password').custom((value, { req }) => {
        if (req.body.password === req.body.confirmPassword) {
            return true;
        }
    }).withMessage('passwordとconfirmPasswordが一致していません。')
];