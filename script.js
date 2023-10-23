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
    if (currentDate.getDate() >= 23) {
      card.innerHTML = "<p>Today is Someone's <span>Birthday</span></p>";
    }
    start.addEventListener("click", () => {
        if (currentDate.getDate() >= 23) {
           
            day.innerHTML = "X";
            hour.innerHTML = "V";
            min.innerHTML = "I";
            sec.innerHTML = "I";
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

        if (currentDate >= 28) {
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




var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = true;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = true;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
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
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();

