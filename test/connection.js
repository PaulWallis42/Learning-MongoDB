// Require the 'mongoose' package (like an object model mapper) and assign it to the constant mongoose.
const mongoose = require('mongoose');

// Let mongoose know the type and where the database is located (locally in this case)
mongoose.connect('mongodb://localhost/myFirstDB'); // if 'myFirstDB doesn't exit mongoose will create it.

// Event listner for mongoose connecting to the db 'one time' it is 'open'
mongoose.connection.once('open', function(){
  // When the connection is open do this
  console.log('Now connected to the database');
  // If there is an error with the connection then execute the following function
}).on('error', function(error){
  console.log('There was and error connecting to the db:', error);
});
