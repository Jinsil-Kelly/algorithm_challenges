// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const designerPdfViewer = (h, word) => {
  const ASCIIcodeOfLowerCaseA = 97;
  const wordHeightArr = [...word].map(
    (char) => h[char.charCodeAt() - ASCIIcodeOfLowerCaseA],
  );
  return Math.max.apply(null, wordHeightArr) * word.length;
};
