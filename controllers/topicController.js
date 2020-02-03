let connection = require("../connectDB");

module.exports = {
  newTopic: function(req, res) {
    console.log(`Creating ${req.body.subject} topic...`);
    connection.query("INSERT INTO topics SET ?",
    {
      subject: req.body.subject,
      content: req.body.content,
      category: req.body.category,
      userID: req.body.userID,
      datePosted: GetDate()
    }, function(err, res) {
      if(err) throw err;
    }).then(console.log(`${req.body.subject} topic created!`));
  },
  allTopics: function(req, res) {
    console.log("Displaying all topics...");
    connection.query("SELECT * FROM topics", function(err, res) {
      if(err) throw err;
      return res.json();
    }).then(console.log("All topics retreived!"));
  },
  allTopicsInCategory: function(req, res) {
    console.log("Displaying all topics...");
    connection.query(`SELECT FROM topics WHERE category = ${req.body.category}`, function(err, res) {
      if(err) throw err;
      return res.json();
    }).then(console.log(`All topics in ${req.body.category} retreived!`));
  },
  getTopic: function(req, res) {
    connection.query(`SELECT FROM topics WHERE topicID = ${req.body.topicID}`, function(err, res) {
      if(err) throw err;
      return res.json();
    }).then(console.log(`Topic ${req.body.topicID} retreived!`));
  },
  updateTopic: function() {
    console.log(`Updating topic ${req.body.topicID}...`)
    connection.query(`UPDATE topics SET ? WHERE topicID = ${req.body.topicID}`,
    {
      subject: req.body.subject,
      content: req.body.content,
      category: req.body.category,
      userID: req.body.userID,
      edited: 1,
      lastEdited: GetDate()
    }, function(err, res) {
      if(err) throw err
    }).then(console.log(`Topic ${req.body.topicID} updated!`));
  },
  deleteTopic: function() {
    console.log(`Deleting ${req.body.topicID} from topics...`)
    connection.query(`DELETE FROM topics WHERE topicID = ${req.body.topicID}`, function(err, res) {
      if(err) throw err;
    }).then(console.log(`Topic ${req.body.topicID} (and its replies) deleted!`));
  }
}