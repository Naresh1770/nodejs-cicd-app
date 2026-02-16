const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Node.js CI/CD App Deployed Successfully!');
});

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = server;
