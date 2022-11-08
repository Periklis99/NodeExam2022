import { Router } from "express";
import bcrypt from "bcrypt";
import { getUserByEmail, signUpUser } from "../Repo/UserRepo.js";
const router = Router();

export const authenticate = (req, res, next) => {
  if (!req.session.isSignedIn)
      res.status(401).send();
  else 
      next();
}

router.post("/api/signup", async (req, res) => {
    await signUpUser(req.body.email,req.body.password);
    
    req.session.email = req.body.email;
    req.session.isSignedIn = true;
    req.session.save();
    res.send();

});

router.post("/api/login", async (req, res) => {
    const user = await getUserByEmail(req.body.email);
    if(!user){
        res.status(401).send({error: "This email does not exist"})
        return ;
    }
    if(await bcrypt.compare(req.body.password, user.password)) {
        req.session.email = req.body.email;
        req.session.isSignedIn = true;
        req.session.save();
        res.send();
    }else
    res.status(401).send({error: "Wrong password"});
})

router.post("/api/logout",(req,res)=>{
    if(req.session){
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
          res.send('Logout successful')
        }
      });
    }
})


export default router; 
