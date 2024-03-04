// EXAMPLE 1 - Split a String by Newline in JavaScript

const str = 'bobby\nhadz\r\ncom';

const result = str.split(/\r?\n/);

// 👇️ [ 'bobby', 'hadz', 'com' ]
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using an alternative regular expression

// const str = 'bobby\nhadz\r\ncom';

// const result = str.split(/[\r\n]+/);

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove empty strings after splitting

// const str = 'bobby\nhadz\r\ncom\n';

// const result = str.split(/\r?\n/);

// // 👇️ [ 'bobby', 'hadz', 'com', '' ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using the `os.EOL` property in Node.js

// import os from 'os';

// const str = 'bobby\nhadz\r\ncom';

// const arr = str.split(os.EOL);

// console.log(arr); // 👉️ [ 'bobby', 'hadz\r', 'com' ]
