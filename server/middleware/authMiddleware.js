// const { auth } = require('../services/index');
// const { config } = require('../config');


// async function authMiddleware(req, res, next) {
//   const { authorization } = req.headers;

//   try {
//     const bearerToken = await auth.getAuthToken(req.headers);
//     const verifiedToken = await auth.verifyIdToken(bearerToken);

//     if (!verifiedToken) {
//       res.status(400).send({ error: 'Error with authentication' });
//     }
//     const { uid, email, firebase } = verifiedToken;
//     req.user = {
//       _id: uid,
//       email: email,
//       provider: firebase.sign_in_provider,
//     };

//     if (firebase.sign_in_provider !== 'password') {
//       const { name } = verifiedToken;
//       req.user.userName = name;
//     }
//     next();
//   } catch (err) {
//     res.status(401).send({ message: 'You are not authorized' });
//   }
// }

// module.exports = { authMiddleware };