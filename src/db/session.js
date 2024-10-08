import { model, Schema } from "mongoose";

const sessionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref:'user', require: true },
  accessToken: { type: String, require: true },
  refreshToken: { type: String, require: true },
  accessTokenValidUntil: { type: Date, require: true },
  refreshTokenValidUntil: { type: Date, require: true },
},
    {timestamps: true, versionKey: false},
);


export const SessionCollection = model('sessions', sessionSchema);
