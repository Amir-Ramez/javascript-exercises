const repeatString = function (string, num) {
    if (num < 0) return 'ERROR';
    if (num === 0) return '';
    let tmp = string;
    for (let i = 0; i < num - 1; ++i) string += tmp;
    return string;
};

// Do not edit below this line
module.exports = repeatString;
