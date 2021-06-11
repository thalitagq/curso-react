import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const {
    sendRequest,
    error,
    isLoading
  } = useHttp();

  const [mealsList, setMealsList] = useState([]);
  const setMealsArray = (meals) => {
    let mealsArray = []
    for (const key in meals) {
      meals[key].id = key;
      mealsArray.push(meals[key]);
    }
    setMealsList(previousState => previousState.concat(mealsArray));
    console.log(mealsList);
  }

  useEffect(() => {
    sendRequest({
      url: 'https://curso-react-13b8e-default-rtdb.firebaseio.com/meals.json',
      headers:{ "Content-Type": "application/json" }
    }, setMealsArray)
  }, [])

  const mealsListItems = mealsList.map((meal) => (
    <MealItem
      id={meal.id} 
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        {isLoading ? <p style={{textAlign: 'center'}}>Loading...</p> : <ul> {mealsListItems} </ul>}
        {error ? <p style={{ textAlign: 'center' }}>{error}</p> : ''}
      </Card>
    </section>
  );
}

export default AvailableMeals;
