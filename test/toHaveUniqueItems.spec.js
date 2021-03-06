require('../index');

describe("toHaveUniqueItems", function() {
    it("should accept Array in actual", function() {
        expect(function() {
            expect("test").not.toHaveUniqueItems();
        }).toThrowError("Actual is not Array")
    });

    it("should require empty expectation", function() {
        expect(function() {
            expect(["string"]).not.toHaveUniqueItems("string");
        }).toThrowError("Expectation doesn't needed")
    });

    it("should find duplicates", function () {
        expect([1,2,3,1]).not.toHaveUniqueItems();
    });

    it("should multiple duplicates", function() {
        expect([1,2,2,2,1]).not.toHaveUniqueItems();
    });

    it("passing test", function() {
        expect([1,2,3]).toHaveUniqueItems();
    })
});
