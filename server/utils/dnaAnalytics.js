// ===============================================
// DNA Analytics Utility
// ===============================================

const calculateDNAAnalytics = (dnaSequence, binaryData = "") => {
  if (!dnaSequence || dnaSequence.length === 0) {
    return {
      dnaLength: 0,
      binaryLength: 0,
      gcContent: 0,
      atContent: 0,
      compressionRatio: "0:1",
      integrity: false,
      qualityScore: 0,
      estimatedWeight: 0,
      baseDistribution: {
        A: 0,
        T: 0,
        C: 0,
        G: 0,
      },
      errors: [],
    };
  }

  const bases = dnaSequence.toUpperCase().split("");

  const distribution = {
    A: 0,
    T: 0,
    C: 0,
    G: 0,
  };

  const errors = [];

  bases.forEach((base, index) => {
    if (distribution.hasOwnProperty(base)) {
      distribution[base]++;
    } else {
      errors.push({
        position: index,
        value: base,
      });
    }
  });

  const totalBases = dnaSequence.length;

  const gc = distribution.G + distribution.C;
  const at = distribution.A + distribution.T;

  const gcContent = Number(
    ((gc / totalBases) * 100).toFixed(2)
  );

  const atContent = Number(
    ((at / totalBases) * 100).toFixed(2)
  );

  const binaryLength = binaryData.length;

  let compressionRatio = "0:1";

  if (totalBases > 0 && binaryLength > 0) {
    compressionRatio =
      (binaryLength / totalBases).toFixed(2) + ":1";
  }

  const integrity = errors.length === 0;

  let qualityScore = 100;

  if (!integrity) qualityScore -= 30;

  if (gcContent < 40 || gcContent > 60)
    qualityScore -= 10;

  if (qualityScore < 0)
    qualityScore = 0;

  // Approximate molecular weight
  const estimatedWeight = Number(
    (totalBases * 330).toFixed(2)
  );

  return {
    dnaLength: totalBases,
    binaryLength,
    gcContent,
    atContent,
    compressionRatio,
    integrity,
    qualityScore,
    estimatedWeight,
    baseDistribution: distribution,
    errors,
  };
};

module.exports = calculateDNAAnalytics;