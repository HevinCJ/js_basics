const Quote = require("inspirational-quotes");

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: true })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quotenode
