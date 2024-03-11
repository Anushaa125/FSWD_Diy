let fruits = ["orange", "mango", "apple", "guava"];

    function unshift(arr, element) {
      for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
        if (i == 0) {
          arr[i] = element;
        }
      }
    }
    console.log(`array before inserting the element : ${fruits}`);
    unshift(fruits, "kiwi");
    console.log(`array after inserting the element : ${fruits}`);

    function forEach(array, callback) {
      for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
      }
    }
    forEach(fruits, (item, index) => {
      console.log(`${index + 1}.${item}`);
    });

