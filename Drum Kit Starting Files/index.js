var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var button_inner_html = this.innerHTML;
        make_sound(button_inner_html);
        buttonAnimation(button_inner_html);

        
        

        }
    );

}

document,addEventListener("keydown",function(event){
    make_sound(event.key);  
    buttonAnimation(event.key);
});
function make_sound(key){
    switch(key){
        case "W":
        case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
        break;

        case "A":
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "S":
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "D":
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "J":
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "K":
        case "k":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
        break;

        case "L":
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default: console.log(button_inner_html);

}}

function buttonAnimation(currentKey){
   var activeButton =  document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);

}

