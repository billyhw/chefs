exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
  .then(() => { return knex('comments').del() })
    .then(() => { return knex('cat_reso').del() })
      .then(() => { return knex('category').del() })
        .then(() => { return knex('ratings').del() })
          .then(() => { return knex('resources').del() })
            .then(() => { return knex('users').del() })
              .then(function () {
                return Promise.all([
                  knex('users').insert([{ first_name: 'John', last_name: 'Smith', email: 'johnsmith@gmail.com', password: 'johnsmith', picture: 'www.img.com', address: "3439 Yonge Street, Toronto", phoneNumber: "324-323-3242"}]),
                  knex('users').insert([{ first_name: 'Barry', last_name: 'White', email: 'barrywhite@gmail.com', password: 'barrywhite', picture: 'www.img2.com', address: "34 Bloor Street, Toronto", phoneNumber: "123-123-1234"}]),
                  knex('chefs').insert([{ first_name: 'Jane', last_name: 'Doe', email: 'janedoe@gmail.com', password: 'janedoe'}]),
                  knex('chefs').insert([{ first_name: 'Katy', last_name: 'Perry', email: 'kateperry@gmail.com', password: 'katyperry'}]),
                  knex('recipes').insert([{id: 1, name: 'Spinach & chickpea curry', imageUrl: 'https://spoonacular.com/recipeImages/Spinach---chickpea-curry-217425.jpg', cookingTime: 15, cuisines: 'indian' }]),
                  knex('recipes').insert([{id: 2, name: 'Slow Cooker Mexican Beans and Rice with Pork', imageUrl: 'https://spoonacular.com/recipeImages/Slow-Cooker-Mexican-Beans-and-Rice-with-Pork-617250.jpg', cookingTime: 300, cuisines: 'mexican' }]),

                  knex('chef_recipes').insert([{ chef_id: 1, recipe_id: 2 }]),
                  knex('chef_recipes').insert([{ chef_id: 2, recipe_id: 1 }]),
                  knex('chef_recipes').insert([{ chef_id: 2, recipe_id: 2 }]),

                  knex('recipe_dietaryRestrictions').insert([{ recipe_id: 1, restriction: "vegetarian" }]),
                  knex('recipe_dietaryRestrictions').insert([{ recipe_id: 1, restriction: "vegan" }]),

                  knex('recipe_intolerances').insert([{ recipe_id: 1, restriction: "GlutenFree" }]),
                  knex('recipe_intolerances').insert([{ recipe_id: 1, restriction: "DairyFree" }]),

                  knex('recipe_ingredients').insert([{ ingredient_id: 1, recipe_id: 1, amount: 250, measuringUnit: 'g' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 2, recipe_id: 2, amount: 4, measuringUnit: 'servings' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 3, recipe_id: 3, amount: 400, measuringUnit: 'g' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 4, recipe_id: 4, amount: 2, measuringUnit: '' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 5, recipe_id: 5, amount: 2, measuringUnit: 'tbsp' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 6, recipe_id: 6, amount: 1, measuringUnit: 'tablespoon' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 7, recipe_id: 7, amount: 1, measuringUnit: '' }]) ,
                  knex('recipe_ingredients').insert([{ ingredient_id: 8, recipe_id: 8, amount: 1, measuringUnit: 'c' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 9, recipe_id: 9, amount: 2, measuringUnit: 'cans' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 10, recipe_id: 10, amount: 0.75, measuringUnit: 'lb' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 11, recipe_id: 11, amount: 16, measuringUnit: 'oz' }]),
                  knex('recipe_ingredients').insert([{ ingredient_id: 12, recipe_id: 12, amount: 2, measuringUnit: 'c' }]),

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
                  knex('ingredients').insert([{ id: 12, name: 'water'}])


                ]);
              });
};