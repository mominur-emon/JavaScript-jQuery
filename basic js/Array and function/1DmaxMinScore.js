function highestScr(scores) {
  let max = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
    }
  }
  return max;
}
function minimumScr(scores) {
  let min = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (min > scores[i]) {
      min = scores[i];
    }
  }
  return min;
}
let scores = [10, 14, 1, 21, 6, 88, 3];

let maxScore = highestScr(scores);
let minScore = minimumScr(scores);

document.write("Maximum Score is = " + maxScore);
document.write("<br/>Minimum Score is = " + minScore);
