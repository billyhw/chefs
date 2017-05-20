
exports.up = function(knex, Promise) {
    return createUserTable()
    .then(createChefsTable)
    .then(createOrdersTable)
    .then(createRecipesTable)
    .then(createIngredientsTable)
    .then(createRecipeIngredientsTable)
    .then(createOrderRecipesTable)
    .then(createChefRecipesTable);

    function createUserTable () {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('picture');
        table.string('address').notNullable();
        table.integer('phoneNumber').notNullable();
        table.string('allergies');
        table.string('dietaryRestrictions');
    });
}

function createChefsTable () {
    return knex.schema.createTable('chefs', function (table) {
        table.increments('id');
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable().unique();
        table.string('picture').notNullable();
        table.string('description').notNullable();
        table.integer('phoneNumber').notNullable();
    });
}

function createOrdersTable () {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id');
        table.time('beginningTime');
        table.time('endingTime');
        table.integer('rating');
        table.string('comment');
        table.integer('userID');
        table.integer('chefID');
        table.foreign('userID').references('users.id');
        table.foreign('chefID').references('chefs.id');
    });
}

function createRecipesTable () {
    return knex.schema.createTable('recipes', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('cookingTime').notNullable();
        table.string('img').notNullable();
        table.string('intolerances');
        table.string('cuisine').notNullable();
        table.string('diet');
        table.string('steps');
        table.string('equipment');
    });
}

function createIngredientsTable () {
    return knex.schema.createTable('ingredients', function (table) {
        table.increments('id');
        table.string('name');
        table.string('measuringUnit');
    });
}

function createRecipeIngredientsTable () {
    return knex.schema.createTable('recipe_ingredients', function (table) {
        table.integer('amount');
        table.integer('ingredientID');
        table.integer('recipeID');
        table.foreign('ingredientID').references('ingredients.id');
        table.foreign('recipeID').references('recipes.id');
    });
}

function createOrderRecipesTable () {
    return knex.schema.createTable('order_recipes', function (table) {
        table.integer('rating');
        table.string('comment');
        table.integer('orderID');
        table.integer('recipeID');
        table.foreign('orderID').references('orders.id');
        table.foreign('recipeID').references('recipes.id');
    });
}

function createChefRecipesTable () {
    return knex.schema.createTable('chef_recipes', function(table) {
        table.integer('chefID');
        table.integer('recipeID');
        table.foreign('chefID').references('chefs.id');
        table.foreign('recipeID').references('recipes.id');
    });
}
  
};

exports.down = function(knex, Promise) {
    return dropChefRecipes()
    .then(dropOrderRecipes)
    .then(dropRecipeInredients)
    .then(dropIngredients)
    .then(dropRecipes)
    .then(dropOrders)
    .then(dropChefs)
    .then(dropUsers);
    

    function dropUsers () {
        return knex.schema.dropTableIfExists('users')
    }

    function dropChefs () {
        return knex.schema.dropTableIfExists('chefs')
    }

    function dropOrders () {
        return knex.schema.dropTableIfExists('orders')
    }

    function dropRecipes () {
        return knex.schema.dropTableIfExists('recipes')
    }

    function dropIngredients () {
        return knex.schema.dropTableIfExists('ingredients')
    }

    function dropRecipeInredients () {
        return knex.schema.dropTableIfExists('recipe_ingredients')
    }

    function dropOrderRecipes () {
        return knex.schema.dropTableIfExists('order_recipes')
    }

    function dropChefRecipes () {
        return knex.schema.dropTableIfExists('chef_recipes')
    }
  
};
