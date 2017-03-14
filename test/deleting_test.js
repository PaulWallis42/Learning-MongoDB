const assert = require('assert');
const SuperHero = require('../models/superheros');

describe('Deleting records', function(){

  var hero;

  beforeEach(function(done){
    hero = new SuperHero({
      name: 'Batman',
      power: 'Gadgets & Martial Arts',
      ranking: 7
    });
    hero.save().then(function(){
      done();
    });
  });

  it('Deletes a record from the database', function(done){
    SuperHero.findOneAndRemove({name: 'Batman'}).then(function(){
      SuperHero.findOne({name: 'Batman'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });


});
