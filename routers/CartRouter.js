import { Router } from "express";
import { addItems, deleteItemById, getCardByUserId } from "../Repo/CartRepo.js";
import { getItemById } from "../Repo/ItemRepo.js";
import { getUserByEmail } from "../Repo/UserRepo.js";
import { authenticate } from "./Authentication.js";
const router = Router();


router.get("/api/cart", authenticate, async (req, res) => {
    
    const user = await getUserByEmail(req.session.email)
    const cart = await getCardByUserId(user.id);
    const items = [];
    for(let cartItem of cart){
        //...spread oparator : copy obj to new obj{} 
        items.push({...await getItemById(cartItem.item_id), cart_id: cartItem.id})
    }
    res.send(items);

});

router.post("/api/cart", authenticate, async (req,res) => {
    
    if(!req.body.item_id)
        res.status(400).send();

    const user = await getUserByEmail(req.session.email);
    await addItems(req.body.item_id, user.id)
    res.send();

})

router.delete("/api/cart", authenticate, async (req,res) => {
    await deleteItemById(req.body.cart_id);
    res.send();
})

export default router;


