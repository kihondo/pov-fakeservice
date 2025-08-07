const express = require('express');
const app = express();
const PORT = 3000;

// Route for root endpoint
app.get(['/', '/en'], (req, res) => {
    // Log the request headers
    console.log('Request Headers:', req.headers);
    
    // Send the response
    res.send('Response from Frontend Microservice ! by HelloCloud');
});

// Route for Japanese endpoint
app.get('/jp', (req, res) => {
    // Log the request headers
    console.log('Request Headers:', req.headers);
    
    // Send the response in Japanese
    res.send('ハロークラウド');
});

// Route for Spanish endpoint
app.get('/es', (req, res) => {
    // Log the request headers
    console.log('Request Headers:', req.headers);
    
    // Send the response in Spanish
    res.send('Hola!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});