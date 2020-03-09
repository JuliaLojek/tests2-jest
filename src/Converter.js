export default class Converter {
    constructor (baseCurrency) {
        if (!["PLN", "EUR", "USD"].includes(baseCurrency)) {
            throw new Error("wrong currency");
        }
    }
}