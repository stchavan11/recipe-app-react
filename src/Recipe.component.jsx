import React from 'react';
import './recipe.modules.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(
                    (ingredient, title) => (
                        <li key={title} >
                            {ingredient.text}</li>
                    ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className="image" src={image} alt="" />
        </div>
    );
};

export default Recipe;