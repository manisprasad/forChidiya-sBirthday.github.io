const finalDateParts = "28/10/2023 23:59:59".split(/[\s:\/]+/);
let head1 = document.getElementsByTagName("header")[0];
setTimeout(() => {
  head1.style.position = "relative";
  head1.style.top = "0%";
}, 4200);
    let card = document.querySelector(".card");
    let day = document.querySelector(".day");
    let hour = document.querySelector(".hour");
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let start = document.querySelector(".started");
    let aler_message = document.querySelector(".alert_message");

    let currentDate = new Date();
	console.log(currentDate.getDate())
    if (currentDate.getDate() >= 24) {
      card.innerHTML = "<p>Today is Someone's <span>Birthday</span></p>";
    }
    start.addEventListener("click", () => {
        if (currentDate.getDate() >= 24) {
           
            
            start.innerHTML = '<a href="effect.html">Happy Birthday</a>';
            start.classList.add("react");
            setTimeout(() => {
                start.style.background = "red";
                start.innerHTML = '<a href="effect.html">Click again</a>';
            }, 3000);
        } else {
            aler_message.innerHTML = "There are still some time left in your birthday. Dude 🖐️";
            aler_message.style.background = "black";
            aler_message.style.padding = "11px";
            aler_message.style.marginTop = "19px";
            
        }
    });

    let a = setInterval(() => {
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentHour = currentDate.getHours();
        let currentMin = currentDate.getMinutes();
        let currentSec = currentDate.getSeconds();

        let remainingDay = finalDateParts[0] - currentDay;
        let remainingHour = finalDateParts[3] - currentHour;
        let remainingMin = finalDateParts[4] - currentMin;
        let remainingSec = finalDateParts[5] - currentSec;
		
        if (currentDate.getDate() >= 24) {
            day.innerHTML = "X";
            hour.innerHTML = "V";
            min.innerHTML = "I";
            sec.innerHTML = "I";
            clearInterval(a);
        } else {
            day.innerHTML = `${remainingDay} days`;
            hour.innerHTML = `${remainingHour} hours`;
            min.innerHTML = `${remainingMin} minutes`;
            sec.innerHTML = `${remainingSec} seconds`;
        }
    }, 1000);

    let tar = document.getElementsByClassName("target")[0];
    let sent = document.getElementsByClassName("sky")[0];
    sent.addEventListener("click", ()=>{
      if(tar.value.length>5){
        alert("Sucessfully send to Isro 😅 -> they will soon send to sky");
      }
      else if(tar.value.length == 0){
        alert("Idiot atlest write something");
      }
      else{
        alert("Write more words");
      }
    })



// setInterval(() => {
//   if(text.value.length > 10){
//     text.style.color = "black";
//   }
//   else{
//     text.style.color = "#555";
//   }
// }, 400);




// document.getElementsByClassName("test")[0].innerHTML = remaninHour;
// document.getElementsByClassName("test")[1].innerHTML = remaninMin;
// document.getElementsByClassName("test")[2].innerHTML = currentDay;
// document.getElementsByClassName("test")[3].innerHTML = remaninMonth;



