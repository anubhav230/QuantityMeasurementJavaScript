class Volume {
    liter(value) {
        if(value == null) {
            return false;
        }
        return value;
    };

    gallon(value) {
        if(value == null) {
            return false;
        }
        return value * 3.78;  
    };

    milliliter(value) {
        if(value == null) {
            return false;
        }
        return value * 0.001;
    };

    AddVolume(value1, value2){
        return value1 + value2;
    }
}

module.exports = Volume;