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
    it("('-5')should return true when called", function() {
        expect(isFive("-5")).toBe(false);
    });
    it("('ni')should return true when called", function() {
        expect(isFive("ni")).toBe(false);
    });
    it("(0)should return true when called", function() {
        expect(isFive(0)).toBe(false);
    });

});