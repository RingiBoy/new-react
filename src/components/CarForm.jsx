import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { carService } from '../services/car.service';

const CarForm = ({setCar}) => {

// const [formError, setFormError]=useState({})
    
    const {register, reset, handleSubmit}=useForm()


    const xxx = async(car)=>{
    try{

        const {data}= await carService.create(car);
        setCar(data);
        reset();

    }
    catch(e){
       
        // setFormError(e.response.data)
    }


}

    return (
        <form onSubmit={handleSubmit(xxx)}>
               <div><label >Model:<input type="text" {...register('model')}/></label></div>
               {/* {formError.model && <span>{formError.model[0]}</span>} */}
               <div><label >Price:<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
               {/* {formError.price && <span>{formError.price[0]}</span>} */}
               <div><label >Year:<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
               {/* {formError.year && <span>{formError.year[0]}</span>} */}
               <button>save</button>
        </form>
    );
};

export default CarForm;