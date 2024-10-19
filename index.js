var numberOfDrums = document.querySelectorAll(".drum").length;
for (i=0; i<numberOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() { var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);buttonAnimmation(buttonInnerHtml );} );  


}
document.addEventListener("keypress", function(event){makeSound(event.key); buttonAnimmation(event.key);});


function makeSound(key){

   switch (key) {
    case "w":
        var tom4= new Audio('sounds/tom-4.mp3') ;
        tom4.play(); 
     break;
    case "a":
        var tom3= new Audio('sounds/tom-3.mp3') ;
        tom3.play(); 
     break;
    case "s":
        var tom2= new Audio('sounds/tom-2.mp3') ;
        tom2.play(); 
     break;
    case "d":
        var tom1= new Audio('sounds/tom-1.mp3') ;
        tom1.play(); 
        break;
    case "j":
        var snare= new Audio('sounds/snare.mp3') ;
        snare.play(); 
        break;
    case "k":
        var kick= new Audio('sounds/kick-bass.mp3') ;
        kick.play(); 
        break;
    case "l":
        var crash= new Audio('sounds/crash.mp3') ;
        crash.play(); 
        break;
        
  default:
    console.log(buttonInnerHtml);
       
 
    
};}

function buttonAnimmation(currentkey) {
var activeButton = document.querySelector("."+currentkey);
activeButton.classList.add('pressed');
setTimeout(function(){ activeButton.classList.remove('pressed') ;
}, 100);
}

