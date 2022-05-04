// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany

// create one document in the cats collection
Cat.create({ name: 'Garfield', age: 13, color: 'orange' })
  .then(catDoc => console.log(`Cat create worked well: ${catDoc}`))
  .catch(error =>
    console.log(`Creating a new cat went wrong! Try again 😞 ${err}`)
  );

// pattern: ModelName.create().then().catch()

//     const sandrasCat = new Cat({ name: "Milo", age: 4 });
//     sandrasCat
//         .save()
//         .then(newCat => console.log(`A created cat is: ${newCat}`))
//         .catch(err => console.log(`Error while creating a cat! ${err}`));

// create multiple documents in the cats collection
Cat.create([
  { name: 'Garfield', age: 13, color: 'orange' },
  { name: 'Milo', age: 4, color: 'white' },
  { name: 'Whiskey', age: 8, color: 'grey' }
])
  .then(catDocs => console.log(`Multiple cats created: `, catDocs))
  .catch(error =>
    console.log(`Creating a new cat went wrong! Try again 😞 ${err}`)
  );
