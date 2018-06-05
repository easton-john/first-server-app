const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const cocktails = require('./data/cocktails');

app.get('/api/cocktails', (req, res) => {
  res.send(cocktails); 
});

app.listen(3000, () => console.log('server app running..'));