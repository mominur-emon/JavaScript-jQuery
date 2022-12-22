//high scorer name print

function maxRunSrc(info) {
  let highScorer = info[0][0];
  let highScore = info[0][1];

  for (let i = 1; i < info.length; i++) {
    if (highScore < info[i][1]) {
      highScore = info[i][1];
      highScorer = info[i][0];
    }
  }
  return highScorer;
}

let info = [
  ["emon", 24],
  ["rifat", 200],
  ["jamil", 12],
  ["mihal", 50],
];
var name = maxRunSrc(info);
document.write(name);
