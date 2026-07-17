const pdf = require("pdf-parse");

const parseFile = async (file) => {
  if (!file) {
    throw new Error("No file uploaded");
  }

  const type = file.mimetype;

  if (type === "text/plain") {
    return file.buffer.toString("utf8");
  }

  if (type === "application/pdf") {
    const data = await pdf(file.buffer);
    return data.text;
  }

  throw new Error("Unsupported file type");
};

module.exports = parseFile;