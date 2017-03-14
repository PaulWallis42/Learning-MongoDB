const assert = require('assert');
const SuperHero = require('../models/superheros');

describe('Finding records', function(){

  beforeEach(function(done){
      var hero = new SuperHero({
      name: 'Batman',
      power: 'Gadgets & Martial Arts',
      rating: 7
    });

    hero.save().then(function(){
      done();
    });
  });

  it('Finds a record from the database', function(done){
    // Finding the record from SuperHero model/collection -
    // which returns the 'result' which is injected into the following function.
    SuperHero.findOne({ name: 'Batman' }).then(function(result){
      assert(result.power === 'Gadgets & Martial Arts');
      done();
    });
  });

});
