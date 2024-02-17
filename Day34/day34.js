let arr = [26, 42, 78, 18, 3];
let n = arr.length;
function bubbleSort(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
console.log("Before bubble sorting: " + arr);
bubbleSort(arr, n);
console.log("After bubble sorting: " + arr);


arr = [26, 42, 78, 18, 3];
    function merge(arr, l, m, r) {
      let n1 = m - l + 1;
      let n2 = r - m;
      let L = new Array(n1);
      let R = new Array(n2);
      

      for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
      }
      
      for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
      }

      let i = 0;
      let j = 0;
      let k = l;

      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }

      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }

      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }

    function mergeSort(arr, l, r) {
      if (l < r) {
        let m = Math.floor(l + (r - l) / 2);

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        
      }
    }

    console.log("Before merge sorting: " + arr);
    mergeSort(arr, 0, arr.length - 1);
    console.log("After merge sorting: " + arr);
