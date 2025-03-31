const removeFromArray = function (arr, ...target) {
    for (let i = 0; i < target.length; ++i) {
        arr = arr.filter((item) => item !== target[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
