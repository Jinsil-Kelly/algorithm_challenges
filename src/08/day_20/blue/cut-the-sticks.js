// https://www.hackerrank.com/challenges/cut-the-sticks/problem

const cutTheSticks = (arr) => {
  const result = [];
  let newArr = [...arr];

  while (newArr.length) {
    const min = Math.min.apply(null, newArr);
    result.push(newArr.length);

    newArr = newArr.reduce((acc, num) => {
      // eslint-disable-next-line no-param-reassign
      num -= min;
      return num ? [...acc, num] : acc;
    }, []);
  }
  return result;
};
