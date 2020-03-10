let randomArr = [];

randomArr = function randomrandom() {
  for (let i = 0; i < 25; i++) {
    var num = Math.floor(Math.random() * 242);

    if (randomArr.includes(num)) {
      index--;
    } else {
      randomArr.push(num);
    }
  }
};
