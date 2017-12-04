// Array#uniq

Array.prototype.uniq = function() {
  let uniqArray = [];

  for (let i = 0; i < this.length; i++) {
    if (!uniqArray.includes(this[i])) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
};

// Alt option

Array.prototype.uniq = function() {
  let uniqArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
};

// Array#twoSum

Array.prototype.twoSum = function() {
  const sumPairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumPairs.push([i, j]);
      }
    }
  }

  return sumPairs;
};

// Array#transpose
Array.prototype.transpose = function() {
  const transArray = Array.from(
    { length: this.length },
    () => Array.from({ length: this[0].length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      transArray[j][i] = this[i][j]

    }
  }

  return transArray;
};
