const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

//Error treatment for invalid syntax sent by the client
app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({
      error: "Could not decode request: JSON parsing failed"    
    });
  }
})

//Error treatment for requests other than POST
app.use((req, res, next) => {
  return res.status(404).json({error: "Nothing to see here"});
});

module.exports = app;