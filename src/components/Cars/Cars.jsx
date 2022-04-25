import React, { useEffect, useState } from "react";
import { carService } from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({newCar}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll().then(({ data }) => setCars(data));
  }, []);


  useEffect(()=>{
      if (newCar){
          setCars([...cars, newCar])
      }
  },[newCar])

  return (
    <div>
      {cars.map((value) => (
        <Car key={value.id} car={value} />
      ))}
    </div>
  );
};

export default Cars;
