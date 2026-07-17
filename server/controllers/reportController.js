const PDFDocument = require("pdfkit");
const DNAStorage = require("../models/DNAStorage");
const analyzeDNA = require("../utils/dnaAnalytics");

exports.getReport = async (req, res) => {
  try {
    const data = await DNAStorage.findById(req.params.id);

    if (!data)
      return res.status(404).json({ message: "Record not found" });

    const stats = analyzeDNA(
      data.dnaSequence,
      data.binaryData
    );

    res.json({
      success: true,
      data,
      analytics: stats,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.exportPDF = async (req, res) => {
  try {
    const record = await DNAStorage.findById(req.params.id);

    if (!record)
      return res.status(404).json({ message: "Record not found" });

    const a = analyzeDNA(record.dnaSequence, record.binaryData);

    const pdf = new PDFDocument();

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=DNA_Report.pdf"
    );

    res.setHeader("Content-Type", "application/pdf");

    pdf.pipe(res);

    pdf.fontSize(22).text("Synthetic DNA Report");

    pdf.moveDown();

    pdf.text(`Original : ${record.originalText}`);
    pdf.text(`DNA : ${record.dnaSequence}`);
    pdf.text(`Binary : ${record.binaryData}`);

    pdf.moveDown();

    pdf.text(`GC : ${a.gcContent}%`);
    pdf.text(`AT : ${a.atContent}%`);
    pdf.text(`DNA Length : ${a.dnaLength}`);
    pdf.text(`Compression : ${a.compressionRatio}`);
    pdf.text(`Integrity : ${a.integrity}`);

    pdf.end();

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.exportTXT = async (req, res) => {

  const r = await DNAStorage.findById(req.params.id);

  const a = analyzeDNA(r.dnaSequence, r.binaryData);

  const txt = `
Synthetic DNA Report

Original:
${r.originalText}

DNA:
${r.dnaSequence}

Binary:
${r.binaryData}

GC:${a.gcContent}%

AT:${a.atContent}%

DNA Length:${a.dnaLength}

Compression:${a.compressionRatio}

Integrity:${a.integrity}
`;

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=DNA_Report.txt"
  );

  res.send(txt);
};