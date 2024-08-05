const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session =require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
// Sets up the Express App 
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({});
//Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

// app.use(require('./controllers/index'));
app.use(routes);
//Starts the server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening to: http://localhost:${PORT}`));
  });