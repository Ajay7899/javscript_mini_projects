function otpGenerate(){
    let otpShow = document.getElementById("otp");
    let digits ="0123456789";
    let otp="";
     
    // generate 4 digit otp
    for(let i=0;i < 4; i++)
    {
        otp += digits[Math.floor(Math.random()  *10)];
        //genrating random 4 digit by using Math object properties
    }
    // display loader
    otpShow.innerHTML ="<span></span>";

    // display otp after 1 sec
    setTimeout(() =>{
     otpShow.innerHTML = otp;
    },1000)
}

const button = document.getElementById("myButton");
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
})