class Weight{

    kilogram(value){
        if(value == null) {
            return false;
        }
        return value;
    }

    grams(value){
        if(value == null) {
            return false;
        }
        return value * 0.001;
    }

    tonne(value){
        if(value == null) {
            return false;
        }
        return value * 1000.0;
    }
}

module.exports = Weight;