import React, { useState, useEffect } from "react";
import axios from "axios";
import "../component/meals.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
         .then((res) =>
            {
                // console.log(res.data.meals)
                 setItems(res.data.meals)}
             )
             .catch((err)=>{
                    console.log(err)
             })
  }, []);

  const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
    return(
        <section className="card" key={Math.random()}>
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
        </section>
    )
  })

  
  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
