const Author = require('../models/author');
const assert = require('assert');
const mongoose = require('mongoose');

describe('Nesting records', function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  })

  it('Create an Author with sub-docs', function(done){
    var author = new Author({
      name: 'Stephen King',
      age: 50,
      books: [{
        title: 'The Shinning',
        pages: 568
      },
      {
        title: 'Needful Things',
        pages: 624
      }]
    });
    author.save().then(function(){
      Author.findOne({name: 'Stephen King'}).then(function(result){
        assert(result.books[0].title === 'The Shinning');
        done();
      });
    });
  });

  it('Adds a book to an author', function(done){
    var author = new Author({
      name: 'Stephen King',
      age: 50,
      books: [{
        title: 'The Shinning',
        pages: 568
      },
      {
        title: 'Needful Things',
        pages: 624
      }]
    });
    author.save().then(function(){
      Author.findOne({name: 'Stephen King'}).then(function(result){
        result.books.push({title: 'it', pages: 456});
        result.save().then(function(){
          Author.findOne({name: 'Stephen King'}).then(function(result){
            assert(result.books.length === 3);
            done();
          });
        });
      });
    });
  });

});
