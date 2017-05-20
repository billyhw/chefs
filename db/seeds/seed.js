exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chef_recipes').del()
  .then(() => { return knex('order_recipes').del() })
    .then(() => { return knex('recipe_ingredients').del() })
      .then(() => { return knex('ingredients').del() })
        .then(() => { return knex('recipes').del() })
          .then(() => { return knex('orders').del() })
            .then(() => { return knex('chefs').del() })
              .then(() => { return knex('users').del() })
              .then(function () {
                return Promise.all([
                  knex('users').insert([{ firstName: 'John', lastName: 'Smith', email: 'johnsmith@gmail.com', password: 'johnsmith', picture: 'www.imgUser1.com', address: "3439 Yonge Street, Toronto", phoneNumber: 3243233242}]),
                  knex('users').insert([{ firstName: 'Barry', lastName: 'White', email: 'barrywhite@gmail.com', password: 'barrywhite', picture: 'www.imgUser2.com', address: "34 Bloor Street, Toronto", phoneNumber: 1231231234}]),

                  knex('chefs').insert([{ id: 1, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', password: 'janedoe', picture: 'www.imgChefs1.com', description: "I am a good Cook", phoneNumber: 0987654321}]),
                  knex('chefs').insert([{ id: 2, firstName: 'Katy', lastName: 'Perry', email: 'kateperry@gmail.com', password: 'katyperry', picture: 'www.imgChefs2.com', description: "I am a good Cook", phoneNumber: 1234567899}]),

                  knex('recipes').insert([{ id: 1, name: 'Spinach & chickpea curry', imgUrl: 'https://spoonacular.com/recipeImages/Spinach---chickpea-curry-217425.jpg', cookingTime: 15, cuisine: 'indian' }]),
                  knex('recipes').insert([{ id: 2, name: 'Slow Cooker Mexican Beans and Rice with Pork', imgUrl: 'https://spoonacular.com/recipeImages/Slow-Cooker-Mexican-Beans-and-Rice-with-Pork-617250.jpg', cookingTime: 300, cuisine: 'mexican' }]),


                  knex('ingredients').insert([{ id: 1, name: 'baby spinach'}]),
                  knex('ingredients').insert([{ id: 2, name: 'basmati rice'}]),
                  knex('ingredients').insert([{ id: 3, name: 'canned tomatoes'}]),
                  knex('ingredients').insert([{ id: 4, name: 'chickpeas'}]),
                  knex('ingredients').insert([{ id: 5, name: 'curry paste' }]),
                  knex('ingredients').insert([{ id: 6, name: 'lemon juice' }]),
                  knex('ingredients').insert([{ id: 7, name: 'onion' }]) ,
                  knex('ingredients').insert([{ id: 8, name: 'brown rice'}]),
                  knex('ingredients').insert([{ id: 9, name: 'chili beans'}]),
                  knex('ingredients').insert([{ id: 10, name: 'pork shoulder'}]),
                  knex('ingredients').insert([{ id: 11, name: 'salsa'}]),
                  knex('ingredients').insert([{ id: 12, name: 'water'}]),

                  knex('chef_recipes').insert([{ chefID: 1, recipeID: 2 }]),
                  knex('chef_recipes').insert([{ chefID: 2, recipeID: 1 }]),
                  knex('chef_recipes').insert([{ chefID: 2, recipeID: 2 }]),

                  // knex('recipe_dietaryRestrictions').insert([{ recipe_id: 1, restriction: "vegetarian" }]),
                  // knex('recipe_dietaryRestrictions').insert([{ recipe_id: 1, restriction: "vegan" }]),

                  // knex('recipe_intolerances').insert([{ recipe_id: 1, restriction: "GlutenFree" }]),
                  // knex('recipe_intolerances').insert([{ recipe_id: 1, restriction: "DairyFree" }]),

                  knex('recipe_ingredients').insert([{ ingredientID: 1, recipeID: 1, amount: 250, measuringUnit: 'g' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 2, recipeID: 2, amount: 4, measuringUnit: 'servings' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 3, recipeID: 3, amount: 400, measuringUnit: 'g' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 4, recipeID: 4, amount: 2, measuringUnit: '' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 5, recipeID: 5, amount: 2, measuringUnit: 'tbsp' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 6, recipeID: 6, amount: 1, measuringUnit: 'tablespoon' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 7, recipeID: 7, amount: 1, measuringUnit: '' }]) ,
                  knex('recipe_ingredients').insert([{ ingredientID: 8, recipeID: 8, amount: 1, measuringUnit: 'c' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 9, recipeID: 9, amount: 2, measuringUnit: 'cans' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 10, recipeID: 10, amount: 0.75, measuringUnit: 'lb' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 11, recipeID: 11, amount: 16, measuringUnit: 'oz' }]),
                  knex('recipe_ingredients').insert([{ ingredientID: 12, recipeID: 12, amount: 2, measuringUnit: 'c' }])
                ]);
              });
};