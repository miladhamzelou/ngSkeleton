var crypto = require('crypto');

exports.encode = function(payload, secret){
    algorithm = 'HS256';

    var header = {typ: 'JWT', alg: algorithm};
    var jwt = base64Econde(JSON.stringify(header)) + '.' + base64Econde(JSON.stringify(payload));
    return jwt + '.' + sign(jwt, secret);

};

function sign(str,key) {
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Econde(str) {
    return new Buffer(str).toString('base64');
}
