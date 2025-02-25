export function repeatWord(word, count) {
    let arr = [];

    for (let i = 1; i <= count; i += 1) {
        arr.push(`${word}${i}`)
    }

    return arr.join(', ');
}

console.log(repeatWord("слово", 3));
