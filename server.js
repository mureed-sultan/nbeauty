const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from "public" directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
    console.log(`Access from other devices via: http://<your-local-ip>:${PORT}`);
});
