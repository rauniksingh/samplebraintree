const braintree = require('../lib/paymentGateway/braintree'),
      __ = require('../util/response');

class GatewayService {

    async _getAuthToken(req, res) {
        try {
            let authToken = await braintree._generateClientToken();
            res.setHeader('api-x-token', JSON.stringify(authToken));
            __.successMsg(req, res, 200, undefined, 'Token generated')
        } catch (error) {
            __.errorMsg(req, res, 500, 'Internal server error', error, '_getAuthToken');
        }
    };

};

module.exports = new GatewayService();