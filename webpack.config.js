const discountCodeExample = require('./modules/discount-code/webpack.config');
const splitExample = require('./modules/discount-redemption-split/webpack.config');
const smsExample = require('./modules/sms/webpack.config');

module.exports = function(env, argv) {
    return [
        discountCodeExample(env, argv),
        splitExample(env, argv),
        smsExample(env, argv),
    ];
};
