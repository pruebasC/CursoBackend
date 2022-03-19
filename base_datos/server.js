const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(tasksRoutes);

app.set('view engine','pug');

app.listen(3000);
