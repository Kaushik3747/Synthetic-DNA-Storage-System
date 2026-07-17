const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  encodeDNA,
  decodeDNA,
  getHistory,
  getStats,
  deleteDNARecord,
  uploadAndEncode,
} = require("../controllers/dnaController");

router.post("/encode", auth, encodeDNA);

router.post("/decode", auth, decodeDNA);

router.get("/history", auth, getHistory);

router.get("/stats", auth, getStats);

router.delete("/:id", auth, deleteDNARecord);

/* NEW */
router.post(
  "/upload",
  auth,
  upload.single("file"),
  uploadAndEncode
);

module.exports = router;