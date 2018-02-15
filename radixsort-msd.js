/* 
 * radix sort algorithm MSD
 * this should have a quick sort for the object arrays
 * the current implementation is not correct
 * I cheated by using js sort()... still seems VERY fast
 * @Paul Hosler
 * @20180212
 *
**/
var makeData =require("./mkrndData.js");
var data = new makeData({length:10, numItems:1000000});
//console.log(data.Alpha(),\n, data.Numeric(),\n, data.AlphaNumeric());
var nums = data.Numeric();
console.log('sorting');
const radix = {
  "0":[],
  "1":[],
  "2":[],
  "3":[],
  "4":[],
  "5":[],
  "6":[],
  "7":[],
  "8":[],
  "9":[],
  "A":[],
  "a":[],
  "B":[],
  "b":[],
  "C":[],
  "c":[],
  "D":[],
  "d":[],
  "E":[],
  "e":[],
  "F":[],
  "f":[]
};
const rsort = arr => {
  let radixArr =[];
  arr.forEach(el => radix[el[0]].push(el));
  for (let keys in radix){
    radix[keys].sort(); //using js sort instead of a quicksort for now
    while(radix[keys].length > 0 ){
       radixArr.push(radix[keys].shift());
    }
  }
  return radixArr;
};
rsort(nums).forEach(el=>{console.log(el);});
