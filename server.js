const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const passport = require('./passport');
// const user = require('./routes/user')
// const routes = require('./routes/api')

// Sessions
// app.use(
// 	session({
// 		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
// 		// store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the deserializeUser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
debugger;
const userSchema = {
	userName: String,
	password: String

}
const user = new mongoose.model("User",userSchema);

app.post("/login", function(req,res){
	console.log('postlogin');
	debugger;
	const newUser= new User({
		username : req.body.username,
		password :req.body.password
		
	});
	newUser.save(function(err){
		if(err){
			console.log(err);
		}else{
			res.send(saved);
		}
	})

})
app.get("*", function(req, res) {
	debugger;
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// app.use('/user', user)
// app.use('/', routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
