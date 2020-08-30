class QuantityMeasurement{
    feet(value){
       if(value == null)
       return false;
       return value*12;
    };
   
    inch(value){
        if(value == null)
        return false;
       return value;
    };

    yard(value){
        if(value == null)
        return false;
       return value*36
    };

    centimeter(value){
        if(value == null)
        return false;
        return value*0.4;
    }
}

module.exports = QuantityMeasurement;