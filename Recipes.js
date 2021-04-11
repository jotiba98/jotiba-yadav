import React from 'react'
import Recipeitem from './Recipeitem';

function Recipes(props) {
    const {recipes}=props;
    return (
      <div class="row">
{
    recipes.map(recipe=><Recipeitem name={recipe.recipe.label}
    image={recipe.recipe.image}
    ingredientLines={recipe.recipe.ingredientLines}/>)}
      </div>
    )
}

export default Recipes;
