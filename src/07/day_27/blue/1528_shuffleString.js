// https://leetcode.com/problems/shuffle-string/

const restoreString = (string, indices) => {
  return indices
    .reduce((acc, cur, index) => {
      acc[cur] = string[index];
      return acc;
    }, [])
    .join('');
};
