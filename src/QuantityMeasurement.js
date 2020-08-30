class QuantityMeasurement{
   feet(value){
       return value*12;
   };
   
   inch(value){
       return value;
   };

   yard(value){
       return value*36
   };

   centimeter(value){
    return value*0.4;
   }
}

module.exports = QuantityMeasurement;