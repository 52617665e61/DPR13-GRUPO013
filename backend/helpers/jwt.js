const {expressjwt: jwt } = require('express-jwt');


function authJwt(){
    const secret = process.env.secret;
     return jwt({ 
        secret,
        algorithms: ["HS256"],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\api\/v1\/products(.*)/ , methods: ['GET', 'DELETE', 'PUT', 'OPTIONS']},
            {url: /\api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\api\/v1\/services(.*)/, methods: ['GET', 'POST', 'PUT', 'DELETE']},
            {url: /\api\/v1\/appoitments(.*)/, method: ['GET', 'POST', 'PUT', 'DELETE']},
            '/api/v1/users/login',
            '/api/v1/users/register',
            '/api/v1/tasks',
        ]
    })
};

async function isRevoked(req, playload, done) {
    if(!playload.isAdmin) {
        done(null, true)
    }

    done();
}


module.exports = authJwt;






