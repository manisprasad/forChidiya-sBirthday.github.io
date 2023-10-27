// Define an array of random words
const randomWords = [
  "🍥",
  ":)",
  "🍫",
  "🍩",
  "🥞",
  "so",
  "🎁",
  "🥧",
  "so",
  "🥮",
  "🍦",
  "🎊",
  "so",
  "🎉",
  "🍡",
  "🍬",
  "soo",
  "🍭",
  "🍮",
  "☕",
  "so"
];

// Function to change the inner text of a span element randomly
let sooCount = 1;
function changeWord(spanElement) {
     

  // Generate a random index to select a word from the array
  const randomIndex = Math.floor(Math.random() * randomWords.length);

  // Set the inner text of the clicked span element to a random word
  let y = spanElement.innerText = randomWords[randomIndex];
  if(y == "so") sooCount++;
  if(sooCount>= 24){
    document.getElementsByClassName("hexagon-part")[0].style.visibility = "hidden";

  
    

    
    setTimeout(() => {
      document.getElementsByClassName("hexagon-part")[0].style.visibility = "hidden";
   
      let container = document.getElementsByClassName("visibleornot")[0];
      container.style.display = "block"
    }, 1000);

  }
  spanElement.style.fontSize = "20px";
  spanElement.style.color = "white";
}

// Add a click event listener to the parent element (event delegation)
const rowElement = document.querySelector('.row');
rowElement.addEventListener('click', function (event) {
  if (event.target.tagName === 'SPAN') {
    changeWord(event.target);
  }
});

let cov = document.getElementsByClassName("cover")[0];
let bok = document.getElementsByClassName("book")[0];
let mess = document.getElementsByClassName("book_main")[0];
let qu = document.getElementsByClassName("quote")[0];

bok.addEventListener("mouseover",()=>{
  mess.style.filter = "blur(0px)"; 
  qu.style.filter = "blur(0px)"; 
  // chid.style.transform = "translate3d(-50%, 30%,0)"
   
})

bok.addEventListener("mouseout", ()=>{
  setTimeout(() => {
    mess.style.filter = "blur(5px)"; // Apply the blur effect again.
    qu.style.filter = "blur(5px)"; // Apply the blur effect again.
  }, 1000);
})

cov.addEventListener("mouseover", ()=>{

  setTimeout(() => {
    mess.style.filter = "blur(0px)"; 
  qu.style.filter = "blur(0px)"; 
  }, 1000);
}

)

let flow = document.getElementsByClassName("flower")[0];
let out = document.getElementsByClassName("exit")[0];
let pop1 = document.getElementsByClassName("popup1")[0];
flow.addEventListener("click", () => {
    flow.style.opacity = "0.3"
    flow.style.scale = "0.9";
    pop1.style.left = "40%"
    pop1.style.scale = "1";
    // document.getElementsByTagName("body")[0].style.opacity = "0.4"
    pop1.style.opacity = "1";
});
out.addEventListener("click", ()=>{
  pop1.style.scale ="0";
  flow.style.opacity = "1";
  flow.style.scale = "1";

})


cov.addEventListener("mouseout", () => {
  setTimeout(() => {
    mess.style.filter = "blur(5px)"; // Apply the blur effect again.
    qu.style.filter = "blur(5px)"; // Apply the blur effect again.
  }, 1000); // Adjust the time (in milliseconds) as needed.
});
let load = document.getElementsByClassName("lds-heart")[0];
let pass = document.getElementsByClassName("password")[0];
let verify = document.getElementsByClassName("sure")[0];
let lab = document.getElementsByClassName("lab")[0];
let chidiyamess = document.getElementsByClassName("template")[0];
let rotationAngle=  0;
let attemp = 1;
let g = document.getElementsByClassName("container")[0];

verify.addEventListener("click", () => {
  if(pass.value == "chidiya"){
    lab.innerHTML = "I know you 😂, thats why i  set case sensitive for eg., cHiDya, chidiya or maybe CHIDIYA <hr> Another hint : there maybe a cheat code for case sensitive order";
    attemp++;
    return;
  }
  if(pass.value.length==0){
    lab.style.color = "blue";
    lab.innerText = "...type anything to unlock the message"
    return;
  }
  rotationAngle += 360; // Increment the rotation angle
  verify.style.transform = `rotate(${rotationAngle}deg)`;
  
  
if(pass.value == "cHidIYa"){
  
  let load = document.getElementsByClassName("lds-heart")[0];
  document.getElementsByClassName("visibleornot")[0].style.display = "none";
load.style.display = "inline-block";
  setTimeout(() => {
 
    document.getElementsByClassName("hexagon-part")[0].style.visibility = "hidden";
    g.style.background = "green";
    load.style.display = "none";
    chidiyamess.classList.add(".template-anim");
    chidiyamess.style.display = "block";
  }, 3000);          
}
else{
  lab.style.color = "red";
  lab.innerText = `You failed! attemp ${attemp}`;
  attemp++;
  if(attemp == 3 || attemp == 5 || attemp == 7 || attemp == 9){
  lab.style.color = "purple";
    lab.innerText = "Hint : Odd one out (Password is case Sensitive)";
  }

}
})
let birth = document.getElementsByClassName("candel")[0];
let hintt = document.getElementsByClassName("candel1")[0];
let chid = document.getElementsByClassName("chidiya")[0];

