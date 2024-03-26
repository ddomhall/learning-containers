const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const { getAsync, setAsync } = require('./redis/index.js')
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.get('/statistics', async (req, res) => {
  res.json({added_todos: parseInt(await getAsync('added_todos')) || 0})
})

module.exports = app;
