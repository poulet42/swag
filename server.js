// Import needed modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('flash');
const appData = require('./data.json');

// Create default port
const PORT = process.env.PORT || 3000;

// Create a new server
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');


// Configure server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);
app.use(session({
  secret: 'lel fagget',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(flash());
app.use(express.static('public'));

// Router
app.use(require('./controllers'));

app.listen(8080, function(){
	console.log('Listening on port 8080');
});