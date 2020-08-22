// https://www.hackerrank.com/challenges/angry-professor/problem

const angryProfessor = (k, a) => {
  const yesStr = 'YES';
  const noStr = 'NO';
  const onTimeStudents = a.filter((time) => time <= 0).length;
  return k > onTimeStudents ? yesStr : noStr;
};
