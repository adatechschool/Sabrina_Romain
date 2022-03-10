let tripToParse = "Perdita 8 10 8";

let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

function parseTrips(trips) {
    let array = [];
    trips.forEach(trip => {
        let titu = parseTrip(trip)
        array.push(titu);
    })
    return array;
}

function parseTrip(mamamama) {
    var detail = new Object();
    const tripSplit = mamamama.split(' ');
    detail.client = tripSplit[0];
    detail.departure = tripSplit[1];
    detail.duration = tripSplit[2];
    detail.price = tripSplit[3];
    return detail;
}

console.log(parseTrip(tripToParse));
parseTrips(tripsToParse)