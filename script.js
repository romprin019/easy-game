var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },200);
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=140){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Prohrál jsi! Pro další pokus refreshni stránku !");
       
    }
},10)
