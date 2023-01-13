import db from "../db/connection.js";
import User from "../models/User.js";
import users from "./users.json" assert { type: "json" };

const insertData = async () => {
    await User.deleteMany({}) 

    await User.create(users);

    await db.close();
}

insertData();