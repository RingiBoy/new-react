import React, { useEffect, useState } from 'react';
import { carService } from '../../services/car.service';
import Car from '../Car/Car';

const Cars = () => {
    
    const [cars, setCars]=useState([])
    

useEffect(()=>{
    carService.getAll().then(({data})=>setCars(data))
},[])


    return (
        <div>
            {cars.map(value=><Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;