const mongoose = require('mongoose');
const data = require('./data.js');
const Recipe = require('./recipe')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  }); 

//iteration 2 ------------------------
//  Recipe.create({
//  title: 'Pork Thighs',
//  level: 'Amateur Chef',
//  ingredients: ['1/2 cup pork'],
//  cuisine: 'Spain',
//  dishType: ['Dish'],
//  image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
//  duration: 10,
//  creator: 'Raul'
// })
//  .then(result => { 
//    console.log(result)
//    mongoose.connection.close();           //para cerrar la base de datos
//    })  
//  .catch(err => {
//   console.error(err) 
//}); 

// Recipe.find({title: 'Pork Thighs'}, {title: true, _id: false})
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   })


//iteration 3 ------------------
//Recipe.insertMany(data)             //covertimos la iformacion de string a objeto
  //.then(result => { 
    //console.log(result)
   // mongoose.connection.close();           //para cerrar la base de datos
   // })  
 // .catch(err => {
   //console.error(err) 
 // });

 //iteration 4 --------------
// Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}, {new: true})
//   .then(result => { 
//     console.log(result)
//     mongoose.connection.close();           //para cerrar la base de datos
//   })  
//     .catch(err => {
//     console.error(err) 
//   });

//iteration 5 ----------------
Recipe.deleteOne({title: 'Carrot Cake'})
.then(result => { 
    console.log(result)              
    })  
    .catch(err => {
    console.error(err) 
    });

mongoose.connection.close();



