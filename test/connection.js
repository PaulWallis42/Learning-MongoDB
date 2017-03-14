// Require the 'mongoose' package (like an object model mapper) and assign it to the constant mongoose.
const mongoose = require('mongoose');
// Overiding mongoose promises(depricated) with ES6 promises
mongoose.Promise = global.Promise;

// Let mongoose know the type and where the database is located (locally in this case)
mongoose.connect('mongodb://localhost/myFirstDB'); // if 'myFirstDB doesn't exit mongoose will create it.



// So that the asych connection to the db happens before the tests start to run -
// put the connection in a before hook that tells Mocha before tests run do this -
// and include the done paramater so that it knows when the connection is complete
before(function(done){
  // Event listner for mongoose connecting to the db 'one time' it is 'open'
  mongoose.connection.once('open', function(){
    // When the connection is open do this
    console.log('Now connected to the database');
    // Tell mocha the connection is done
    done();
    // If there is an error with the connection then execute the following function
  }).on('error', function(error){
    console.log('There was and error connecting to the db:', error);
  });
});

// Database cleaner: before each test runs mocha finds the before each hook and -
// executes the code within which is deleting all records from the superheros collection
beforeEach(function(done){
  mongoose.connection.collections.superheros.drop(function(){
    done();
  })
});
