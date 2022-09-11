var i = 0;
var txt = "Hi, I'm John. I'm a software developer from California.  Welcome to my site!";
var speed;

function typeWriter() {
  if (i < txt.length) {
    if (i == 13 || i == 55)
      speed = 400;
    else if (i < 13)
      speed = 70;
    else
      speed = 30;
    if (i < 13) {
      document.getElementById("message1").innerHTML += txt.charAt(i);
    } else if (i < 55) {
      document.getElementById("message2").innerHTML += txt.charAt(i);
    } else {
      document.getElementById("message3").innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}