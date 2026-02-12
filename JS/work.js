//section hider
//console.log("work loaded successfully")
function hidesections() {
// console.log("hidesections loaded successfully")
 const sections=document.querySelectorAll('section');
 sections.forEach(sec=>sec.classList.add('hidden'));
}
function LoadCalc(v) {
 CalcChoice=v;
 //console.log("Calculator",v,"Loaded");
 switcher();
}
// Takes |v|
function TakeMod(v){
 return (v**2)**0.5;
}
//Sets negative outputs to 0
function NegZero(v){
 return (v + TakeMod(v))/2
}

