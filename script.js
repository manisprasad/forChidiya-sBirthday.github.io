
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
    let start1 = document.querySelector(".started");
    let aler_message = document.querySelector(".alert_message");
    let pa = document.getElementsByClassName("para")[0];

    let currentDate = new Date();


    start1.addEventListener("click", () => {
        if (currentDate.getDate() >= 28) {
          start1.style.fontSize = "43px"
          start1.style.borderRadius = "19px"
          start1.style.background = "black"
            start1.innerHTML = '<a href="effect.html">Happy Birthday</a>';
            start1.classList.add("react");
            setTimeout(() => {
                start1.style.background = "red";
                start1.innerHTML = '<a href="effect.html">Say Thanks ✨</a>';
                
            }, 3000);
        } else {
            aler_message.innerHTML = "There is still some time left in your birthday. Dude 🖐️";
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

        let remainingDay = finalDateParts[0] - currentDay-1;
        let remainingHour = finalDateParts[3] - currentHour;
        let remainingMin = finalDateParts[4] - currentMin;
        let remainingSec = finalDateParts[5] - currentSec;
		
        if (currentDate.getDate() >= 28) {

start1.style.cursor = "pointer"
          pa.innerHTML = "<p>Click on start</p>"
          card.innerHTML = "<p>Today is Someone's <span>Birthday</span></p>";
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
    let pop = document.getElementsByClassName("popup")[0];
    sent.addEventListener("click", ()=>{
      if(tar.value.length>5){
        
  pop.style.left ="50%";
  pop.style.scale = "1";
  setTimeout(() => {
    pop.style.display = "none"
   

  }, 5000);
      }
      else if(tar.value.length == 0){
        alert("Idiot atlest write something");
      }
      else{
        alert("Write more words");
      }
    })



