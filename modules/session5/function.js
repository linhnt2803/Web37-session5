const fs = require('fs')

function sum(a, b) {
  console.log(arguments) // [valueA, valueB]
  return a + b
}

// 1. arguments
console.log(sum.length) // ~ numbers arguments = 2

sum(1, 2)

console.log(1, 2, 3, 4, 5)

// function log() {
//   let dataToLog = arguments
//   for(let item of dataToLog) {
//     console.log(item)
//   }
// }

function log(...dataToLog) {
  for(let item of dataToLog) {
    console.log(item)
  }
}

// log(1, 2, 3, 4, 5)
let data = [1, 2, 3, 4, 5]
log(...data)

// 2. Callback function vs Async function vs Sync function
// callback function: async function require a callback
// async function: async function return a Promise

// callback function
// fs.readFile(
//   `/Users/linhnt/Documents/techkids/Web/Web37/session_4/server.j`,
//   function(err, fileContent) {
//     console.log('error', err)
//     console.log('fileContent', fileContent)
//     // console.log('read file done!')
//     // console.log('data', fileContent.toString())
//   }
// )

// async/await: await only available when place before an promise
// async function
function readFileAsync(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, function(err, fileContent) {
      if(err) {
        reject(err)
      } else {
        resolve(fileContent)
      }
    })
  })
}

// async function run() {
//   // fs.readFileSync
//   let file1 = await readFileAsync(`/Users/linhnt/Documents/techkids/Web/Web37/session_4/library.js`)
//   console.log(file1)
// }

// run()

// 3. Pure function vs Impure function

// pure function
function minus(a, b) {
  return a - b
}

// impure function
let number = 0
function sumImpure(a) {
  number = number + a
  console.log(number)
  return number
}

sumImpure(1) // 1
sumImpure(1) // 2
sumImpure(1) // 3
sumImpure(1) // 4

// 3. this vs .bind()
function printThis() {
  console.log(this)
}

printThis() // global

let containerA = {
  name: 'A',
  printThis: printThis
}
containerA.printThis() // { name: 'A' }

let containerB = {
  name: 'B',
  printThis: printThis.bind(containerA)
}
containerB.printThis() // { name: 'A' }

// 4. arrow function
// const multiply = function(a, b) {
//   return a * b
// }
// const multiply = (a, b) => {
//   return a * b
// }
// const multiply = (a, b) => a * b // auto bind this
const multiply = () => console.log(this) // auto bind this
multiply()
const containerX = {
  name: 'X',
  multiply: multiply
}
containerX.multiply()
const containerY = {
  name: 'Y',
  multiply: multiply
}
containerY.multiply()
