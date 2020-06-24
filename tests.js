// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//function sayHello()
describe("sayHello",function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!'when called", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!'when called", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!'when called", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("(),should return 'Hello, World!'when called", function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("(true)should return 'Hello, World!'when called", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("(false)should return 'Hello, World!'when called", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('(null)should return "Hello, World!" when called', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('("")should return "Hello, World!" when called', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('(2.3)should return "Hello, World!" when called', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("('5')should return 'Hello, World!'when called", function(){
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it("(array)should return 'Hello, World!'when called", function(){
        expect(sayHello([1,2,3])).toBe("Hello, World!");
    });
});

//isFive
describe("isFive",function(){
    it("should be a defined function", function(){
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when called", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it("(5)should return true when called", function() {
        expect(isFive(5)).toBe(true);
    });
    it("('5')should return true when called", function() {
        expect(isFive("5")).toBe(true);
    });
    it("('-5')should return false when called", function() {
        expect(isFive("-5")).toBe(false);
    });
    it("('ni')should return false when called", function() {
        expect(isFive("ni")).toBe(false);
    });
    it("(0)should return false when called", function() {
        expect(isFive(0)).toBe(false);
    });


});

//isEven
describe("isEven",function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean when called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("(2)should return true when called", function() {
        expect(isEven(2)).toBe(true);
    });
    it("(-4)should return true when called", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("(3)should return false when called", function() {
        expect(isEven(3)).toBe(false);
    });
    it("('banana')should return false when called", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("('8')should return true when called", function() {
        expect(isEven("8")).toBe(true);
    });
    it("(Infinity)should return false when called", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("(true)should return false when called", function() {
        expect(isEven(true)).toBe(false);
    });
    it("(false)should return false when called", function() {
        expect(isEven(false)).toBe(false);
    });
    it("()should return false when called", function() {
        expect(isEven()).toBe(false);
    });
    it("('')should return false when called", function() {
        expect(isEven('')).toBe(false);
    });
});