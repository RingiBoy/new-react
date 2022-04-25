import React, { useState } from "react";
import CarForm from "./components/CarForm";
import Cars from "./components/Cars/Cars";

const App = () => {
  
  const [car, setCar]= useState(null);
  
  return (
    <div>
      <CarForm setCar={setCar}/>
      <hr/>
      <Cars newCar={car}/>
    </div>
  );
};

export default App;
