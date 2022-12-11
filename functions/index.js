const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

//http request method
exports.sendNotification = functions.https.onRequest((req, res) => {
  const FCMToken = req.query.FCMToken; //get params like this
  
  console.log(req.query);

const payload = {
  token: FCMToken,
  topic: "please give me a message"
};
console.log(payload)
admin
  .messaging()
  .send(payload)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
    return { success: true };
  })
  .catch((error) => {
    console.log(error, "errrorrr");
    return { error: error.code };
  });
});
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
