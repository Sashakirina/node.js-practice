import { model, Schema } from 'mongoose';

const ProductShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
      required: true,
    },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'users', require: true },
  },

  { timestamps: true, versionKey: false },
);

export const ProductModel = model('product', ProductShema);
