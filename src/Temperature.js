class Temperature {
    /**
     * function for returning fahrenheit result
     * @param {*} fahrenheit 
     */
    fahrenheit = (fahrenheit) => {
        return fahrenheit;
    }
    /**
     * function for converting celsius in to fahrenheit
     * @param {*} celsius 
     */
    celsius = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }
}

module.exports = Temperature;