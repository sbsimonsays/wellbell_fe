const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

//http request method
exports.sendNotification = functions.https.onRequest((req, res) => {
  const FCMToken = req.query.token; //get params like this

  console.log("REQUEST DOT BODY !!!!!!", req.query);

  let dummyToken = "ei1tJR160DHaoiG0YWJTJ5:APA91bHs6w09mysbVuMfcfpJ060PjLO12S2IfOvPErmzru1DmQKsGz4y0DGa0dCiVSm38szjj8DlTD3wJJMc7CFlcICQATGay7amyUC2FYGbQ7JLI8DnBLAtCe5m2h0n6Ffxk1FWl1XN";

let message = "Drink some Water!!";

const payload = {
  notification: {
    title: "Physical Well Bell!",
    body: message,
  },

};

admin
  .messaging()
  .sendToDevice(dummyToken, payload)
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
