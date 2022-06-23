const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require("passport");
const MongoStore = require ("connect-mongo");
const session = require("express-session");
const cors = require('cors');
const User = require("./models/user");
const helmet = require("helmet");
require("dotenv").config();


var http = require("http").createServer(app);
var io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

http.listen(3536, function(){
console.log("Successfully Connected Node Server");

 io.on("connection", function(socket){});
});


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(__dirname+"/client/public"));

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

const sessionMiddleware = session({
    resave:true,
    saveUninitialized:true,
    secret:"Lets go",
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
  })
  app.use(sessionMiddleware);
 

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth.js');
app.use('/api/auth',authRouter);

/*app.listen(3536, () => {
    console.log("Server started on port 3536");
});*/