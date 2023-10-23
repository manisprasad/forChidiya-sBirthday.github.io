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
  if(sooCount>=2){
    document.getElementsByClassName("hexagon-part")[0].style.visibility = "hidden";

    let g = document.getElementsByClassName("container")[0];
    let load = document.getElementsByClassName("lds-heart")[0];
load.style.display = "inline-block";

    
    setTimeout(() => {
      document.getElementsByClassName("hexagon-part")[0].style.visibility = "visible";
      g.style.background = "green";
      load.style.display = "none";
      g.classList.add("hidden-message");
      g.innerHTML = "<p> <h1>this is for chidiya only🎂+👑 </h1> Another year passed and you get old by +1, but you're still my favorite PERSON and will 4EVR&more. Happy Birthday to the womann..., who constantly occupies my thoughts. Here's to another year passed. so, Wishing you a day as beautiful as you are... My chidiya!💕                                                                      <hr> You know, You were my little time magician, making hours feel like minutes and leaving me in awe, I would like to learn your secret and the way makes you time Swiftly🚀, but it seems you're the missing piece in the puzzle of my life                                               Missing You too much </p>"
    }, 6000);

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
let mess = document.getElementsByClassName("book_main")[0];
let qu = document.getElementsByClassName("quote")[0];
cov.addEventListener("mouseover", ()=>{

  setTimeout(() => {
    mess.style.filter = "blur(0px)"; 
  qu.style.filter = "blur(0px)"; 
  }, 1000);
}
)
cov.addEventListener("mouseout", () => {
  setTimeout(() => {
    mess.style.filter = "blur(5px)"; // Apply the blur effect again.
    qu.style.filter = "blur(5px)"; // Apply the blur effect again.
  }, 1000); // Adjust the time (in milliseconds) as needed.
});



//photo gallery
