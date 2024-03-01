let arr = [256, 32, 187, 56, 4, 99];
let n = arr.length;
let s = 99;
function linearSearch(arr, n, s) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == s) {
          return i;
        }
      }
      return -1;
    }
    let result = linearSearch(arr, n, s);
    console.log('Linear search:');
    if (result != -1) {
      console.log(`Element found at arr[${result}]`);
    } else {
      console.log("Element not found");
    }

    arr = [4, 32, 56, 99, 187, 256];
    s = 32;
    function binarySearch(arr, s) {
      let start = 0;
      let end = n;
      while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === s) {
          return middle;
        } else if (s > arr[middle]) {
          start = middle + 1;
        } else {
          end = middle - 1;
        }
      }
      return -1;
    }
    result = binarySearch(arr, s);
    console.log('Binary Search:');
    if (result != -1) {
      console.log(`Element found at arr[${result}]`);
    } else {
      console.log("Element not found");
    }

