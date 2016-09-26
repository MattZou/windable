'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// Serve static assets.
app.use('/examples', express.static('examples'));
app.use('/dist', express.static('dist'));

app.use(express.compress());
app.use(express.urlencoded());

app.get('/leaflet', (req, res) => {
  res.status(200).sendfile('./examples/leaflet/basic.html');
});
//prevent access from ip:port
app.get('/', (req, res) => {
  res.status(404); 
  res.end();
});

// Start the server
const server = app.listen(app.get('port'), () => {
  console.log('App listening at http://%s:%s', server.address().address, app.get('port'));
});