hintt.addEventListener("click",()=>{
  birth.style.transform = "translateX(-1000px)"
  // hintt.innerHTML = "<h3>Nothing here</h3>";
  setTimeout(() => {
    hintt.innerHTML = "<h3>Nothing here</h3>";
  }, 1000);
})


let frog = document.getElementsByClassName("chidiya")[0];
chid.addEventListener("click", ()=>{
  // chid.style.transform = "rotate(180deg)"
  chid.style.transform = "rotateY(180deg)";
  setTimeout(() => {
    chid.style.transform = "translate3d(-1000px, -500px, 0)";
    // chid.style.transform = "translateY(-10px)"
  }, 2000);
  setTimeout(() => {
    frog.style.backgroundImage = "url(frog.png)";
    chid.style.transform = "translate3d(-12px, -1px, 0)";
    
    // document.getElementsByClassName("logo")[0].style.color = "red";
  }, 3000);
})
let sm = document.getElementsByClassName("cake")[0];
let a = 200;
function small(){
  if(a<80){
    a = 260;
  }
  a = a-10;
  sm.style.width = `${a}px`
}
let ok = document.getElementsByClassName("okay")[0];
let by = document.getElementsByClassName("bye")[0];
ok.addEventListener("click", ()=>{
  setTimeout(() => {
    ok.style.scale = "0";
  }, 1000);
  foot.style.visibility = "visible"
  ok.style.transform = "translateX(1000px)"
  by.style.transform = "translate3d(0px , -80px, 0px)"
})

let say = document.getElementsByClassName("say")[0];
let foot = document.getElementsByTagName("footer")[0];
let req = document.getElementsByClassName("req")[0];

say.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementsByTagName("body")[0].innerHTML = "<h1>okay then <br> BYe</h1>";
    document.getElementsByTagName("body")[0].style.textAlign = "center";
    document.getElementsByTagName("body")[0].style.marginTop = "50%";
    document.getElementsByTagName("body")[0].style.background = "black";
    document.getElementsByTagName("body")[0].style.color = "white";
   document.getElementsByTagName("body")[0].style.fontSize = "45px";
  }, 12000);
});

  







let but = document.getElementsByClassName("Yes")[0];
let but1 = document.getElementsByClassName("No")[0];
let pop = document.getElementsByClassName("popup")[0];
let qe = document.getElementsByClassName("ques")[0];

but.addEventListener("mouseover", ()=>{
  but.style.background = "red"
 
  but.innerText = "🙁";
})
but.addEventListener("mouseout", ()=>{
  but.innerText = "Me";
  but.style.background = "black"

})

but1.addEventListener("mouseover", ()=>{
 
  but1.innerText = "🙂";
  but1.style.background = "green"
})

but1.addEventListener("mouseout", ()=>{
  but1.innerText = "Chidiya";
  but1.style.background = "black";
})

but.addEventListener("click", ()=>{
  but.style.display = "none";
  but1.style.display = "none";
  pop.style.top = "50%"
  pop.style.left ="50%";
  pop.style.scale = "1";
  qe.style.visibility = "hidden"
  pop.innerText = "hmmm...ok"
  setTimeout(() => {
    pop.style.display = "none"
    qe.style.display = "none";

  }, 2000);

})

let chidi = document.getElementsByClassName("flower-ch")[0];
but1.addEventListener("click", ()=>{
  but1.style.display = "none";
  but.style.display = "none";
  pop.style.top = "50%"
  pop.style.left ="50%";
  pop.style.scale = "1";
  qe.innerText = "Here's a flower for you"
  chidi.style.display = "inline-block";
  setTimeout(() => {
    pop.style.display = "none"

  }, 2000);
})





