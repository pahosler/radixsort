/* 
 * radix sort algorithm LSD
 * @Paul Hosler
 * @20180211
 *
 **/
var makeData = require("./mkrndData.js");
var data = new makeData({length: 10, numItems: 10000});
var nums = data.AlphaNumeric();
console.log('sorting');
var count = nums[0].length - 1;
const radix = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
    "A": [],
    "a": [],
    "B": [],
    "b": [],
    "C": [],
    "c": [],
    "D": [],
    "d": [],
    "E": [],
    "e": [],
    "F": [],
    "f": []
};
const rsort = arr => {
    let radixArr = [];
    arr.forEach(el => radix[el[count]].push(el));
    for (let keys in radix) {
        while (radix[keys].length > 0) {
            radixArr.push(radix[keys].shift());
        }
    }
    --count;
    if (count < 0) {
        return radixArr;
    }
    ;
    radixArr = rsort(radixArr);
    return radixArr;
};
rsort(nums).forEach(el => {
    console.log(el);
});
