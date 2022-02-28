import React from 'react';
export default function calculateBooking(date, time, dur){

    const myDate= new Date(date); 
    let day=myDate.getDay();
    let myCost=0; 
    if (day == 0 || day == 6){
        myCost=150;
    } 
    else{
        myCost=100;
    }

    const timeSplit= time.split(":");
    let endHour= parseInt(timeSplit[0]);
    endHour+=parseInt(dur);
    let endTime= endHour + timeSplit[1];

    let myBooking= date + ' ' + time + '-' + endTime; //TODO make it AM PM
    
    return( {
        booking: myBooking,
        cost: myCost
    }
    );
} 