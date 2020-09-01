class Weight{
    /**
     * function for kilogramConverter
     * @param value 
     */
    kilogramConverter(value){
        if(value == null) {
            return null;
        }
        return value;
    }
    /**
     * function for gramsConverter
     * @param value 
     */
    gramsConverter(value){
        if(value == null) {
            return false;
        }
        return value * 0.001;
    }

    /**
     * function for tonneConverter
     * @param value 
     */
    tonneConverter(value){
        if(value == null) {
            return false;
        }
        return value * 1000.0;
    }
    /**
     * function for addinf weight units
     * @param value1 
     * @param value2 
     */
    addWeight(value1, value2){
        return value1 + value2
    }
}

module.exports = Weight;