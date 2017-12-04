const NUMS = [1, 2, 3, 4, 5];

//Array#myEach



Array.prototype.myEach = function (func) {

  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});


//Array#myMap

Array.prototype.myMap = function (func) {
  mapArray = [];
  
  this.myEach(element => mapArray.push(func(element)));

  return mapArray;
}


//Array#myReduce

Array.prototype.myReduce = function (func, initialValue) {
  
  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(element => result = func(result, element));

  return result;
};