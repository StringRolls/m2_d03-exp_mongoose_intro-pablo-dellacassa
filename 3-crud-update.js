// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat.findByIdAndUpdate(
  '5d48d51c036739dace0141c8',
  {
    $set: { name: 'Sandra', age: 17 }
  },
  { new: true }
)
  .then(updatedCat => console.log('Updated cat: ', updatedCat))
  .catch(err => console.log('Error while updating the cat: ', err));

// Update all cats named Garfield
Cat.updateMany({ name: 'Garfield' }, { $inc: { age: 1 } }) // age = age + 1
  .then(updatedCats => console.log('Updated cats: ', updatedCats))
  .catch(err => console.log('Error while updating cats: ', err));

// Update one specific cat named Garfield
Cat.updateOne({ name: 'Garfield' }, { $inc: { age: 1 } }) // age = age + 1
  .then(updatedCat => console.log('Updated cats: ', updatedCat))
  .catch(err => console.log('Error while updating cats: ', err));
