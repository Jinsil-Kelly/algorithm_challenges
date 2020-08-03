// https://www.hackerrank.com/challenges/sherlock-and-anagrams

function sherlockAndAnagrams(s) {
  const dict = {};
  let count = 0;
  s.forEach((char) => {
    for (let i = char + 1; i < s.length + 1; i += 1) {
      const transformed = s.slice(char, i).trim().split('').sort().join('');
      if (dict[transformed]) {
        count += dict[transformed];
        dict[transformed] += 1;
      } else {
        dict[transformed] = 1;
      }
    }
  });

  return count;
}
