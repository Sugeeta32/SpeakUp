let connection = require("../connectDB");

module.exports = {
  newReply: function(req, res) {
    console.log(`Adding ${req.body.newSubject} to replies...`);
    connection.query("INSERT INTO replies SET ?",
    {
      subject: req.body.newSubject,
      content: req.body.newContent, //BCRYPT HERE!!!
      topicID: req.body.topic,
      userID: req.body.userID,
      repliedID: req.body.repliedID,
      datePosted: GetDate()
    });
  },
  allRepliesToTopic: function(req, res) {
    console.log(`Displaying all replies to ${req.body.topicID}...`);
    connection.query("SELECT * FROM replies", function(err, res) {
      if(err) throw err;
      return res.json();
    });
  },
  updateReply: function(req, res) {
    console.log(`Updating reply ${req.body.id}...`)

  },
  deleteReply: function(req, res) {
    console.log(`Deleting ${req.body.id} from replies...`)

  },

}