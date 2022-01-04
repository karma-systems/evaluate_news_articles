import urlChecker from "../src/client/js/checkURL"

describe('Test, urlChecker function must be exist', () => {
    test('should return true', () => {
        expect(urlChecker).toBeDefined();
    });
});
describe('Test, urlChecker function must be a function', () => {
    test('should be a function', () => {
        expect(typeof urlChecker).toBe("function");
    });
});