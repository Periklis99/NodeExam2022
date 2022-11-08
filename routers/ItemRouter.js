import { Router } from "express";
const router = Router();
import { getAllItems, getItemById } from "../Repo/ItemRepo.js";
import { authenticate } from "./Authentication.js";


router.get("/api/items", authenticate, async (req, res) => {
    const items =await getAllItems();
    res.send(items);
});

router.get("/api/items/:id", authenticate, async (req,res) =>{
    const selectesItems = await getItemById(req.params.id);
    res.send(selectesItems);
} )

export default router;


