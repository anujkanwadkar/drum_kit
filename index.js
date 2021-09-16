var drum_buttons = document.querySelectorAll("button").length;

function buttonAnimation(currentKey){
var active_b=document.querySelector("."+currentKey);
active_b.classList.add("pressed");
setTimeout(function(){
active_b.classList.remove("pressed");
},100);
}

function key_board(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":

      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":

      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":

      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":

      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":

      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key);


  }
}

function handleClick() {
  //   var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
  // this.style.color = "white";
  // console.log(this);

  var drum_b = this.innerHTML;
  buttonAnimation(drum_b);
  switch (drum_b) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":

      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":

      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":

      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":

      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":

      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(drum_b);

  }
  // this.setAttribute("class", "text_color");
}
for (var i = 0; i < drum_buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}
document.addEventListener("keydown", function(event) {
  key_board(event.key);
  buttonAnimation(event.key);
});
