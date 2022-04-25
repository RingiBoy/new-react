import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year}=car;
    return (
        <div>
            <div>Model: {model}</div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <hr />
        </div>
    );
};

export default Car;