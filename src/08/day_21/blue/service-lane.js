// https://www.hackerrank.com/challenges/service-lane/problem

const serviceLane = (width, cases) => {
  return cases.map((caseEl) =>
    Math.min(...width.slice(caseEl[0], caseEl[1] + 1)),
  );
};
