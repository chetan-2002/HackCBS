const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    description: {
      type: String,
      trim: true,
    },
    profilePic: {
      type: String,
    },
    certificate: {
      type: String,
    },
    role: {
      type: String,
      enum: ["volunteer", "ngo"],
      required: true,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    ifscCode: {
      type: String,
    },
    physicalVerificationDate: {
      type: Date,
    },
    physicalVerificationStatus: {
      type: String,
    },
    physicalVerificationTime: {
      type: String,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        review: {
          type: String,
        },
      },
    ],
    yourInterest: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
