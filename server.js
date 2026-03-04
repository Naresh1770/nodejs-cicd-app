const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Node.js CI/CD App Deployed Successfully!');
});

// Only start server if file is run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = app;