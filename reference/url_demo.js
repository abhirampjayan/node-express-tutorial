const url = require("url");
const myURL = new URL("https://github.com/abhirampjayan");

// Srialized URl
console.log(myURL.href);
// Host
console.log(myURL.host);
// Host name (Does not get port)
console.log(myURL.hostname);
// Pathname
console.log(myURL.pathname);
console.log(myURL.searchParams);
myURL.searchParams.append("abc", 123);
myURL.searchParams.append("host", "192.168.1.1");
console.log(myURL.searchParams);
myURL.searchParams.forEach((value, key) => console.log(key, value));
