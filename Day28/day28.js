const add = (a) => {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

const addedValue = add(10)(20)(30);
console.log(addedValue);
