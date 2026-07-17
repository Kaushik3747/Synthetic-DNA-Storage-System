function textToBinary(text) {
  let binary = "";

  for (let i = 0; i < text.length; i++) {
    binary += text.charCodeAt(i).toString(2).padStart(8, "0");
  }

  return binary;
}

function binaryToDNA(binary) {
  const map = {
    "00": "A",
    "01": "C",
    "10": "G",
    "11": "T",
  };

  let dna = "";

  for (let i = 0; i < binary.length; i += 2) {
    dna += map[binary.substring(i, i + 2)];
  }

  return dna;
}

function dnaToBinary(dna) {
  const map = {
    A: "00",
    C: "01",
    G: "10",
    T: "11",
  };

  let binary = "";

  for (const letter of dna) {
    binary += map[letter];
  }

  return binary;
}

function binaryToText(binary) {
  let text = "";

  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.substring(i, i + 8);
    text += String.fromCharCode(parseInt(byte, 2));
  }

  return text;
}

module.exports = {
  textToBinary,
  binaryToDNA,
  dnaToBinary,
  binaryToText,
};