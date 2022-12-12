const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

//http request method
exports.sendNotification = functions.https.onRequest((req, res) => {
  const FCMToken = req.query.token; //get params like this

  console.log("REQUEST DOT BODY !!!!!!", req.query);


let message = "yo people can write mad scripts!";

const payload = {
  notification: {
    title: "Have a snacky space-time 5:23!",
    body: message,
  },

};

admin
  .messaging()
  .sendToDevice(FCMToken, payload)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
    res.send({ success: response }) ;
  })
  .catch((error) => {
    console.log(error)
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
