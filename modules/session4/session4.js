// 1. require other files
// const library = require('./library')
// const number = library.number
// const number2 = library.number2
const { number, number2 } = require('./library')
// const { string } = require('./library2/index')
const { string } = require('./library2')

console.log(number, number2)
console.log(string)

// 2. require from build-in libraries
const path = require('path')
const fs = require('fs') // file system
const cp = require('child_process')
const crypto = require('crypto')
const zlib = require('zlib')

// path
let folderPath = `/Users/linhnt/Documents/techkids/Web/Web37/session_4/library2`
let fileName = `index.js`
let filePath = path.join(folderPath, fileName)
console.log(filePath)
console.log(path.join(__dirname, 'server.js'))
console.log(path.parse(folderPath))

// fs
console.log(fs.readFileSync(filePath).toString('utf-8'))
// const readFileCanAwait = util.promisify(fs.readFile)
// await readFileCanAwait(filePath)
console.log(fs.existsSync(folderPath))
console.log(fs.statSync(folderPath).isFile()) // false
console.log(fs.statSync(folderPath).isDirectory()) // true
// fs.unlink
// fs.rmdir
// fs.rename
// fs.readdir

// child_process
const result = cp.execSync('ls')
console.log('ls result: ', result.toString('utf-8'))

// crypto

function hashMd5(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

let str = 'Nguyễn Thế Linh'
let hashStr = hashMd5(str)
console.log(str, hashStr)

// zlib
let text = `abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf`

let text2 = `abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf`

let text3 = `abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf
abcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadfabcabacbacasdfASDFasdfasdfasdfasdfasdfasdfadf`

let bufferZipped = zlib.deflateSync(text)
let strZipped = bufferZipped.toString('base64')
let strZipped2 = zlib.deflateSync(text2).toString('base64')
let strZipped3 = zlib.deflateSync(text3).toString('base64')

let buffer = Buffer.from(strZipped, 'base64')
let strUnzipped = zlib.inflateSync(buffer)

console.log('text', text)
console.log('strZipped', strZipped)
console.log('strZipped2', strZipped2)
console.log('strZipped2', strZipped3)
console.log('compare source with unzip', text == strUnzipped)

// TODO:
// npm?
//- npm init
//- npm install/uninstall
