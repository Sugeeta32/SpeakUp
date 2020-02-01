let connection = require("../connectDB");

module.exports = {
  newTopic: function(req, res) {
    console.log(`Creating ${req.body.newSubject} topic...`);
    connection.query("INSERT INTO topics SET ?",
    {
      subject: req.body.newSubject,
      content: req.body.newContent,
      category: req.body.category,
      userID: req.body.userID,
      datePosted: GetDate()
    }, function(err, res) {
      if(err) throw err;
      console.log(`${req.body.newSubject} forum created!`);
    });
  },
  allTopics: function(req, res) {
    console.log("Displaying all topics...");
    connection.query("SELECT * FROM topics", function(err, res) {
      if(err) throw err;
      return res.json();
    });
  },
  allTopicsInCategory: function(req, res) {
    console.log("Displaying all topics...");
    connection.query(`SELECT FROM topics WHERE category = ${req.body.category}`, function(err, res) {
      if(err) throw err;
      return res.json();
    });
  },
  getTopic: function(req, res) {
    connection.query(`SELECT title FROM topics WHERE subject = ${req.params.subject}`, function(err, res) {
      if(err) throw err;
      if(res===null) {
        console.log(`${req.params.subject} topic doesn't exist, you big dummy!`);
      }
      return res.json();
    });
  },
  updateTopic: function() {

  },
  deleteTopic: function() {

  }
}