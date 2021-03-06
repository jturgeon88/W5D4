// range

function range(start, end) {

  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);

  r.push(end - );

  return r;

};


//sumRec   --- receives an array of numbers and recursively sums them

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  // let lastNum = 
  let sum = sumRec(arr.slice(0, arr.length - 1));
  sum = sum + arr[arr.length - 1];

  return sum;

};

// exponent(base, exp)

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  let answer = base * exponent(base, exp - 1);

  return answer;

}


// exponent v2

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    let answer = exponent(base, exp / 2)  ** 2;
    return answer;
  } else {
    let answer = b * (exponent(base, (exp - 1) / 2) ** 2);
    return answer;
  }

};


function fibonacci(n) {
  let fibs = [0, 1];
  if (n < 3) {
    return fibs.slice(0, n);
  }

  while (fibs.length < n) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }

  return fibs;

}

function fibRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibRec(n - 1);
  fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);

  return fibs;
}


// bsearch 

function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx;
  } else if (target < probe) { 
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subProblem = bsearch(right, target);

    return subProblem;
  }

}


// merge, mergesort

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle)); 
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);

}

// subsets

function subsets(array) {
  if (array.length === 0 ){
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  const withFirst = withoutFirst.map(sub => [first].concat(sub) );

  return withoutFirst.concat(withFirst);

}













