import handleSubmit from "../src/client/js/handleSubmit";

describe('Test, handleSubmit function must be exist', () => {
    test('should return true', () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, handleSubmit function must be a function', () => {
    test('should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});