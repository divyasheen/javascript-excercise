// Exercise 1
const str = "Hello World";
const position = str.indexOf("World");
console.log(position);

// Exercise 2
const replacedStr = str.replace("World", "Universe");
console.log(replacedStr);

// Exercise 3
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// Exercise 4
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);

// Exercise 5
const hello = "Hello";
const world = "World";
const joinedStr = hello.concat(" ", world);
console.log(joinedStr);

// Exercise 6
const cities = "Rome,Berlin,Paris";
const berlin = cities.substring(5, 11);
console.log(berlin);

const berlinParis = cities.substring(5).replace(",", " ");
console.log(berlinParis);

// Exercise 7
const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were: ${a}, ${b} and ${c}.`;
console.log(template);

// Exercise 8
const str2 = "whatTheOMGnicCAGEtadahheHIDINGinHere";
const index = str2.indexOf("Nic Cage");
console.log(index);

// Exercise 9
/*  substr()

    Purpose: Extracts a substring based on a starting position and a length.

    Syntax: string.substr(start, length)
    substring()

    Purpose: Extracts a substring between two specified indices.

    Syntax: string.substring(startIndex, endIndex)
    slice()

    Purpose: Extracts a substring based on a starting and an optional ending index.

    Syntax: string.slice(startIndex, endIndex)
        startIndex: The index where the extraction begins (can be negative).
        endIndex: The index where the extraction ends (optional, and exclusive).
*/
// Exercise 10
const planet = 'earth';
const nameCapitalized = planet.charAt(0).toUpperCase() + planet.slice(1);
console.log(nameCapitalized);

// Exercise 11
const testString2 = "  I love this stuff  ";
const trimmedString = testString2.trim();
console.log(trimmedString);