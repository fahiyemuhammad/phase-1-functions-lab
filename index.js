// Code you[r solution in this file!
let location = Number(prompt("Enter the distance from Headquaters in blocks"))

function distanceFromHqInBlocks(location){
if(location > 42){
    return location - 42
}else if(location < 42){
    return 42 - location
}else {
    return "You have arrived at the Headquaters"
}
}
const dis_in_blocks = distanceFromHqInBlocks
function distanceFromHqInFeet(location){
    if (location < 42){
     return  (42 * 264 - location * 264) 
    } else if (location > 42){
        return  (location * 264 - 42 * 264 ) 
    }
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

