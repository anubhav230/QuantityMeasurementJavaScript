const assert = require('chai').assert;
const QuantityMeasurement = require('../src/QuantityMeasurement');
const lenght = new QuantityMeasurement();
describe('Quantity Measurement for lenght', () => {
    it('Given same quantity of feet should return equal', () => {
        let feet1 = lenght.feet(1.0);
        let feet2 = lenght.inch(12.0);
        assert.equal(feet1, feet2);
    });
});