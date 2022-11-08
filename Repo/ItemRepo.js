import db from "../database/createConnection.js"

export async function getAllItems(){
    
    const [rows, fields] = await db.execute("SELECT * FROM items;")
    return rows;
}


export async function getItemById(id){

    const[rows,fields] = await db.execute("SELECT * FROM items WHERE id =? " ,[id])
    return rows[0];
}
