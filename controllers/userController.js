let connection = require("../connectDB");

module.exports = {
  newUser: function(req, res) {
    console.log(`Adding ${req.body.newName} to users...`);
    connection.query("INSERT INTO users SET ?",
    {
      name: req.body.newName,
      password: req.body.newPassword, //BCRYPT HERE!!!
      email: req.body.email,
      dateJoined: GetDate()
    });
  },
  allUsers: function(req, res) {
    console.log("Displaying all users...");
    connection.query("SELECT * FROM users", function(err, res) {
      if(err) throw err;
      return res.json();
    });
  },
  updateUser: function(req, res) {
    console.log(`Updating user ${req.body.id}...`)

  },
  deleteUser: function(req, res) {
    console.log(`Deleting ${req.body.id} from users...`)

  },
  getAllTopics: function(req, res) {
    console.log(`Getting all topics by ${req.body.id}...`)

  },
  getAllReplies: function(req, res) {
    console.log(`Getting all replies by ${req.body.id}...`)
    
  }
}