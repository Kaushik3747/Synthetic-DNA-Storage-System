const router = require("express").Router();

const auth = require("../middleware/auth");

const {
  getReport,
  exportPDF,
  exportTXT,
} = require("../controllers/reportController");

router.get("/:id", auth, getReport);

router.get("/pdf/:id", auth, exportPDF);

router.get("/txt/:id", auth, exportTXT);

module.exports = router;