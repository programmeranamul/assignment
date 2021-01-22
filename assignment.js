

// kilometerToMeter
function kilometerToMeter(km){
    //If user input a number value
    if(typeof km == "number"){
        //If User Input A Negative Value
        if( km < 0 ){
            return "Distance cannot be negative.";
        }
        //If User Input A Valid Value;
        else{
            var meter = km * 1000;
            return meter;
        } 
    }
    // If user try to input other type of value
    else{
        return "Distance can not be String or other. Input A number Value";
    }   
}
// var kilometer = kilometerToMeter(67.67);
// console.log(kilometer);


//budgetCalculator 
function budgetCalculator(watch, mobile, laptop){ 
    //If User Input A Number Value   
    if(typeof watch == "number" && typeof mobile == "number" && typeof laptop == "number"){
        // If User Input Negetive Or Floating Value, revised user Input
        var revisedWatch = Math.round(Math.abs(watch));   
        var revisedMobaile = Math.round(Math.abs(mobile));
        var revisedLaptop = Math.round(Math.abs(laptop));
        //make calculation
        var totalBudget = (revisedWatch * 50) + (revisedMobaile * 100) + (revisedLaptop * 500);
        return totalBudget; //retun function value
    }
    //If Your Try Input Not Number Value
    else{
        return " Please Input Number Value";
    }
}
// var budgetResult =  budgetCalculator(-4.5, 5.499, 7);
// console.log(budgetResult);


// hotelCost
function hotelCost(day){
    // If User Input A Number Value
    if(typeof day == "number"){
        var hotelBill = 0;
        var revisedDay = Math.ceil(day);//if user give floating number
        // If User Input A Negetive Value
        if(revisedDay < 0){
            return "The number of days cannot be negative. Input A Positive Number.";
        }
        //If User Stay 10-10 Days In hotel
        else if(revisedDay <= 10){
            hotelBill = revisedDay * 100;
        }
        //If User Stay 11-20 Days In hotel
        else if(revisedDay <= 20){
            var fristTenDayBill = 10 * 100;
            var remainingDay = revisedDay - 10;
            var secondTenDayBill = remainingDay * 80;
            hotelBill = fristTenDayBill + secondTenDayBill;
        }
        // If User Stay 21 or More Day
        else{
            fristTenDayBill = 10 * 100;
            secondTenDayBill = 10 * 80;
            remainingDay = revisedDay - 20;
            var afterTwentyDayBill = remainingDay * 50;
            hotelBill = fristTenDayBill + secondTenDayBill + afterTwentyDayBill;
        }    
        return hotelBill;
    }
    //If User Input Not A Number Value 
    else{
        return " Input Number Value";
    }
}
// var stayHotelDay = hotelCost(78);
// console.log(stayHotelDay);


//megaFriend
function megaFriend(names){ 
    // If User Input A Array   
   if(Array.isArray(names) == true){
        // If User Input A Empty Array
        if(names.length <= 0){
            return "Please Input Your Friend Name";
        }
        else{
            var largeName = "";
            for(var i = 0; i < names.length; i++){        
                if(largeName.length < names[i].length){
                    largeName = names[i];
                }
            }
            return largeName;
        }  
   }
   // If User Try to Input Name Without Array
   else{
       return " Input Your Friend Name In An Array";
   }
}
// var friendName = ["Rahim", "Karim", "Kader", "Saju", "Jhanker", "Anamul"];
// var megaFriendResult = megaFriend(friendName);
// console.log(megaFriendResult);






 