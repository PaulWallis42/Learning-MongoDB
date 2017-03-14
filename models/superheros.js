// Require the 'mongoose' package (like an object model mapper) and assign it to the constant mongoose.
const mongoose = require('mongoose');
// Require the Schema constructor from mongoose
const Schema = mongoose.Schema;

// Create the schema using the Schema saved above
const SuperHeroSchema = new Schema({
  name: String,
  power: String,
  rating: Number
});

// Create the model 'superhero' with the schema 'SuperHeroSchema' and assign to a const 'SuperHero' (superhero becomes superheros)
const SuperHero = mongoose.model('superhero', SuperHeroSchema)

//Allow other parts of app to access the model
module.export = SuperHero;
