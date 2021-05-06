// Import required modules
const express = require('express');
const mongoDB = require('./db');

//Import Routes
const clientRoutes = require('./routes/client');


// Initialize modules
const app = express();

app.use(express.json())

// Call the database
mongoDB();

//Use Routes
app.use('/', clientRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on localhost:${PORT}`);
})


