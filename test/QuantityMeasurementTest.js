const assert = require('chai').assert;
const QuantityMeasurement = require('../src/QuantityMeasurement');
const lenght = new QuantityMeasurement();

describe('Quantity Measurement for lenght', () => {
    it('Given same quantity of feet should return equal', () => {
        let feet1 = lenght.feet(0.0);
        let feet2 = lenght.feet(0.0);
        assert.equal(feet1, feet2);
    });

    it('Given 0 quantity of feet and inch should return equal', () => {
        let feet1 = lenght.feet(0.0);
        let feet2 = lenght.inch(0.0);
        assert.equal(feet1, feet2);
    });

    it('Given 1 feet and 12 inch should return equal', () => {
        let feet1 = lenght.feet(1.0);
        let feet2 = lenght.inch(12.0);
        assert.equal(feet1, feet2);
    });
});