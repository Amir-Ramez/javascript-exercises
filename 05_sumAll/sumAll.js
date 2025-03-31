const sumAll = function (first, second) {
    if (typeof first != typeof second) return 'ERROR';
    if (!(first >= 0 && second >= 0)) return 'ERROR';
    if (Math.floor(first) < first || Math.floor(second) < second)
        return 'ERROR';
    if (second < first) return sumAll(second, first);
    return (second * (second + 1) - first * (first - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
