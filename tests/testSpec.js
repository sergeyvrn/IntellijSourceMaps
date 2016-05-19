describe('ES6', function () {
    it('should understand arrow functions', function () {
        const myFunction = () => 1;
        expect(myFunction()).toBe(1);
    });
    it('should support array destructuring', function () {
        const [a,b] = [1,2];
        expect(a).toBe(1);
        expect(b).toBe(2);
    });
    it('should support template literals', function () {
        const one = 1;
        const string = `${one}`;
        expect(string).toBe('1');
    });
});