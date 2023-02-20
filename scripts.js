const gridArea = document.querySelector('#gridArea'); 
const gridBreak = document.createElement("br");
const genButton = document.querySelector("#generateButton");

genButton.addEventListener("click", function(){

    //Clears results of any previous grid//
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }}
    const gridArea = document.querySelector('#gridArea');
    removeAllChildNodes(gridArea);

    //Grid Generator
    {let sideLenPrompt = prompt("How large would you like the sides of your square to be? (Max value = 100)")
    let sideLen = sideLenPrompt;
    let divGen = function(sideLen){
        for (j = 0; j < sideLen; j++)  
        for (i = 0; i < sideLen; i++) {
            const divBox = document.createElement("div");
                gridArea.style.gridTemplateColumns = `repeat(${sideLen}, 1fr)`;
                gridArea.style.gridTemplateRows = `repeat(${sideLen}, 1fr)`;
                divBox.innerHTML = "<div> </div>";
                divBox.style.background = "limegreen";
                divBox.style.margin = "0px";
                divBox.classList.add("oneSquare");
                divBox.addEventListener("mouseenter",function() {divBox.classList.add("revealed")})
                divBox.addEventListener("mouseout",function() {divBox.classList.remove("revealed")})
                gridArea.append(divBox);}  
                };
    divGen(sideLen);
}})

