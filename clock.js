function updateClock(){
    // Get the current date
    let currentTime=new Date();

    // Extract hour, minute and seconds from the date
    let currentSec=currentTime.getSeconds();
    let currentMin=currentTime.getMinutes();
    let currentHour=currentTime.getHours();

    // Pad 0 if minute or second is less than 10 (single digit)
    currentMin=(currentMin<10?"0":"")+currentMin;
    currentSec=(currentSec<10?"0":"")+currentSec;

    // Convert railway clock to AM/PM clock
    currentHour=(currentHour>12)?currentHour-12:currentHour;
    currentHour=(currentHour==0)?12:currentHour;

    // Choose AM/PM as per the time of the day
    let timeOfDay=(currentHour<12)?"AM":"PM";

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr=currentHour+":"+currentMin+":"+currentSec+" "+timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML=currentTimeStr;
}