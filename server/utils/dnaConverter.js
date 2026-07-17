// Convert Text → Binary
const textToBinary = (text) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
};

// Convert Binary → DNA
const binaryToDNA = (binary) => {
  const map = {
    "00": "A",
    "01": "T",
    "10": "C",
    "11": "G",
  };

  let dna = "";

  for (let i = 0; i < binary.length; i += 2) {
    dna += map[binary.substring(i, i + 2)];
  }

  return dna;
};

// Convert DNA → Binary
const dnaToBinary = (dna) => {
  const map = {
    A: "00",
    T: "01",
    C: "10",
    G: "11",
  };

  return dna
    .split("")
    .map((ch) => map[ch])
    .join("");
};

// Convert Binary → Text
const binaryToText = (binary) => {
  let text = "";

  for (let i = 0; i < binary.length; i += 8) {
    text += String.fromCharCode(
      parseInt(binary.substring(i, i + 8), 2)
    );
  }

  return text;
};

module.exports = {
  textToBinary,
  binaryToDNA,
  dnaToBinary,
  binaryToText,
};