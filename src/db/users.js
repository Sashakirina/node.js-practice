import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
},
{timestamps: true, versionKey: false}
)

usersSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
}

export const UsersCollection = model('users', usersSchema);
