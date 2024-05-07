import Joi from "joi";

const registerSchema=Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email:Joi.string().email().required() ,    
    password: Joi.string()
        .min(6).required(),

    cpassword: Joi.valid(Joi.ref('password')),

});

const loginSchema=Joi.object({
   
    email:Joi.string().email().required() ,    
    password: Joi.string()
        .min(6).required(),

});

export {registerSchema,loginSchema};