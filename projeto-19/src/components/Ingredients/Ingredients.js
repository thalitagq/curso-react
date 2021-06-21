import React, { useState, useEffect, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type){
    case 'SET':
      return action.ingredients
    case 'ADD':
      return [...currentIngredients, action.ingredient]
    case 'DELETE':
      return currentIngredients.filter(ingredient => ingredient.id !== action.id)
    default: 
      throw new Error('Shold not get there')
  }
}

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  const filteredIngredientsHandler = useCallback((filteredIngredients) =>{
    dispatch({type: 'SET', ingredients: filteredIngredients})
  },[])

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://curso-react-13b8e-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredient}})
      });
  };

  const removeIngredientsHandler = (ingredientId) => {
    fetch(`https://curso-react-13b8e-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,{
      method: 'DELETE'
    }).then((responseData) => {
        dispatch({type: 'DELETE', id: ingredientId})
      });
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
