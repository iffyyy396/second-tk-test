let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let alphaABC = "";
function startUp() {
    for (let i=0; i < 26; i++) {
        document.querySelector('.keyboard').innerHTML += `<span class="key" onclick="valueInput('${alpha[i]}')">
               ${alpha[i]}
        </span>`;
}}
function valueInput(El){
     alphaABC += El;
     document.querySelector('input').value += El;
}
function space(){
    document.querySelector('input').value += " ";
}
function alertEl(){
    let textEl = document.querySelector("input").value;
    if (textEl === ""){
        alert("Please Type Something")
    }else {
        alert("Your Message Has Been Sent")
    }
}