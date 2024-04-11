import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    propertyUrl: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Property = models?.Property || model("Property", PropertySchema);

export default Property;
