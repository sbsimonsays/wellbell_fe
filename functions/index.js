const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

//http request method
exports.sendNotification = functions.https.onRequest((req, res) => {
  

  const FCMToken = req.query.token; //get params like this

  console.log(req.query.token);


let message = "Reach for a Healthy Snack!";

const payload = {
  // topic:"subscriber-bells",
  token:FCMToken,
  notification: {
    title: "Reach for a Healthy Snack!",
    body: message
  },
  data : {
    volume : "3.21.15",
    contents : "http://www.news-magazine.com/world-week/21659772"
  },

  // {
  //   "message":{
  //     "token":"bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
  //     "notification":{
  //       "title":"Portugal vs. Denmark",
  //       "body":"great match!"
  //     }
  //   }
  // }

};

admin
  .messaging()
  .send(payload)
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
