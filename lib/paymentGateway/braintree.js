const braintree = require("braintree"),
        envConfig = require('../../server');

let gateway = braintree.connect({
        environment: braintree.Environment.Sandbox,
        merchantId: envConfig['braintree']['merchantId'],
        publicKey: envConfig['braintree']['publicKey'],
        privateKey: envConfig['braintree']['privateKey']
});

class BrainTree {
    async _generateClientToken () {
        return await gateway.clientToken.generate({});
    };

    async _createCustomer ( dataObj ) {
        return await gateway.customer.create({
            firstName: dataObj.firstName,
            lastName: dataObj.lastName,
            email: dataObj.email,
            phone: dataObj.phone
          });
    };

    async _findCustomer ( customerId ) {
        return await gateway.customer.find(customerId);
    };

    async _createCreditCard ( creditCardParams ) {
        creditCardParams = {
            customerId: creditCardParams.customerId,
            number: creditCardParams.number,
            expirationDate: creditCardParams.expirationDate,
            cvv: expirationDate.cvv
          };
          
        return await gateway.creditCard.create( creditCardParams );
    };

    async _ccVerifiaction () {
        var stream = gateway.creditCardVerification.search(function (search) {
            search.id().is("the_verification_id");
          }, function (err, response) {
            response.each(function (err, verification) {
              console.log(verification.status);
            });
          });
    };
};

module.exports = new BrainTree();