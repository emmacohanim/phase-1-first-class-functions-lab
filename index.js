// Code your solution in this file!
const returnFirstTwoDrivers = function (driverNames) {
        return driverNames.slice(0,2)
        // or [driverNames[0], driverNames[1]]
}

const returnLastTwoDrivers = function(driverNames) {
        return driverNames.slice(-2)
        // counts backwards from last driver
    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// invoke
// selectingDrivers[]()

function createFareMultiplier(num) {
    
    return function (fare) {
        // fare is considered 'closure'
        // -when createFareMultiplier is called, function that is returned has num HARDCODED to 4
        return num * fare
    }
    /*
    used to create fare multiplier FUNCTIONS
    i.e. const quadrupler = createFareMultiplier(4)
    can then pass any argument through quadrupler */
}

const fareDoubler = function fareDoubler(fare) { /*function returned by createFareMultiplier*/ 
        return fare * 2
    }

const fareTripler = function fareTripler(fare) {/*function returned by createFareMultiplier*/
        return fare * 3
    }

function selectDifferentDrivers(arrayOfDrivers, returnDrivers) {
    return returnDrivers(arrayOfDrivers)
}