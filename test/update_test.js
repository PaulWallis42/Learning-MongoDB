const assert = require('assert');
const SuperHero = require('../models/superheros');

describe('Updating records', function(){

  var hero;

  beforeEach(function(done){
    hero = new SuperHero({
      name: 'Batman',
      power: 'Gadets & Martial Arts',
      rating: 7
    });
    hero.save().then(function(){
      done();
    });
  });

  it('Updates a record in the database', function(done){
    // Find record by name and update rating property
    SuperHero.findOneAndUpdate({name: 'Batman'}, {rating: 9}).then(function(){
      // Find record again now with the property updated and inject to callback fun
      SuperHero.findOne({name: 'Batman'}).then(function(result){
        // Test that the property has been updated
        assert(result.rating === 9);
        done();
      });
    });
  });

  it('Increments records weight value by 1', function(done){
    // {} =  find all records in the db
    // $inc: is an update operator of which there are several different types
    SuperHero.update({}, {$inc: { rating: 1 }}).then(function(){
      SuperHero.findOne({name: 'Batman'}).then(function(result){
        assert(result.rating === 8);
        done();
      });
    });
  });


});