var confetti = {
  maxCount: 20, //set max confetti count
  speed: 2, //set the particle animation speed
  frameInterval: 15, //the confetti animation frame interval in milliseconds
  alpha: 1.0, //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
  gradient: false, //whether to use gradients for the confetti particles
  start: null, //call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
  stop: null, //call to stop adding confetti
  toggle: null, //call to start or stop the confetti animation depending on whether it's already running
  pause: null, //call to freeze confetti animation
  resume: null, //call to unfreeze confetti animation
  togglePause: null, //call to toggle whether the confetti animation is paused
  remove: null, //call to stop the confetti animation and remove all confetti immediately
  isPaused: null, //call and returns true or false depending on whether the confetti animation is paused
  isRunning: null //call and returns true or false depending on whether the animation is running
};

(function () {
  confetti.start = startConfetti;
  confetti.stop = stopConfetti;
  confetti.toggle = toggleConfetti;
  confetti.pause = pauseConfetti;
  confetti.resume = resumeConfetti;
  confetti.togglePause = toggleConfettiPause;
  confetti.isPaused = isConfettiPaused;
  confetti.remove = removeConfetti;
  confetti.isRunning = isConfettiRunning;
  var supportsAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var colors = [
    "rgba(30,144,255,",
    "rgba(107,142,35,",
    "rgba(255,215,0,",
    "rgba(255,192,203,",
    "rgba(106,90,205,",
    "rgba(173,216,230,",
    "rgba(238,130,238,",
    "rgba(152,251,152,",
    "rgba(70,130,180,",
    "rgba(244,164,96,",
    "rgba(210,105,30,",
    "rgba(220,20,60,"
  ];
  var streamingConfetti = false;
  var animationTimer = null;
  var pause = false;
  var lastFrameTime = Date.now();
  var particles = [];
  var waveAngle = 0;
  var context = null;

  function resetParticle(particle, width, height) {
    particle.color =
      colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
    particle.color2 =
      colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = Math.random() * Math.PI;
    return particle;
  }

  function toggleConfettiPause() {
    if (pause) resumeConfetti();
    else pauseConfetti();
  }

  function isConfettiPaused() {
    return pause;
  }

  function pauseConfetti() {
    pause = true;
  }

  function resumeConfetti() {
    pause = false;
    runAnimation();
  }

  function runAnimation() {
    if (pause) return;
    else if (particles.length === 0) {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      animationTimer = null;
    } else {
      var now = Date.now();
      var delta = now - lastFrameTime;
      if (!supportsAnimationFrame || delta > confetti.frameInterval) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        updateParticles();
        drawParticles(context);
        lastFrameTime = now - (delta % confetti.frameInterval);
      }
      animationTimer = requestAnimationFrame(runAnimation);
    }
  }

  function startConfetti(timeout, min, max) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    window.requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, confetti.frameInterval);
        }
      );
    })();
    var canvas = document.getElementById("confetti-canvas");
    if (canvas === null) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("id", "confetti-canvas");
      canvas.setAttribute(
        "style",
        "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
      );
      document.body.prepend(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener(
        "resize",
        function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        true
      );
      context = canvas.getContext("2d");
    } else if (context === null) context = canvas.getContext("2d");
    var count = confetti.maxCount;
    if (min) {
      if (max) {
        if (min == max) count = particles.length + max;
        else {
          if (min > max) {
            var temp = min;
            min = max;
            max = temp;
          }
          count = particles.length + ((Math.random() * (max - min) + min) | 0);
        }
      } else count = particles.length + min;
    } else if (max) count = particles.length + max;
    while (particles.length < count)
      particles.push(resetParticle({}, width, height));
    streamingConfetti = true;
    pause = false;
    runAnimation();
    if (timeout) {
      window.setTimeout(stopConfetti, timeout);
    }
  }

  function stopConfetti() {
    streamingConfetti = false;
  }

  function removeConfetti() {
    stop();
    pause = false;
    particles = [];
  }

  function toggleConfetti() {
    if (streamingConfetti) stopConfetti();
    else startConfetti();
  }

  function isConfettiRunning() {
    return streamingConfetti;
  }

  function drawParticles(context) {
    var particle;
    var x, y, x2, y2;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      x2 = particle.x + particle.tilt;
      x = x2 + particle.diameter / 2;
      y2 = particle.y + particle.tilt + particle.diameter / 2;
      if (confetti.gradient) {
        var gradient = context.createLinearGradient(x, particle.y, x2, y2);
        gradient.addColorStop("0", particle.color);
        gradient.addColorStop("1.0", particle.color2);
        context.strokeStyle = gradient;
      } else context.strokeStyle = particle.color;
      context.moveTo(x, particle.y);
      context.lineTo(x2, y2);
      context.stroke();
    }
  }

  function updateParticles() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    waveAngle += 0.01;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
      else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(waveAngle) - 0.5;
        particle.y +=
          (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (streamingConfetti && particles.length <= confetti.maxCount)
          resetParticle(particle, width, height);
        else {
          particles.splice(i, 1);
          i--;
        }
      }
    }
  }
})();


