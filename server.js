const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require("passport")
const MongoStore = require ("connect-mongo");
const session = require("express-session")
const cors = require('cors')
const User = require("./models/user");
require("dotenv").config()

app.use(cors())
app.use(express.json());
app.use(express.static(__dirname+"/client/public"))

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DB"))

const sessionMiddleware = session({
    resave:true,
    saveUninitialized:true,
    secret:"Lets go",
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
  })
  app.use(sessionMiddleware);

  const http = require("http");
const server = http.createServer(app);

const Server = require("socket.io").Server
const io = new Server(server);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));



passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth.js');
app.use('/api/auth',authRouter);

app.listen(3536, () => {
    console.log("Server started on port 3536");
});