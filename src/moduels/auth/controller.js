import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../../DB/models/User.model.js";
import { loginSchema, registerSchema } from "../user/validation.js";

const signUp = async (req, res) => {
    try {
        const { password, email, userName, cpassword } = req.body;
        const validation = registerSchema.validate({ password, email, userName, cpassword }, { abortEarly: false });
        if (validation.error)
            return res.json(validation.error.details);
        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND));
        // const createUser = await userModel.create({userName,email,password});// made object id with 24 values
        const createUser = await new userModel({ userName, email, password: hashPassword }).save();// in this way i need to save the action on DB 
        return res.json({ message: "create user collection succesfuly", createUser });
    } catch (er) {
        console.log(er.stack);
    }
}

const signIn = async (req, res) => {
    try {
        const { password, email } = req.body;
        const validation = loginSchema.validate({ password, email, }, { abortEarly: false });
        if (validation.error)
            return res.json(validation.error.details);
        const user = await userModel.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);// aawait  ..copare()
            if (!checkPassword) return res.json("invalid input data, user password not correct");
            const token = jwt.sign({ id: user._id, role: 'User' }, process.env.LOGIN_SEG, { expiresIn: '1h' });// create token with payload obj D
            return res.json({ message: " user login succesfuly", token });
        }
        else return res.json("invalid input data, user email not register, plz sinup");
    } catch (err) {
        return res.json(err.stack);
    }
}

export { signUp, signIn };