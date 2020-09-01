class length{
    /**
     * function for feetConverter
     * @param {*} value 
     */
    feetConverter=(value)=>{
       if(value == null)
       return null;
       return value*12;
    };
    /**
     * function for inchConverter
     * @param {*} value 
     */
    inchConverter=(value)=>{
        if(value == null)
        return false;
       return value;
    };
    /**
     * function for yardConverter
     * @param {*} value 
     */
    yardConverter=(value)=>{
        if(value == null)
        return false;
       return value*36
    };
    /**
     * function for centimeterConverter
     * @param {*} value 
     */
    centimeterConverter=(value)=>{
        if(value == null)
        return false;
        return value*0.4;
    }
    /**
     * function for adding two length units
     * @param {*} value1 
     * @param {*} value2 
     */
    Addlength=(value1, value2)=>{
        return value1 + value2;
    }
}

module.exports = length;