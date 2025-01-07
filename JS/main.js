

if (window.innerWidth > 768) {
  // Select all .firstname elements inside the .experience div


  const firstNames = document.querySelectorAll('.experience .firstname');
  // Function to generate a random number
  function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1; // Random number between 1 and 100
  }
  let duration = 2* 1000; // 20 seconds in milliseconds

  // Loop through each span
  firstNames.forEach(span => {
    let defaultNumber = span.textContent; // Store the default number
    console.log("Default Number:", defaultNumber);


    // Function to update the span with a random number every second
    const interval = setInterval(() => {
      span.textContent = getRandomNumber(); // Update with a random number
    }, 2); // Update every second
    // Reset to the default number after 20 seconds
    setTimeout(() => {
      clearInterval(interval); // Stop the random updates
      span.textContent = defaultNumber; // Reset to the default number
      console.log("Reset to Default:", span.textContent);
    }, duration);



  }

);



}







// Select both menus
const menus = document.querySelectorAll(".menu");

// Add a click event listener to toggle the 'active' class
menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");

    reduceOpacity();


  });
 
});



function reduceOpacity() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    if (circle.style.opacity == "0") 
    circle.style.opacity = "1";
    else
     circle.style.opacity = "0";
  });
}
