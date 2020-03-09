function hyphenCase(string) {
    if (typeof string !== 'string') {
        throw new Error('Parametr nie jest stringiem');
    }
    return string.split(' ').join('-');
}
// 1.
if (typeof hyphenCase === 'undefined') {
    throw new Error('Nie ma funkcji hyphenCase');
}
// 2.
const params = [1, {}, function test() {}, null];
params.forEach(param => {
    try {
         hyphenCase(param);
    } catch (error) {
        console.log('OK');
        return;
    }
    throw new Error('Funkcja nie rzuciła błędem.');
})
//3.
if (typeof hyphenCase('') !== 'string') {
    throw new Error('Funkcja nie zwraca stringa');
}
//4.
['string', 'pies', 'kot', 'costam'].forEach(word => {
    if (hyphenCase(word) !== word) {
        throw new Error('Funkcja nie zwraca podanego jej słowa');
    }
});
//5.
if (hyphenCase('Ala ma kota') !== 'Ala-ma-kota') {
    throw new Error('Ala nie ma kota.');
}