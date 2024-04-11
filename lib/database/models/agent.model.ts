import { Schema, model, models } from "mongoose";

const AgentSchema = new Schema(
  {
    createdById: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    photoId: {
      type: String,
      required: true,
    },
    width: { type: Number },
    height: { type: Number },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
    country: {
      type: String,
    },
    propertyNumber: {
      type: Number,
      default: 12,
    },
  },
  { timestamps: true }
);

const Agent = models?.Agent || model("Agent", AgentSchema);

export default Agent;
