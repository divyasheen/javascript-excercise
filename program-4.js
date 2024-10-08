function revertSnakeCase(str) {
    var words = str.split('_');
    var revertedStr = words.join('');

                    
    return revertedStr;
}

var givenValue = 'first_name';
var output = revertSnakeCase(givenValue);
console.log(output);