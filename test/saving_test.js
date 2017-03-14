// The assert expectation does not come with Mocha so is required from Node
const assert = require('assert');
// Get access to the SuperHeros model
const SuperHero = require('../models/superheros')

// Describe block takes string and function
describe('Saving records', function(){

  // It block takes string and function & function can take the (done) paramater to use further down
  it('Saves a record to the db', function(done){
    // Create new instance of the SuperHero model and complete its schema
    var hero = new SuperHero({
      name: "Batman",
      power: "Gadgets and Martial Arts",
      rating: 7
    });

    // Save the record (mongoose method save) to the database with the asychronous (so need a promise (.then))
    hero.save().then(function(){
      //isNew is a Mocha method that returns true if hasn't been saved to db and false if it is in the db
      assert(hero.isNew === false);
      // done tells Mocha this test has finished (becuase it is asynch) and to move on to the next one
      done();
    });

  });

});
