// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    // block === 264 ft
    return 264 * distanceFromHqInBlocks(pickupLocation);
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    let fare = 0;
    let distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceFeet < 400) {
        fare = 0;
    } else if (distanceFeet >= 400 && distanceFeet <= 2000) {
        fare = (distanceFeet - 400) * .02;
    } else if (distanceFeet > 2000 && distanceFeet <=2500) {
        fare = 25;
    } else if (distanceFeet > 2500) {
        fare = "cannot travel that far";
    }
    return fare;
}