const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const auth = (req , res , next) => {


    try {
        let token = req.headers.auth;

      
      
        if(token){
           
            let user = jwt.verify(token , process.env.SECRET_KEY);
            req.userId = user.id;

        }
        else{
            res.status(401).json({massage : "Unauthorization user"});
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({massage : "Unauthorization user"});
    }
}

module.exports = auth;      