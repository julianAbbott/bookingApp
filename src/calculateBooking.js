import React from 'react';
export default function calculateBooking(date, time, dur){

    const myDate= new Date(date); 
    let day=myDate.getDay();
    console.log(day);
    let myCost=0; 
    if (day == 5 || day == 6){
        myCost=150;
    } 
    else{
   
        myCost=100;
    }

    const timeSplit= time.split(":");
    let endHour= parseInt(timeSplit[0]);
    endHour+=parseInt(dur);

    let endTime = toTwelverHr(endHour + ":" + timeSplit[1]);
    let startTime = toTwelverHr(time);

    let myBooking= date + ' ' + startTime + '-' + endTime; //TODO make it AM PM
    
    return( {
        booking: myBooking,
        cost: myCost
    }
    );
}

function toTwelverHr(date){
    let dateSplit = date.split(":");
    let dateAMPM = dateSplit[0] < 12 ? "AM" : "PM";
    let hour = dateSplit[0] == 12 ? 12 : dateSplit[0]%12;
    return hour + ":" + dateSplit[1] + dateAMPM;
}
