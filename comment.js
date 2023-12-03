//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models');
const { Comment } = require('./models');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// POST /users
app.post('/users', async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  console.log(user);
  res.status(201).json(user);
});

// GET /users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.status(200).json(users);
});

// POST /comments
app.post('/comments', async (req, res) => {
  const comment = await Comment.create({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  console.log(comment);
  res.status(201).json(comment);
});

// GET /comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.findAll({
    include: {
      model: User,
    },
  });
  console.log(comments);
  res.status(200).json(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: index.js
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models');
const { Comment } = require('./models');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// POST /users
app.post('/users', async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  console.log(user);
  res.status(201).json(user);
});

// GET /users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.status(200).json(users);
});

// POST
