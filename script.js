// get the date from the input field


// start the countdown
function start() {
   
    var countDownDate = new Date(document.getElementById("birthday").value).getTime()
    let date = new Date()
    if(countDownDate<date){
        alert ("Date is expired")
    }
         
return countDownDate

    // Set the date we're counting down to
    
    // Update the count down every 0.1 second
    
        // Get today's date and time
       
        // Find the distance between now and the count down date
      
        // Time calculations for days, hours, minutes and seconds

        // Output the result in an element with id="demo"

        // If the count down is over, write some text 
    
            }
   setInterval("showDate()",1000)

function showDate(){
    countdownDate=start()
    var now=new Date();
    var timedistance= countdownDate-now
    var days=Math.floor(timedistance/1000/60/60/24)

    var hours=Math.floor(timedistance%(1000*60*60*24)/1000/60/60)
    
    var minutes=Math.floor(timedistance%(1000*60*60)/1000/60)
    var seconds= Math.floor(timedistance%(1000*60)/1000)
    var dicsecs = Math.floor((timedistance % 1000) / 100)
   

   
        document.getElementById("demo").innerHTML = days + "days " + hours + "hrs "
        + minutes + "mins " + seconds + "secs " + dicsecs+"dicsecs";
     ins
    
 if(timedistance<0){
    document.getElementById("demo").innerHTML ="Date is expired"
}
}

        

        

