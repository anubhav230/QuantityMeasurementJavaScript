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
}

module.exports = Volume;