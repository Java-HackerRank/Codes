function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    for(let i=0;i<s.length;i++)
        isVowelOrConsonant(s[i]) == 1 ? vowels += s[i] : consonants += s[i];

    vowels += consonants;
    
    for(let i=0;i<vowels.length;i++)
        console.log(vowels[i]);
}

function isVowelOrConsonant(letter){
    let vowels = new Set(["a","e","i","o","u"]);
    return vowels.has(letter) ? 1 : 0;
}


function main() {
    const s = 'javascriptloops';
    vowelsAndConsonants(s);
}

main();