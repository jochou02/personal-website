window.addEventListener('DOMContentLoaded', init);

function init() {
  let index = 0;
  let wordIndex = 0;
  const messages = ["I'm a computer science student from California.", "Welcome to my site!"];
  let speed = 35;

  // Type Writer Functionality 
  function typeWriter() {
    const currentMessage = document.getElementById(`message${wordIndex + 2}`);
    currentMessage.textContent += messages[wordIndex].charAt(index);
    index++;

    // Reach end of current message
    if (index === messages[wordIndex].length) {
      wordIndex++;
      index = 0;
    }

    // Repeat until messages are all added
    if (wordIndex < messages.length) {
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
