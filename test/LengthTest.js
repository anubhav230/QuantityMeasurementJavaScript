const assert = require('chai').assert;
const lengths = require('../src/Length');
const lenght = new lengths();

// Test cases for length
describe('Quantity Measurement for lenght', () => {
    it('Given same quantity of feet should return equal', () => {
        assert.equal(lenght.feetConverter(0.0), lenght.feetConverter(0.0));
    });

    it('Given 0 quantity of feet and inch should return equal', () => {
        assert.equal(lenght.feetConverter(0.0), lenght.inchConverter(0.0));
    });

    it('Given 1 feet and 12 inch should return equal', () => {
        assert.equal(lenght.feetConverter(1.0), lenght.inchConverter(12.0));
    });

    // passing null and check result
    it('Given feet value as null should return false', () => {
        assert.isNull(lenght.feetConverter(null));
    });

    it('Given inch value as null should return false', () => {
        assert.isFalse(lenght.inchConverter(null));
    });

    it('Given centimeter value as null should return false', () => {
        assert.isFalse(lenght.centimeterConverter(null));
    });

    it('Given yard value as null should return false', () => {
        assert.isFalse(lenght.yardConverter(null));
    });

    //comparing different length units
    it('Given 3 feet and 1 yard should return equal', () => {
        assert.equal(lenght.yardConverter(1), lenght.feetConverter(3));
    });

    it('Given 1 feet and 1 yard should return not equal', () => {
        assert.notEqual(lenght.yardConverter(1), lenght.feetConverter(1));
    });

    it('Given 1 inch and 1 yard should return not equal', () => {
        assert.notEqual(lenght.inchConverter(1), lenght.yardConverter(1));
    });

    it('Given 1 yard and 36 inch should return equal', () => {
        assert.equal(lenght.inchConverter(36), lenght.yardConverter(1));
    });

    it('Given 2 inch and 5 centimeter should return equal', () => {
        assert.equal(lenght.inchConverter(2), lenght.centimeterConverter(5));
    });

    // Adding different length units
    it('Given 2 inch and 2 inch when added should return expected result', () => {
        assert.equal(lenght.Addlength(lenght.inchConverter(2), lenght.inchConverter(2)), 4);
    });

    it('Given 1 feet and 2 inch when added should return expected result', () => {
        assert.equal(lenght.Addlength(lenght.feetConverter(1), lenght.inchConverter(2)), 14);
    });

    it('Given 1 feet and 1 feet when added should return expected result', () => {
        assert.equal(lenght.Addlength(lenght.feetConverter(1), lenght.feetConverter(1)), 24);
    });

    it('Given 1 inch and 2.5 centimeter when added should return expected result', () => {
        assert.equal(lenght.Addlength(lenght.inchConverter(2), lenght.centimeterConverter(2.5)), 3);
    });
});