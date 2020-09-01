const assert = require('chai').assert;
const temperature = require('../src/Temperature');
const temperatur = new temperature();

describe('Measurement for temperature', () => {
    it('Given 100 Celsius When converted in Fahrenheit should return expected result', () => {
        assert.equal(temperatur.Celsius(100), temperatur.Fahrenheit(212));
    });
});
