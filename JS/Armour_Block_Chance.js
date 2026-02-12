//console.log("Js loading properly")
function calculatefulldamageblockchance() {
    //console.log("calculatefulldamageblockchance loaded properly")
        const dmax= parseInt(document.getElementById('Dmax').value)
        const dmin = parseInt(document.getElementById('Dmin').value);
        const amax = parseInt(document.getElementById('Amax').value);
        const amin = parseInt(document.getElementById('Amin').value);
        const acc = parseInt(document.getElementById('Acc').value);
        const eva = parseInt(document.getElementById('Eva').value);
        const bt=parseInt(document.getElementById('BlockThreshold').value);

        const n = dmax - dmin + 1;
        const m = amax - amin + 1;
        //console.log("constants loaded properly");
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
       //console.log("Accuracy modifier set to",accmodifier);
        if (isNaN(n) || isNaN(m) || n < 1 || m < 1) {
            document.getElementById('FullBlockRateResult').innerText = "Your input is invalid";
            return;
        }
        let ArmourCheck= 0.0
        if (amax<=dmin+bt){
            ArmourCheck = (n**2 * m**2);
            //console.log("Condition activated: Certain damage");
        }
        else if (dmax+bt<amin){
            ArmourCheck=0;
           // console.log("Condition activated: Certain block");
        }
        else if(n>300||m>300||n+m>350){
            let ArmourCheck1 =0.0
            for(i=1;i<10000;i++){
                const d1=n*Math.random();
                const d2=n*Math.random();
                const a1=m*Math.random();
                const a2=m*Math.random();
                if(d1+d2+bt+bt>=a1+a2){
                    ArmourCheck1 +=1;
                    ArmourCheck=ArmourCheck1 * n**2 * m**2 /10000;
                }
            }
        }
        else {
        for (let d1=dmin;d1<dmax+1;d1++){
            for (let d2=dmin;d2<dmax+1;d2++){
                for (let a1=amin;a1<amax+1;a1++){
                    for (let a2=amin;a2<amax+1;a2++){
                        const DefenseRoll= d1+d2+2*bt;
                  const AttackRoll=a1+a2;
                  if(DefenseRoll<AttackRoll){}
                  else{ArmourCheck += 1;
                    }
                    }
                }
            }
        }
        }
        //console.log("ArmourCheck=",ArmourCheck)
        const FinalArmourCheck = ArmourCheck / (n**2 * m**2);
        const totalProb = FinalArmourCheck * accmodifier;
        if(n>300||m>300||n+m>350){
            document.getElementById('FullBlockRateResult').innerText = (totalProb * 100).toFixed(2) + "%" + "~~~~Warning: Due to high input values, probability has been calculated using 10K random simulations. May not reflect real probability";
        }
        else{
        document.getElementById('FullBlockRateResult').innerText = (totalProb * 100).toFixed(2) + "%";
        }
    
    //console.log("Result is",document.getElementById('FullBlockRateResult').innerText);
}
  
    //Finds out if accuracy checks are enabled and disables the fields
    function AccuracyEnabled() {
        //console.log("AccuracyEnabled loaded properly")
        const Acco = document.getElementById('Accenabled').checked;
        const AccuracyElements = document.getElementsByClassName('accuracy');
        for (let i=0; i<AccuracyElements.length;i++){
            if (Acco){
            AccuracyElements[i].style.display="flex";
        }
        else {AccuracyElements[i].style.display ="none";}
        }
    }

//Enables threaholds for blocking
function BlockThresholdEn() {
    //console.log("BlockThresholdEn loaded");
    const BlockThresholdCheck= document.getElementById('BlockThresholdEnabled').checked;
    const BlockThresholdElements=document.getElementsByClassName('BlockThresholdClass');
    //console.log("Threshold variables declared")
    if(BlockThresholdCheck) {
        BlockThresholdElements[0].classList.remove('hidden');
    }
    else {
        BlockThresholdElements[0].classList.add('hidden');
    }
}

function MenuInfographicBlock() {
    document.getElementById('BlockMenuInformation').classList.remove('hidden')
    console.log("Showing Information")
}
function SettingsBlock() {}