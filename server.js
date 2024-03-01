const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://dauletakhmetbekov:DDAA2005@clusterforback.vlc3jfj.mongodb.net/?retryWrites=true&w=majority&appName=Clusterforback");
        console.log("successfully connected!");
    } catch (err) {
        console.error(err);
    }
}

connectToDatabase();

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: 'secret', // Change this to a secret phrase
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth');
app.use(authRoutes);
//adding server with host 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});