const assert = require('assert');
const SuperHero = require('../models/superheros');

describe('Finding records', function(){

  var hero;

  beforeEach(function(done){
    hero = new SuperHero({
      name: 'Batman',
      power: 'Gadgets & Martial Arts',
      rating: 7
    });
    hero.save().then(function(){
      done();
    });
  });

  it('Finds a record from the database by name', function(done){
    // Finding the record from SuperHero model/collection -
    // which returns the 'result' which is injected into the following function.
    SuperHero.findOne({ name: 'Batman' }).then(function(result){
      assert(result.power === 'Gadgets & Martial Arts');
      done();
    });
  });

  it('Finds a record from the database by ID', function(done){
    SuperHero.findOne({ _id: hero._id }).then(function(result){
      assert(result._id.toString() === hero._id.toString());
      done();
    });
  });


});
