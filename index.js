// Code your solution in this file!
//Answers already here?

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  
  return function(fare){
    return fare * multiplier;  
  };
};

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare); 
}; 

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare);
};

const selectDifferentDrivers = function(drivers, pickingFunction){
  return pickingFunction(drivers);
}