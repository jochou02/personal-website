window.addEventListener('DOMContentLoaded', init);

function init() {

  let index = 0;
  let wordIndex = 0;
  let messages = ["Hi, I'm John.", "I'm a software engineer from California.", "Welcome to my site!"];
  let speed = 100;

  typeWriter();

  // Type Writer Functionality 
  function typeWriter() {
    document.getElementById('message' + (wordIndex + 1)).innerHTML += messages[wordIndex].charAt(index);
    index++;
    // Reach end of current message
    if (index == messages[wordIndex].length) {
      wordIndex++;
      index = 0;
      speed = 40;
    }
    // Repeat until messages are all added
    if (wordIndex <= 2) {
      setTimeout(typeWriter, speed);
    }
  }
}