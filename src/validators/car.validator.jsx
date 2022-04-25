import Joi from "joi";

const carValidator = Joi.object({
  model: Joi.string().min(1).max(20).required().messages({
    "string.empty": "Model  не может быть пустым епта!",
    "string.min": "moden doljna byt min 2 symbols",
  }),
  price: Joi.number().min(0).max(10000000).required(),
  year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
});

export { carValidator };
