const assert = require('chai').assert;
const weights = require('../src/Weight');
const weight = new weights();

describe('Quantity Measurement for weights', () => {
    // passing null and check result
    it('Given tonne value as null should return false', () => {
        assert.isFalse(weight.tonneConverter(null))
    });

    it('Given kilogram value akilograms null should return false', () => {
        assert.isNull(weight.kilogramConverter(null))
    });

    it('Given grams value as null should return false', () => {
        assert.isFalse(weight.gramsConverter(null))
    });

    it('Given 1 kilogram and 1000 gram when compared should return equal result ', () => {
        assert.equal(weight.kilogramConverter(1), weight.gramsConverter(1000))
    });

    it('Given 1 kilogram should return a number value ', () => {
        assert.isNumber(weight.kilogramConverter(1))
    });

    it('Given 1 tonne and 1000 kilogram when compared should return equal result ', () => {
        assert.equal(weight.tonneConverter(1), weight.kilogramConverter(1000))
    });

    // Adding different volume units
    it('Given 1 tonne and 1000 gram when added should return expected result ', () => {
        assert.equal(weight.addWeight(weight.tonneConverter(1), weight.gramsConverter(1000)), 1001)
    });
});