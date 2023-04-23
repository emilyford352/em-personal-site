const string = "Welcome to this Javascript Guide!";

const reverse = (str) => str.split(' ').map((item) => item.split('').reverse().join('')).join(' ');

console.log(reverse(string));