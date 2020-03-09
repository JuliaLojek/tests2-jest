function hyphenCase(string) {
    if (typeof string !== 'string') {
        throw new Error('Parametr nie jest stringiem');
    }
    return string.split(' ').join('-');
}


test("testing if hyphenCase exists", () => {
    expect(typeof hyphenCase).toEqual("function");
});
test("testing if hyphenCase throws an error if a parameter is not a string", () => {
    const params = [1, {}, function test() {}, null];
    params.forEach(param => {
        expect(() => {
            hyphenCase(param);
        }).toThrow();
    });
});
test("testing if hyphenCase returns an empty string", () => {
    expect(hyphenCase("")).toEqual("");
});
test("testing if hyphenCase returns an argument if it is a single word", () => {
    ['string', 'pies', 'kot', 'costam'].forEach(word => {
        expect(hyphenCase(word)).toEqual(word);
    });
});
test("testing if hyphenCase returns a hyphened string", () => {
    expect(hyphenCase("Ala ma kota")).toEqual("Ala-ma-kota");
});