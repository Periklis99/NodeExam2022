import db from "../database/createConnection.js"

export async function addItems(item_id,user_id){
    
    await db.execute("INSERT INTO cart (item_id,user_id) VALUES (?,?) ",[item_id,user_id])
   
}

export async function getCardByUserId(user_id){

    const[rows,fields] = await db.execute("SELECT * FROM cart WHERE user_id =? " ,[user_id])
    return rows;

}

export async function deleteItemById(id){

    await db.execute("DELETE FROM cart WHERE id =? " ,[id])

}

