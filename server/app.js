const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"))
// add your code here

module.exports = app;

const todoData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
  ];

  app.get('/', (req, res) => {
      res.status(200).send({status: 'ok'})
  });

  app.get('/api/TodoItems', (req, res) => {
      res.send(todoData)
  });

  app.get('/api/TodoItems/:id', (req, res) => {
      let id = req.todoItemId;
  })

  app.post('/api/TodoItems', (req, res) => {
      
  })
  