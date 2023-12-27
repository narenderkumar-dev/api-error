const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
  try {
    console.log("Entering authenticate middleware");
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token:", token);
    if (!token) {
      return res.status(401).send({ error: "Token not found." });
    }

    const userId = jwtProvider.getUserIfFromToken(token);
    const user = await userService.findUserById(userId);
    
    if (!user) {
      return res.status(401).send({ error: "User not found." });
    }

    req.user = user;
    console.log("Exiting authenticate middleware");
  } catch (error) {
    console.error("Error in authenticate middleware:", error.message);
    return res.status(500).send({ error: error.message });
  }
  next();
};

module.exports = {
  authenticate,
};
























// const jwtProvider = require("../config/jwtProvider");
// const userService = require("../services/user.service");

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(401).send({ error: "Token not found." });
//     }

//     const userId = jwtProvider.getUserIfFromToken(token);
//     const user = await userService.findUserById(userId);
    
//     if (!user) {
//       return res.status(401).send({ error: "User not found." });
//     }

//     req.user = user;
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
//   next();
// };

// module.exports = {
//   authenticate,
// };












// const jwtProvider=require("../config/jwtProvider");
// const userService = require("../services/user.service");

// const authenticate = async(req,res,next)=>{
//     // Bearer token....
//     try{
//         const token=req.headers.authorization?.split(" ")[1];
//         if(!token){
//             return req.status(404).send({error:"token not found..."})
//         }

//         const userId = jwtProvider.getUserIfFromToken(token);
//         const user = userService.findUserById(userId);
//         req.user = user;

//     }catch (error){
//         return res.status(500).send({error:error.message});
//     }
//     next();
// }

// module.exports={
//     authenticate
// }