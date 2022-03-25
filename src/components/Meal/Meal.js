import React from 'react';
import './Meal.css'
const Meal = ({meal, handleOrder}) => {
    const {strMeal, strMealThumb, strCategory, strInstructions} = meal;
    // console.log (name);
    return (
        <div className='card'>
            <div className='card-positioning' onClick={() => handleOrder(meal)}>
            <img src={strMealThumb} alt="" />
            <div className="card-info">
                <h4 className='card-name'>{strMeal}</h4>
                <p className='card-category'>Category: {strCategory}</p>
                <p className='card-instruction'>{strInstructions.slice (0, 100) + '....'}</p>
            </div>
            </div>
        </div>
    );
};

export default Meal;