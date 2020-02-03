let connection = require("../connectDB");

module.exports = {
  newReply: function(req, res) {
    console.log(`Adding ${req.body.subject} to replies...`);
    connection.query("INSERT INTO replies SET ?",
    {
      subject: req.body.subject,
      content: req.body.content,
      topicID: req.body.topic,
      userID: req.body.userID,
      repliedID: req.body.repliedID,
      datePosted: GetDate()
    }, function(err, res) {
      if(err) throw err;
    }).then(connection.query(`UPDATE users SET postNumber = postNumber + 1 WHERE userID = ${req.body.userID}`, function(err, res) {
      if(err) throw err;
    })).then(console.log("Reply added!"));
  },
  allRepliesToTopic: function(req, res) {
    console.log(`Displaying all replies to ${req.body.topicID}...`);
    connection.query(`SELECT FROM replies WHERE topicID = ${req.body.topicID}`, function(err, res) {
      if(err) throw err;
      return res.json();
    }).then(console.log("Replies retrieved!"));
  },
  getReply: function(req, res) {
    console.log(`Displaying reply ${req.body.replyID}...`);
    connection.query(`SELECT FROM replies WHERE replyID = ${req.body.replyID}`, function(err, res) {
      if(err) throw err;
      return res.json();
    }).then(console.log(`Reply ${req.body.replyID} retreived!`));
  },
  updateReply: function(req, res) {
    console.log(`Updating reply ${req.body.replyID}...`)
    connection.query(`UPDATE replies SET ? WHERE replyID = ${req.body.replyID}`,
    {
      subject: req.body.subject,
      content: req.body.content,
      topicID: req.body.topic,
      userID: req.body.userID,
      repliedID: req.body.repliedID,
      edited: 1,
      lastEdited: GetDate()
    }, function(err, res) {
      if(err) throw err
    }).then(console.log(`Reply ${req.body.replyID} updated!`));
  },
  deleteReply: function(req, res) {
    console.log(`Deleting ${req.body.replyID} from replies...`)
    connection.query(`DELETE FROM replies WHERE replyID = ${req.body.replyID}`, function(err, res) {
      if(err) throw err;
    }).then(console.log(`Reply ${req.body.replyID} (and its replies) deleted!`));
  },
}