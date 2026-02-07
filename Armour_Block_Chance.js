console.log("Js loading properly")
function calculatefulldamageblockchance() {
    console.log("calculatefulldamageblockchance loaded properly")
        const dmax= parseInt(document.getElementById('Dmax').value)
        const dmin = parseInt(document.getElementById('Dmin').value);
        const amax = parseInt(document.getElementById('Amax').value);
        const amin = parseInt(document.getElementById('Amin').value);
        const acc = parseInt(document.getElementById('Acc').value);
        const eva = parseInt(document.getElementById('Eva').value);

        const n = dmax - dmin + 1;
        const m = amax - amin + 1;
        console.log("constants loaded properly")
        let accmodifier=1;
        const Acccheck = document.getElementById('Accenabled').checked; 
        if(eva===0||!Acccheck){
             accmodifier = 1;
        }
       else if (acc<eva){
           accmodifier = acc/( 2 * eva);
       }
       else {
           accmodifier = 1 - ( eva / ( 2 * acc) );
       }
       console.log(accmodifier)
       
        if (isNaN(n) || isNaN(m) || n < 1 || m < 1) {
            document.getElementById('result').innerText = "Your input is invalid";
            return;
        }
        if (amax+dmax>350||amax>300||dmax>300){
            document.getElementById('result').innerText="Not achievable maximum";
            return;
        }
        
        let ArmourCheck = 0.0
        if (amax<=dmin){
            ArmourCheck = (n**2 * m**2);
        }
        else if (dmax<amin){
            ArmourCheck=0;
        }
        else {
        for (let d1=dmin;d1<dmax+1;d1++){
            for (let d2=dmin;d2<dmax+1;d2++){
                for (let a1=amin;a1<amax+1;a1++){
                    for (let a2=amin;a2<amax+1;a2++){
                        const DefenseRoll= d1+d2;
                  const AttackRoll=a1+a2;
                  if(DefenseRoll<AttackRoll){}
                  else{ArmourCheck += 1};
                    }
                }
            }
        }
        }
        const FinalArmourCheck = ArmourCheck / (n**2 * m**2);
        const totalProb = FinalArmourCheck * accmodifier;
        document.getElementById('FullBlockRateResult').innerText = (totalProb * 100).toFixed(2) + "%";
    
    console.log("Result is",document.getElementById('FullBlockRateResult').innerText);
}
    const inputs = document.querySelectorAll('input');
    inputs.forEach(el => el.addEventListener('input', calculatefulldamageblockchance));
    
    //Finds out if accuracy checks are enabled and disables the fields
    function AccuracyEnabled() {
        console.log("AccuracyEnabled loaded properly")
        const Acco = document.getElementById('Accenabled').checked;
        const AccuracyElements = document.getElementsByClassName('accuracy')
        for (let i=0; i<AccuracyElements.length;i++){
            if (Acco){
            AccuracyElements[i].style.display="flex"
        }
        else {AccuracyElements[i].style.display ="none"}
        }
    }
