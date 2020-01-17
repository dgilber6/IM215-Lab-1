//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript
//Can we divide it?: 8kyu
function isDivideBy(number, a, b) {
  if(number % a == 0 && number % b == 0){
    return true;
    } else {
    return false;
    }
}





//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
//Reverse Words: 8kyu

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}





//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
//Largest pair sum in array: 7kyu

function largestPairSum(numbers)
{
  let a = numbers.sort((a,b)=>a-b);
  return numbers[numbers.length -1] + numbers[numbers.length-2];
}





//https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
//Is n divisible by (...)?: 7kyu


function isDivisible(firstN, ...otherN){
  return otherN.every(n => firstN % n === 0);
}
