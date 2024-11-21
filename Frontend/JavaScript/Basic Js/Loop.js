// loop => run the code again and again

// type of a loop
// 1. for loop => 
// 2. while loop 
// 3. do while loop
// 4. for in loop 
// 5. for of loop


//1.  for loop
// let num = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<=num.length; i++){
//     console.log(i)
// }
// console.log(num.length)

// let num = [1,2,3,4,5,6,7,8,9,10]
// let count = 0
// for(let i=0; i<=num.length; i++){
//     count = count+num[i]
//     console.log(count)
// }

// let num = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<=num.length; i++){
//     if(i==5){
//       console.log(`5 is present ${i}`)
//         continue
//     }
//     console.log(i)
// }

// 2. while loop

// while(condition){
//     code to be executed
// }

// let sum = 0
// let i = 0

// while(i<=15){
//     sum += i
//     i++

//     // console.log(sum)
// }
// console.log(sum)

// let arr = [1,2,3,4,5,6,7]
// let start = 0
// let end = arr.length-1
// while(start<=end){
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--

// }
// console.log(arr)

// 3. do while loop
// do{
//     // code to be executed
//     // condition
// }while(condition)


// let sum = 0
// let i = 1
// do{
//    sum = sum + i
//     console.log(sum)
//     i++
// }
// while(i<=10)

//Assignment
// 1. Factorial of a number
// 2. Prime number
// 3. palindrome number
// 4. Fabonacci number

// 4. For in loop
// let num = [1,2,3,4,5,6,7,8,9,10]
// for(let i in num){
//     console.log(i)
// }


// 5. For of loop
// let num = [1,2,3,4,5,6,7,8,9,10]
// for(let i of num){
//     console.log(num[i])
// }

// let num = "sakshi"
// let arr  = Array.from(num)

// console.log(arr)

// let num  = [1,2,3,4,5,6,7,8,9,10]
// num.forEach((Element)=>{
//     console.log(Element*2)
// })