import db from "../database/createConnection.js"
import bcrypt from "bcrypt"


export async function signUpUser(email,password){
    bcrypt.hash(password, 10,async (err, hash) => {
        await db.execute("INSERT INTO users (email,password) VALUES (?,?) ",[email,hash])
    });
}

export async function getUserByEmail(email){
    const[rows,fields] =  await db.execute("SELECT * FROM users WHERE email=? ",[email])
    return rows[0];
}