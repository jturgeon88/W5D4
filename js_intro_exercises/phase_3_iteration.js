// Array#bubblesort 

const NUMS = [8, 4, 3, 5, 2, 9, 6];

Array.prototype.bubblesort = function() {

  let sorted = false;

  while (!sorted) {

    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};


// String#substrings with a given words Array (dictionary)

String.prototype.substrings = function(wordsArray) {

  // declare a results array and a temp string

  let subStrings = [];
  let tempString = "";

  // need to iterate through the this to change the starting letter 

  for (let i = 0; i < this.length; i++) {
    let c = this.charAt(i);
    tempString += c;
    for (let j = i + 1; j < this.length; j++) {
      let d = this.charAt(j); 
      tempString += d;
      if (wordsArray.includes(tempString))
        subStrings.push(tempString)
    }
    tempString = "";
  }
  return subStrings;

}

// String#substrings (all substrings not checking if it is a word or not)

String.prototype.substrings = function() {
  let subStrings = [];

  for (let start = 0; start < this.length; start++) {
    for (let len = 1; (start + len) <= this.length; len++) {
      subStrings.push(this.substring(start, start + len))
    }
  }

  return subStrings;
}



