import React, { useEffect, useState } from 'react';
import './Shop.css'
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
const Shop = () => {
    const [meals, setMeals] = useState ([]);
    const [orders, setOrders] = useState ([]);
    console.log (meals);

    useEffect ( () => {
        fetch ('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        .then (res => res.json ())
        .then (data => setMeals (data.meals))
    }, []);

    const handleOrder = (meal) => {
        let newOrders = [...orders, meal];
        setOrders (newOrders);
    }

    return (
        <div className='shop-container'>
            <div className="meal-container">
                {
                    meals.map (meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleOrder={handleOrder}
                    ></Meal>)
                }
            </div>
            <div className="order-details-container">
            <h2>Order details</h2>
                {
                    orders.map (order => <Order
                        key={order.idMeal}
                        order={order}
                    ></Order>)
                }

            </div>
            
        </div>
    );
};

export default Shop;