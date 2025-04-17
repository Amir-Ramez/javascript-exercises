const palindromes = function (str) {
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    str = str
        .toLowerCase()
        .split('')
        .filter((chr) => chars.includes(chr))
        .join('');

    for (let i = 0; i < str.length / 2; ++i)
        if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
