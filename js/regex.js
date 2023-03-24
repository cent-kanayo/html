const str = 'FreeCodeCamp';
let regex = /code/;
// console.log(regex.test(str));

//Character set matching []
const lorem = 'Lorem ipsum dolor sit amet.';
let strRegex = /[aioue]/gi;
// console.log(lorem.match(strRegex));

const add = 'Jenny06793';
let addRegex = /[a-z0-9]/gi;
// console.log(add.match(addRegex));
// returns an array of characters that match the regex

// Find characters not to be returned ^
const negated = 'Thsappe0 0qyeqom1 89u2?!.@7&hs';
let myRegex = /[^aeiou0-9]/gi;
// console.log(negated.match(myRegex));
// returns an array of characters that doesn't match the regex

// Match characters that appear one or more times +
const river = 'Mississipspi';
let riverRegex = /s+/gi;
// console.log(river.match(riverRegex));
// returns an array of matched characters

// Match characters that appear zero or more times *
const word = 'Gooooooaaalaa';
let wordRegex = /Go*a+/;
// console.log(word.match(wordRegex));
// returns an array of matched characters

// Find Characters with lazy matching ?
const lazy = 'titanic';
let lazyRegex = /t[a-z]*?i/;
// console.log(lazy.match(lazyRegex));

// Find characters that starts with ^
const char = 'David is a big boy';
const charRegex = /^David/;
// console.log(charRegex.test(char));

// Find ending string patterns $
const story = 'The is a really beautiful Story';
const storyRegex = /story$/i;
// console.log(storyRegex.test(story));

// Shorthand to match alpha-numeric characters \w
const alphaNumeric = 'This is an @3as Alpha123 nnum __4';
let testReg = /(\w+)/g;
console.log(alphaNumeric.match(testReg));
// returns an array of matched characters

// Shorthand to match non alpha-numeric characters \W
const notalphaNumeric = 'This is an @3as Alpha123 nnum __4';
let ntestReg = /\W/g;
// console.log(alphaNumeric.match(testReg));
// returns an array of matched characters

// Shorthand to find digits or numbers only \d
const num = 'The year 2020 was my 12th year of coding';
let numRegex = /\d/g;
// console.log(num.match(numRegex));

// Shorthand to find non-digits only \D
const notNum = 'The year 2020 was my 12th year of coding';
let notnumRegex = /\D/g;
// console.log(num.match(notnumRegex));

// Username restrictions
const username = 'centkanayo10';
let usernameRegex = /^[a-z][a-z]+\d*$|^[a-z]\d\d$/i;
// console.log(usernameRegex.test(username));

// Shorthand to find space or whitespace \s
const space = 'The year 2020 was my 12th year of coding';
let spaceRegex = /\s/g;
// console.log(space.match(spaceRegex));

// Shorthand to find  non space or whitespace \S
const notspace = 'The year 2020 was my 12th year of coding';
let notspaceRegex = /\S/g;
// console.log(notspace.match(notspaceRegex));

// Using quantitfiers to find lower and upper limit {lower, upper}
const quant = 'Helllllo bae';
let quantRegex = /Hel{,4}o bae/;
// console.log(quantRegex.test(quant));

// Using quantitfiers to find exact number of characters {num}
const exact = 'Hellllo bae';
let exactRegex = /Hel{4}o bae/;
// console.log(exactRegex.test(exact));

// Check for all or none ?{optional}

const fav = 'Favourite';
let favRegex = /favou?rite/i;
// console.log(favRegex.test(fav));

// Positive lookahead (?=...)
// Negative lookahead (?!...)
const Plook = 'quait';
let pRegex = /q(?=u)/;
let nRegex = /q(?!a)/;
// console.log(Plook.match(pRegex));
// console.log(Plook.match(nRegex));
// password checker
const password = 'astronaut30';
const pass = /(?=\w{6,})(?=\D*\d{4})/i;
// console.log(pass.test(password));

// Capture groups
let repeatNum = '42 42 42 42';
let reRegex = /^(\d+) \1 \1$/;
// console.log(reRegex.test(repeatNum));

// Trim with regex
let strTrim = '   Hello, World   ';
let strTregex = /^\s+|\s+$/g;
// console.log(strTrim.replace(strRegex, ''));
