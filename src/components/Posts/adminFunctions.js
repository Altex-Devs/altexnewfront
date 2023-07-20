const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function createNewUserAndSendResetLink(email, password) {
  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      // Add any other user data here if needed
    });

    const passwordResetLink = await admin.auth().generatePasswordResetLink(email);
    return passwordResetLink;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createNewUserAndSendResetLink,
};