const assert = require('chai').assert;
const QuantityMeasurement = require('../src/QuantityMeasurement');
const lenght = new QuantityMeasurement();

describe('Quantity Measurement for lenght', () => {
    it('Given same quantity of feet should return equal', () => {
        let feetVlaue = lenght.feet(0.0);
        let feetVlaue2 = lenght.feet(0.0);
        assert.equal(feetVlaue, feetVlaue2);
    });

    it('Given 0 quantity of feet and inch should return equal', () => {
        let feetVlaue = lenght.feet(0.0);
        let inchVlaue = lenght.inch(0.0);
        assert.equal(feetVlaue, inchVlaue);
    });

    it('Given 1 feet and 12 inch should return equal', () => {
        let feetVlaue = lenght.feet(1.0);
        let inchVlaue = lenght.inch(12.0);
        assert.equal(feetVlaue, inchVlaue);
    });

    it('Given feet value as null should return false', () => {
        let result = lenght.feet(null);
        assert.isFalse(result);
    });

    it('Given inch value as null should return false', () => {
        let result = lenght.inch(null);
        assert.isFalse(result);
    });

    it('Given centimeter value as null should return false', () => {
        let result = lenght.centimeter(null);
        assert.isFalse(result);
    });

    it('Given yard value as null should return false', () => {
        let result = lenght.yard(null);
        assert.isFalse(result);
    });

    it('Given 3 feet and 1 yard should return equal', () => {
        let yardVlaue = lenght.yard(1);
        let feetVlaue = lenght.feet(3);
        assert.equal(yardVlaue, feetVlaue);
    });

    it('Given 1 feet and 1 yard should return not equal', () => {
        let yardVlaue = lenght.yard(1);
        let feetVlaue = lenght.feet(1);
        assert.notEqual(yardVlaue, feetVlaue);
    });

    it('Given 1 inch and 1 yard should return not equal', () => {
        let inchVlaue = lenght.inch(1);
        let yardVlaue = lenght.yard(1);
        assert.notEqual(inchVlaue, yardVlaue);
    });

    it('Given 1 yard and 36 inch should return not equal', () => {
        let inchVlaue = lenght.inch(36);
        let yardVlaue = lenght.yard(1);
        assert.equal(inchVlaue, yardVlaue);
    });
});