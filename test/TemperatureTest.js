const assert = require('chai').assert;
const temperature = require('../src/Temperature');

describe('Measurement for temperature', () => {

    var temperatur;
    before(function () {
        temperatur = new temperature();
    });

    it('Given temperatur value as null should return null', () => {
        assert.isNull(temperatur.fahrenheit(null));
    });

    it('Given 100 Celsius When converted in Fahrenheit should return expected result', () => {
        assert.equal(temperatur.celsius(100), temperatur.fahrenheit(212));
    });
});
 