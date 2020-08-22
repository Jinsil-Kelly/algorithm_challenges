// https://www.hackerrank.com/challenges/drawing-book/problem

const pageCount = (n, p) => {
  const fromFirstPage = Math.ceil((p - 1) / 2);
  const fromLastPage = n % 2 ? Math.floor((n - p) / 2) : Math.ceil((n - p) / 2);

  return Math.min(fromFirstPage, fromLastPage);
};
