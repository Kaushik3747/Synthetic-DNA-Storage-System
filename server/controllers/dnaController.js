const DNAStorage = require("../models/DNAStorage");

const {
  textToBinary,
  binaryToDNA,
  dnaToBinary,
  binaryToText,
} = require("../utils/dnaConverter");

// ========================================
// Encode Text → Binary → DNA
// ========================================
const encodeDNA = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    // Convert text to binary
    const binary = textToBinary(text);

    // Convert binary to DNA
    const dna = binaryToDNA(binary);

    // Save into MongoDB
    const dnaRecord = await DNAStorage.create({
      userId: req.user.id,
      originalText: text,
      binaryData: binary,
      dnaSequence: dna,
      fileName: "Text Input",
      fileType: "text",
    });

    return res.status(201).json({
      success: true,
      message: "DNA Encoded Successfully",
      data: dnaRecord,
    });
  } catch (error) {
    console.error("Encode Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// Decode DNA → Binary → Text
// ========================================
const decodeDNA = async (req, res) => {
  try {
    const { dna } = req.body;

    if (!dna) {
      return res.status(400).json({
        success: false,
        message: "DNA sequence is required",
      });
    }

    const binary = dnaToBinary(dna);

    const originalText = binaryToText(binary);

    return res.status(200).json({
      success: true,
      binary,
      originalText,
    });
  } catch (error) {
    console.error("Decode Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// Get Storage History
// ========================================
const getHistory = async (req, res) => {
  try {
    const history = await DNAStorage.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (error) {
    console.error("History Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// Dashboard Statistics
// ========================================
const getStats = async (req, res) => {
  try {
    const records = await DNAStorage.find({
      userId: req.user.id,
    });

    const totalRecords = records.length;

    const totalDNABases = records.reduce(
      (sum, item) => sum + item.dnaSequence.length,
      0
    );

    const totalBinaryBits = records.reduce(
      (sum, item) => sum + item.binaryData.length,
      0
    );

    const latestUpload =
      records.length > 0
        ? records[0].createdAt
        : null;

    return res.status(200).json({
      success: true,
      stats: {
        totalRecords,
        totalDNABases,
        totalBinaryBits,
        latestUpload,
      },
    });
  } catch (error) {
    console.error("Stats Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// Delete DNA Record
// ========================================
const deleteDNARecord = async (req, res) => {
  try {
    const { id } = req.params;

    const record = await DNAStorage.findOne({
      _id: id,
      userId: req.user.id,
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "DNA Record not found",
      });
    }

    await DNAStorage.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "DNA Record Deleted Successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  encodeDNA,
  decodeDNA,
  getHistory,
  getStats,
  deleteDNARecord,
};