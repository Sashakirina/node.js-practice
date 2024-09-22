import createHttpError from "http-errors";
import { UsersCollection } from "../db/users.js"
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
    console.log(payload);

    const user = await UsersCollection.findOne({ email: payload.email });
    if (user) {
        throw createHttpError(409, 'Email in use');
    }
    const userPassword = await bcrypt.hash(payload.password, 10)
    return await UsersCollection.create({ ...payload, password: userPassword });
};
