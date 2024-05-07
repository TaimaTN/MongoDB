import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization.startsWith(process.env.BEARER_TOKEN))
            return res.json({ Message: "authenticate required data, PLZ enter token!" });

        const token =authorization.split(process.env.BEARER_TOKEN)[1]; //split return array=> ['','..token']
        if (!token)
            return res.json({ Message: "authenticate required data, PLZ enter token!" });
        const encode = jwt.verify(token, process.env.LOGIN_SEG);
        req.userId = encode.id;
        next(); // skip to next method in the request par
    } catch (er) {
        return res.json({ ERROR: er.stack });
    }
}

export default authenticate;