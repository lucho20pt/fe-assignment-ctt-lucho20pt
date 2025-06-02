const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081; // Ensure backend listens on port 8081

// Serve static files from the "api" directory
app.use('/api', express.static(path.join(__dirname, 'api')));

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});