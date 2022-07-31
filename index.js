//alert("hello its me")
var numberOfdrums=document.querySelectorAll(".drum").length;
console.log(numberOfdrums);
//funtions
function makeSound(key){
  switch (key) {
    case "w":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "a":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
    break;

    case "s":
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
    break;

    case "d":
      var audio=new Audio('sounds/tom-4.mp3');
      audio.play();
    break;
    case "j":
      var audio=new Audio('sounds/crash.mp3');
      audio.play();
    break;

    case "k":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;

    case "l":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
    break;

    default:
      console.log(key);

  }

}

function addAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);

}

//clicking
for(var i=0;i<numberOfdrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      makeSound(this.innerHTML);
      addAnimation(this.innerHTML);

  });



}

//keyboard keys
document.addEventListener("keydown",function(e){
    makeSound(e.key);
    var check=["w","a","s","d","j","k","l"];
    if(check.includes(e.key)){
    addAnimation(e.key);
  }
})
