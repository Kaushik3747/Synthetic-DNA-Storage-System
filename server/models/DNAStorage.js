const mongoose = require("mongoose");

const dnaStorageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      default: "Text Input",
    },

    originalText: {
      type: String,
      required: true,
    },

    binaryData: {
      type: String,
      required: true,
    },

    dnaSequence: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      default: "text",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DNAStorage", dnaStorageSchema);