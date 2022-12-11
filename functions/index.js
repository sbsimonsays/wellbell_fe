const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

//http request method
exports.sendNotification = functions.https.onRequest((req, res) => {
  const FCMToken = req.body; //get params like this

  console.log("REQUEST DOT BODY !!!!!!", req.body);

  let dummyToken = "ccYjMRosn_0Ii75pYvrKux:APA91bEUuR72NUteeUFKcDVUkg-HAkAAyZfTKg1CB5wLimljm47GaHzdZDe1fTm3Xu8Vmzq_obyploPG7R3LECQiha8sdzU8tuu3LM1eD0b9M-j-5alLMAHqgec6-bgw-8bApMPhidIL";

  let message = "this is a message";

const payload = {
  token: dummyToken,
  notification: {
    title: "cloud function demo",
    body: message,
  },
  data: {
    body: message,
  },
};

admin
  .messaging()
  .send(payload)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
    return { success: true };
  })
  .catch((error) => {
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
