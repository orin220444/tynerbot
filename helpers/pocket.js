const pocket = require('pocket-api');
console.log(typeof pocket.getRequestToken);
const consumerKey = process.env.CONSUMER_KEY;
// eslint-disable-next-line require-jsdoc
async function request() {
  try {
  const test = await pocket.getRequestToken( consumerKey, code, function( data, callback ) {
    console.log( data );
    const accessToken = data.code
    callback(accessToken)
    //returns request_token
  });
  console.log(test)
} catch(e)
{console.log(e)}
}
module.exports = request;
