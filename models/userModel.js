const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/fyptang/image/upload/v1668528618/avatar/defaultuser_o4rb9k.png",
    },
    role: { type: String, default: "user" },
    position: { type: String, default: "doctor" },
    mobile: { type: String, default: "" },
    address: { type: String, default: "" },
    story: {
      type: String,
      default: "",
      maxlength: 200,
    },
    website: { type: String, default: "" },
    followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    saved: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    experience: { type: String, default: "" },
    specialist: { type: String, default: "" },
    education: { type: String, default: "" },
    identitycard: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
