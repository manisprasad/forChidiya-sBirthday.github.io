let blue_button = document.getElementsByClassName("button-blue")[0];
let red_button = document.getElementsByClassName("button-red")[0];
let start = document.querySelector(".started"); // Assuming the "start" element is available in your HTML.

blue_button.addEventListener("click", () => {
    start.classList.add("react");
    setTimeout(() => {
        start.style.background = "red";
        start.innerHTML = '<a href="effect.html">Click again</a>';
    }, 0); // Change the delay to 0 if you want the changes to occur immediately.
});
