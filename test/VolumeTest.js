const assert = require('chai').assert;
const volumes = require('../src/Volume');
const volume = new volumes();
describe('Quantity Measurement for volume', () => {
    it('Given 1 gallon and 3.78 liters when compared should return equal result ', () => {
        assert.equal(volume.gallonConverter(1), volume.literConverter(3.78))
    });

    it('Given 1 liter and 1000 milliliter when compared should return equal result ', () => {
        assert.equal(volume.literConverter(1), volume.milliliterConverter(1000))
    });

    // passing null and check result
    it('Given gallon value as null should return false', () => {
        assert.isFalse(volume.gallonConverter(null))
    });

    it('Given liter value as null should return false', () => {
        assert.isFalse(volume.literConverter(null))
    });

    it('Given milliliter value as null should return false', () => {
        assert.isFalse(volume.milliliterConverter(null))
    });

    // Adding different volume units
    it('Given 1 gallon and 3.78 liter when added should return expected result ', () => {
        assert.equal(volume.AddVolume(volume.gallonConverter(1), volume.literConverter(3.78)), 7.56)
    });

    it('Given 1 liter and 1000 milliliter when added should return expected result ', () => {
        assert.equal(volume.AddVolume(volume.literConverter(1), volume.milliliterConverter(1000)), 2)
    });
});