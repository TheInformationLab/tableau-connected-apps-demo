var jwt = require('jsonwebtoken');
const { v1: uuidv1 } = require('uuid');

module.exports = (req, res) => {
    const { username } = req.query;
    const uuid = uuidv1();
    const timenow = new Date().getTime();
    const expiry = new Date().getTime() + (5 * 60 * 1000);
    var token = jwt.sign({
          iss: process.env.Tableau_JWT_ClientId,
          sub: username,
          aud: "tableau",
          exp: expiry / 1000,
          iat: timenow / 1000,
          jti: uuid,
          scp: ["tableau:views:embed", "tableau:metrics:embed"]
         },
         process.env.Tableau_JWT_SecretValue,
         {
            algorithm: 'HS256',
            header: {
              'kid': process.env.Tableau_JWT_SecretId,
              'iss': process.env.Tableau_JWT_ClientId
            }
          }
          );
    res.send(token);
  };