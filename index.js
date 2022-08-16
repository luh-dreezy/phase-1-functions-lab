function distanceFromHqInBlocks(location) {
    let numOfBlocksFromScuberHQ;
    if (location < 43) {
        numOfBlocksFromScuberHQ = 43- location;
    }else {
        numOfBlocksFromScuberHQ = location - 43;
    }

    return numOfBlocksFromScuberHQ;
}


function distanceFromHqInBlocks(locationInFeet) {
    let numOfBlocksFromScuberHQInfeet = distanceFromHqInBlocks(locationInFeet);
    return numOfBlocksFromScuberHQInfeet * 264;
}


function distanceFromHqInBlocksInfeet(start,destination){
     let numOfBlocksFromScuberHQInfeet;
     if (start < destination) {
        numOfBlocksFromScuberHQInfeet = (destination - start) * 264;

     }else{
        numOfBlocksFromScuberHQInfeet = (start - destination) * 264;
     }
     return numOfBlocksFromScuberHQInfeet;

    }



function calculatesFarePrice(start, destination){
    let customerDistance = distanceTravelledInFeet(start,destination);
    let customerFare
    if (customerDistance < 500){
        customerFare= customerDistance *0;
        return customerFare;


    }else if (customerDistance < 2500) {
        let customerDistance2 = customerDistance - 500;
        customerFare= (customerDistance2 * 2) / 100 ;
        return customerFare;

    }else if (customerDistance < 2500){
        let additionalCharge = 25;
        return additionalCharge;

    }else {
        return 'cannot travel that far';
    }
}



// console.log(distanceFromHqInBlocks(43));
//console.log(distanceFromHqInFeet(43));
//console.log(distanceTravelledInFeet(25,33));
console.log(calculatesFarePrice(25,33));