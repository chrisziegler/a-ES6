var myArr = [1, 2, 3, 4, 5, 6];
var newArr = [];
var len = myArr.length;
for (i = 0; i < len; i++) {
//    myArr[i] + 1;
   newArr.push(myArr[i] + 1)

}
console.log(i); //6
var i = 12;
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;  
console.log(i) //0
// console.log(newArr);