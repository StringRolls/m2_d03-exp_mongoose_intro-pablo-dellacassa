// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// If you want to drop the database:
// Cat.collection
//   .drop()
//   .then(() => console.log('Database dropped, ups! 🤪'))
//   .catch(err =>
//     console.log('There was an error while dropping the database: ', err)
//   );

Cat.create({ name: 'tiger' })
  .then(theCat => {
    console.log(
      'The method .create() returned the object:  ',
      theCat,
      " and the cat's name is ",
      theCat.name
    );

    return Cat.find();
  })
  .then(allTheCats => {
    console.log('The method .find() returns an array', allTheCats);
    allTheCats.forEach(cat => console.log('cat name: ', cat.name));
    return Cat.create([{ name: 'princess' }, { name: 'simba' }]);
  })
  .then(allNewCats => console.log('All the cats: ', allNewCats))
  .catch(err =>
    console.log('There was an error while chaining the  promises: ', err)
  );
