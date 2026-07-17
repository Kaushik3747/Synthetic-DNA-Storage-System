const express = require("express");
const router = express.Router();

const {
  encodeDNA,
  decodeDNA,
  getHistory,
  getStats,
  deleteDNARecord,
} = require("../controllers/dnaController");

const auth = require("../middleware/auth");

// Encode Text → DNA
router.post("/encode", auth, encodeDNA);

// Decode DNA → Text
router.post("/decode", auth, decodeDNA);

// Get Storage History
router.get("/history", auth, getHistory);

// Dashboard Statistics
router.get("/stats", auth, getStats);

// Delete DNA Record
router.delete("/:id", auth, deleteDNARecord);

module.exports = router;