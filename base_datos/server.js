const express = require('express');
const sqlite3 = require('sqlite3');
//const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsController =  require('./routes/sessions_routes');
const findUserMiddleware = require('./middlewares/find_user');
const authuserMiddleware = require('./middlewares/auth_user');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(session({
  secret:['123456789','qwerty'],
  saveUninitialized: false,
  resave: false
}));

app.use(findUserMiddleware);
app.use(authuserMiddleware);

app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsController);


//solo para la home
app.get('/',function(req,res){
  if(!req.session.userId) res.redirect('sessions');
  res.render('home',{user:req.user});
  //res.json(user);
})

app.listen(3000);
