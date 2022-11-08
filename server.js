import express from "express";
import session from "express-session";
import path from "path";
import http from "http";
import { Server } from "socket.io";
const app = express();

const server = http.createServer(app);
const io = new Server(server);
    io.on('connection', socket =>{
    console.log("heyyyyy");
    socket.on('addToCart', data => { //when i sent smt to cart this starts
        console.log('malaka lars');
        io.emit('addToCart', {message: `a user added ${data.itemName} to their cart`})                 // broadcastin=emit. emit to io=everybody(all sockets connected/to socket=one connection 
    })
})

app.use(express.json());

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

import ItemRouter from "./routers/ItemRouter.js";
app.use(ItemRouter);
import Authentication from "./routers/Authentication.js";
app.use(Authentication);
import CartRouter from "./routers/CartRouter.js";
app.use(CartRouter);

app.use(express.static(path.resolve('./client/public')));
// under routers , sending index.html to the client
app.get('*', (req, res) => res.sendFile(path.resolve('./client/public/index.html')));


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});
