var port = 3333;
module.exports = {
  port: port,
  secret: "Best Secret Ever",
  auth0: {
    domain: 'beauhtml.auth0.com',
    clientID: '9UkeB7uGqxE6qGhcSXji2JfjH51zAouV',
    clientSecret: '0BWjcuCINaQK9Yc924_JOLlqaIqp10vJWMSRXvZH_xKY8wiCODIErrYokOg21BIH',
    callbackURL: 'http://localhost:' + port + '/auth/callback'
  }
}

/*

domain: '<your_auth0_domain>',
clientID: '<your_client_id>',
clientSecret: '<your_client_secret>',
callbackURL: 'http://localhost:3000/auth/callback'
},

*/


// Port in callback url has to be the same as
