//section hider
console.log("work loaded successfully")
function hidesections() {
 console.log("hidesections loaded successfully")
 const sections=document.querySelectorAll('section');
 sections.forEach(sec=>sec.classList.add('hidden'));
}
function LoadCalc(v) {
 CalcChoice=v;
 console.log("Calculator",v,"Loaded");
 switcher();
}