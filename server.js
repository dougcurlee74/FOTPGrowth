var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('People'); // Create a line like this for every table in the database

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
