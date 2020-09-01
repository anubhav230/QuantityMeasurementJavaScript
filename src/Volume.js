class Volume {
    /**
     * function for literConverter
     * @param {*} value 
     */
    literConverter(value) {
        if(value == null) {
            return false;
        }
        return value;
    };
    /**
     * function for gallonConverter
     * @param {*} value 
     */
    gallonConverter(value) {
        if(value == null) {
            return false;
        }
        return value * 3.78;  
    };
    /**
     * function for milliliterConverter
     * @param {*} value 
     */
    milliliterConverter(value) {
        if(value == null) {
            return false;
        }
        return value * 0.001;
    };
    /**
     * function for adding two volume units
     * @param {*} value1 
     * @param {*} value2 
     */
    AddVolume(value1, value2){
        return value1 + value2;
    }
}

module.exports = Volume;