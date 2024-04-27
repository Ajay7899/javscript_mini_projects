// current date , day and time 
const currentDate = document.getElementById("date")
const weekDays = new Array(7);
   weekDays[0] ="sunday";
   weekDays[1] ="monday";
   weekDays[2] ="tuesday";
   weekDays[3] ="wednesday";
   weekDays[4] ='thursday';
   weekDays[5] ="friday";
   weekDays[6] ="saturday";

const getCurrentDay = () =>{
   let currentTime = new Date();// creating instances of date object
   let day = weekDays[currentTime.getDay()];
   return day ;
};
const getCurrentTime =() =>{
   var months = new Array(12);
   months[0]="jan";
   months[1]="feb";
   months[2]="mar";
   months[3]="apr";
   months[4]="may";
   months[5]="jun";
   months[6]="jul";
   months[7]="aug";
   months[8]="sep";
   months[9]="oct";
   months[10]="nov";
   months[11]="dec";


   let now = new Date(); // creating instance
   let month =months[now.getMonth()];
   let date = now.getDate();

   let hours =now.getHours();
   let minutes =now.getMinutes();
   let period ="AM";
   
   if(hours > 11){
         period = "PM";
         if(hours > 12){
           hours -= 12;
         }
   }
   if(minutes < 10){
       minutes = "0" + minutes;
   }
   

   console.log(hours+":"+minutes)
   console.log(month+"/"+date)
   // console.log(months[now.getMonth()])
   return `${month} ${date} | ${hours}:${minutes} ${period}`
}

currentDate.innerHTML = getCurrentDay() +" "+ "|" +" " + getCurrentTime();
//  ending date ,date and time function here