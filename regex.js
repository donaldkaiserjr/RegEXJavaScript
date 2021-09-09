//####################RegEX#######################  FreeCodeCamp.com Lessons


// g flag:  To search or extract a pattern more than once, you can use the 'g' flag.


// ex:   let repeatRegex = /Repeat/g;
          let testStr = "Repeat, Repeat, Repeat";
          let ourRegex = /Repeat/g;
          testStr.match(repeatRegex);
          And here match returns the value ["Repeat", "Repeat", "Repeat"]


// i flag:  ignore case.  


// ^ symbol: ^ (carrot) creates a set of characters that you DON'T want to match. Place a caret character (^) after the opening bracket and before the 
//          characters you do not want to match. For example, /[^aeiou]/gi matches all characters that are not a vowel
//          It can also search for patterns at the beginning of strings.


          let firstString = "Ricky is first and can be found.";
          let firstRegex = /^Ricky/;
          firstRegex.test(firstString);
          let notFirst = "You can't find Ricky now.";
          firstRegex.test(notFirst);



// $ symbol:  search the end of strings 
          let theEnding = "This is a never ending story";
          let storyRegex = /story$/;
          storyRegex.test(theEnding); // This would return true because 'story' is at the end of the string. 


// + symbol: The plus finds if something occurs 1 or more times consecutively. Like in "mississippi";  
          let difficultSpelling = "Mississippi";
          let myRegex = /s+/gi; // Change this line
          let result = difficultSpelling.match(myRegex);


// * symbol:  similar to the + flag. But this finds if something occurs ZERO or more times. 



//  /abc/	A sequence of characters
//  /[abc]/	Any character from a set of characters
//  /[^abc]/	Any character not in a set of characters
//  /[0-9]/	Any character in a range of characters



//  /x+/	One or more occurrences of the pattern x
//  /x+?/	One or more occurrences, nongreedy
//  /x*/	Zero or more occurrences
//  /x?/	Zero or one occurrence
//  /x{2,4}/	Two to four occurrences:  
                    to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
                    
                    
//  /(abc)/	A group
//  /a|b|c/	Any one of several patterns

  
                    
//  /\d/	The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0 - 9], which looks for a single 
//        character of any number between zero and nine.

                    
//  /\D/	Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]. 
//        For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".

// /\W/   Matches any character that is not a word character from the basic Latin alphabet. 
//        Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and "É" in "Émanuel".

// /\w/	This shortcut is equal
//        to[A - Za - z0 -9_]. This character class matches upper and lowercase letters plus numbers.
//        Note, this character class also includes the underscore character(_).


// /\s /	Looks for whtiespace.  Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. 
//        Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, /\s\w*/ matches " bar" in "foo bar".

                    
//  /\S/	Matches NON white space characters. Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. 
//        For example, /\S\w*/ matches "foo" in "foo bar".

                    
//  /./	Any character except newlines
//  /\b/	A word boundary
//  /^/	Start of input
//  /$/	End of input


                    
// \t	Matches a horizontal tab.
// \r	Matches a carriage return.
// \n	Matches a linefeed.
// \v	Matches a vertical tab.
// \f	Matches a form-feed.
// [\b]	Matches a backspace. If you're looking for the word-boundary character (\b), see Assertions.
// \0	Matches a NUL character. Do not follow this with another digit.

     
                                  
// \cX	Matches a control character using caret notation, where "X" is a letter from A–Z (corresponding to codepoints U+0001–U+001A). For example, /\cM\cJ/ matches "\r\n".

                    
// \xhh	Matches the character with the code hh (two hexadecimal digits).
// \uhhhh	Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).
// \u{hhhh} or \u{hhhhh}	(Only when the u flag is set.) Matches the character with the Unicode value U+hhhh or U+hhhhh (hexadecimal digits).
// \p{UnicodeProperty}, \P{UnicodeProperty}	Matches a character based on its Unicode character properties (to match just, for example, emoji characters, or Japanese katakana characters, or Chinese/Japanese Han/Kanji characters, etc.).


                    
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



//Match All Non-Numbers  Use \D to look for only numbers. This is equal to [^0-9], which is non numbers due to the carrot symbol.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // This will show how many characters (non numbers) are in movie titles.
let result = movieName.match(noNumRegex).length;


// Match Beginning String Patterns :  The carrot ^ can also search for patterns at the beginning of strings
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



// Use the + sign to look for one or more characters and the asterisk * to look for zero or more characters.

// Specify Upper and Lower Number of Matches:  
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;   //to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false



// Specify Only the Lower Number of Matches
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;  // to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/  Notice the comma in the regex.
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true


// Specify Exact Number of Matches
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;  //to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/. Notice this one has no comma.
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false


// Check for All or None
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;  //there are slight differences in American and British English and you can use the question mark to match both spellings.
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true


// Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;   //This looks ahead for the letter 'u' after q. 
let qRegex = /q(?!u)/;   // This looks for no letter 'u' after q.
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]



// Check For Mixed Grouping of Characters
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);   // Returns true




// Example 2 of Check for Mixed Grouping of Characters
// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;  //Use .* to allow for middle names.
let result = myRegex.test(myString);



// Reuse Patterns Using Capture Groups
// You can search for repeat substrings using capture groups. 
// Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]  ------Using the .match() method on a string will return an array with the string it matches, along with its capture group.



// Use Capture Groups to Search and Replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");// Returns "The sky is blue."
//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"




// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // 
let result = hello.replace(wsRegex, ""); // 



// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Output:  <h1>
let result = text.match(myRegex);



// Match Whitespace   using \s
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // Returns [" ", " "]



// Match Non-Whitespace Characters   using \S
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32



// Restrict Possible Usernames
/* 


Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1)  Usernames can only use alpha-numeric characters.
2)  The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3)  Username letters can be lowercase and uppercase.
4)) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.


*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);
