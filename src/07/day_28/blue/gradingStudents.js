// https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = (grades) => {
  const resultArr = [];
  for (let i = 0; i < grades.length; i += 1) {
    const grade = grades[i];
    const nextMultiple = Math.ceil(grade / 5) * 5;
    if (grade < 38 || nextMultiple - grade >= 3) {
      resultArr.push(grade);
    } else {
      resultArr.push(nextMultiple);
    }
  }
  return resultArr;
};
