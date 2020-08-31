const assert = require('chai').assert;
const lengths = require('../src/Length');
const volumes = require('../src/Volume');
const weights = require('../src/Weight');
const lenght = new lengths();
const volume = new volumes();
const weight = new weights();

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

    it('Given 1 yard and 36 inch should return equal', () => {
        let inchVlaue = lenght.inch(36);
        let yardVlaue = lenght.yard(1);
        assert.equal(inchVlaue, yardVlaue);
    });

    it('Given 2 inch and 5 centimeter should return equal', () => {
        let inchVlaue = lenght.inch(2);
        let centimeterVlaue = lenght.centimeter(5);
        assert.equal(inchVlaue, centimeterVlaue);
    });

    it('Given 2 inch and 2 inch when added should return expected result', () => {
        let inchVlaue = lenght.Addlength(lenght.inch(2), lenght.inch(2));
        assert.equal(inchVlaue, 4);
    });

    it('Given 1 feet and 2 inch when added should return expected result', () => {
        let result = lenght.Addlength(lenght.feet(1), lenght.inch(2));
        assert.equal(result, 14);
    });

    it('Given 1 feet and 1 feet when added should return expected result', () => {
        let result = lenght.Addlength(lenght.feet(1), lenght.feet(1));
        assert.equal(result, 24);
    });

    it('Given 1 inch and 2.5 centimeter when added should return expected result', () => {
        let result = lenght.Addlength(lenght.inch(2), lenght.centimeter(2.5));
        assert.equal(result, 3);
    });
});    

describe('Quantity Measurement for volume', () => {
    it('Given 1 gallon and 3.78 liters when compared should return equal result ', () => {
        let result1 = volume.gallon(1);
        let result2 = volume.liter(3.78);
        assert.equal(result1, result2)
    });

    it('Given 1 liter and 1000 milliliter when compared should return equal result ', () => {
        let result1 = volume.liter(1);
        let result2 = volume.milliliter(1000);
        assert.equal(result1, result2)
    });

    it('Given gallon value as null should return false', () => {
        let result1 = volume.gallon(null);
        assert.isFalse(result1)
    });

    it('Given liter value as null should return false', () => {
        let result1 = volume.liter(null);
        assert.isFalse(result1)
    });

    it('Given milliliter value as null should return false', () => {
        let result1 = volume.milliliter(null);
        assert.isFalse(result1)
    });

    it('Given 1 gallon and 3.78 liter when added should return expected result ', () => {
        let result = volume.AddVolume(volume.gallon(1), volume.liter(3.78))
        assert.equal(result, 7.56)
    });

    it('Given 1 liter and 1000 milliliter when added should return expected result ', () => {
        let result = volume.AddVolume(volume.liter(1), volume.milliliter(1000))
        assert.equal(result, 2)
    }); 
});

describe('Quantity Measurement for weights',() => {
    it('Given tonne value as null should return false', () => {
        let result1 = weight.tonne(null);
        assert.isFalse(result1)
    });

    it('Given kilogram value akilograms null should return false', () => {
        let result1 = weight.kilogram(null);
        assert.isFalse(result1)
    });

    it('Given grams value as null should return false', () => {
        let result1 = weight.grams(null);
        assert.isFalse(result1)
    });

    it('Given 1 kilogram and 1000 gram when compared should return equal result ', () => {
        let result1 = weight.kilogram(1);
        let result2 =  weight.grams(1000);
        assert.equal(result1, result2)
    });
    
    it('Given 1 tonne and 1000 kilogram when compared should return equal result ', () => {
        let result1 = weight.tonne(1);
        let result2 =  weight.kilogram(1000);
        assert.equal(result1, result2)
    });
});