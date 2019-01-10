function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  // const allOrders = myArray.concat(alicesArray);

  // return allOrders.sort((a,b) => a-b);
  let output = [];
  myArray.forEach((myOrder) => {
    // if first item in alice's arary is smaller than myOrder
    // add alices items until myOrder is bigger then alices next item
    alicesArray.forEach((alicesOrder) => {
      if (alicesOrder < myOrder) {
        output.push(alicesOrder);
        alicesArray.shift();
      }
    })
    output.push(myOrder)
  })
  if (alicesArray.length > 0) {
    return output.concat(alicesArray);
  }

  return output;
}


// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}