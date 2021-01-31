
let findGreater = (a,b) =>  a > b ? "a is greater" : "b is greater";
console.log(findGreater(55, 1008));

//##############RegEX#######################From FreeCodeCamp Lessons
let petString = "James has a PET goat";
let petRegex = /james|pet|GOAT|HaS/i;  //i ignores the letter case.  Also, the | stands for 'or'. Allows multiple words to be searched.
let result2 = console.log(petRegex.test(petString));


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex));


// Match WORDS that Occur One or More Times
let repetitive = "Goulash Goulash Goulash";
let myRegex = /Goulash/g;  // the g flag extracts a pattern ["Goulash", "Goulash", "Goulash"]
// be sure to put both flags gi so that i ignores letter case and g finds a pattern of mulitple "Goulash" entries.
repetitive.match(myRegex);


// Match CHARACTERS that Occur ONE or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line.  If the word were Spell and you wanted to find 'l' the regex would be:  /l+/g;
let result = difficultSpelling.match(myRegex);



// Match Characters that Occur ZERO or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null


// Find 2 matches that share similarities
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /.hu/;  // hu is the first 2 letters of hug and hum, it searches for both.
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true


let booStr = "I just love my boo";
let bootStr = "These boots were made for walking";
let boRegex = /.bo/;
boRegex.test(booStr);
boRegex.test(bootStr);


// Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


let goatStr = "Goat";
let goodStr = "Good";
let goolashStr = "Goulash";
let goonStr = "Goon";
let gouldStr = "Gould";
let goRegex = /Go[aou]/i;
console.log(goatStr.match(goRegex));
console.log(goodStr.match(goRegex));
console.log(goolashStr.match(goRegex));
console.log(goonStr.match(goRegex));
console.log(gouldStr.match(goRegex));



//Match a bunch of characters all at once.  Example:  The Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let dkRegex = /[a-e]at/;
catStr.match(dkRegex); // Returns ["cat"]
batStr.match(dkRegex); // Returns ["bat"]
matStr.match(dkRegex); // Returns null


// Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegex2 = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
console.log(jennyStr.match(myRegex2)); //["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"]


// Match All Letters and Numbers  :  The \w shorcut is equal to [A-Za-z0-9_]. It matches upper and lowercase letters and numbers.
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true



// Match Everything But Letters and Numbers. \W searches for special characters, etc. and \w searches for letters and numbers
let shortHand = /\W/;  //  if this were a small w:  \w it would find letters and numbers, not special characters
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]


// Match Single Characters Not Specified with the carrot ^ symbol: (An easier way than this is /w)

let quoteSample = "3 blind mice!!";
let myRegex = /[^aeiou^0-9]/gi;   // Output:  !!
let result = quoteSample.match(myRegex); 



// Match All Numbers  Use the \d which is equal to [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // This will show how many digits are in movie titles.
let result = movieName.match(numRegex).length;



// Match Beginning String Patterns :  The carrot ^ can also search for pattersn at the beginning of strings
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);  // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);  // Returns false



// Match Ending String Patterns:  The $ character can search the end of strings.
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);  // Returns false




// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Output:  <h1>
let result = text.match(myRegex);








