import Converter from "./Converter";

test("testing if converter exists", () => {
    expect(typeof Converter).toEqual("function");
});
test("testing if converter's parameter is PLN, EUR or USD", () => {
    const params = ["GBP", "ISK", "CHF"];
    params.forEach(param => {
        expect(() => {
            new Converter(param);
        }).toThrow();
    });
});
test("testing if convert method exists", () => {
    const converter = new Converter("PLN");
    expect(typeof converter.convert).toEqual("function");
});