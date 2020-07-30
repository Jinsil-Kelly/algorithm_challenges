// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function twoStrings(s1, s2) {
  let a = [];
  let b = [];
  let result = 'NO';
  if (s1 >= s2) {
    a = [...s1];
    b = [...s2];
  } else {
    a = [...s2];
    b = [...s1];
  }

  b.forEach((s) => {
    if (a.indexOf(s) > -1) {
      result = 'YES';
    }
  });

  return result;
}
