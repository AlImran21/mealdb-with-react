import React from 'react';
import './Order.css'
const Order = ({order}) => {
    const {strMeal, strMealThumb} = order;
    return (
        <div className='main-order-container'>
            <div className="order-container">
                <img className='order-img' src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
            </div>
            
        </div>
    );
};

export default Order;