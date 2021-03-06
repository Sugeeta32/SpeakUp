const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
//Express. js uses a cookie to store a session id (with an encryption signature) in the user's browser and then, on subsequent requests, uses the value of that cookie to retrieve session information stored on the server.
const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user')
const routes = require('./routes/api')




app.use(
	//javascript object with these properties
	session({
		//The session secret is a key used for signing and/or encrypting cookies set by the application to maintain session state.
		
		secret: 'process.env.SESSION_SECRET', //pick a random string to make the hash that is generated secure
		// store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


// Connect to the Mongo DB
var databaseUri = "mongodb://localhost/speakup";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
};

var dbm = mongoose.connection;

dbm.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

dbm.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use('/user', user)
app.use('/', routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
