let MenuInfographicChaliceCheck = 0

function MenuInfographicChalice() {
    MenuInfographicChaliceCheck= 1 - MenuInfographicChaliceCheck
    console.log(MenuInfographicChaliceCheck)
    if(!MenuInfographicChaliceCheck){
        document.getElementById('MenuInfographicDivChalice').classList.add('hidden');
    }
    else {
        document.getElementById('MenuInfographicDivChalice').classList.remove('hidden');
        console.log("Removed")
    }
}

function ImportValuesChalice() {
    //look for the checked button ONLY when the function is called
    const selectedTier = document.querySelector('input[name="ArmourTierChalice"]:checked');
    const L=parseInt(document.getElementById('ArmourLevel').value)||0;
    const ChaliceLvl = parseInt(document.getElementById('ChaliceLevel').value)||0;
    const ShieldingChaliceCheck= document.getElementById('ShieldingChalice').checked
    
    if (selectedTier) {
        const tierValue = parseInt(selectedTier.value);
        const MaxDefenseChalice=tierValue*(L+2);
        const MinDefenseChalice=L*tierValue/tierValue||0;
        const AvgDefenseChalice=(MaxDefenseChalice+MinDefenseChalice)/2
        
        const ChaliceDamage = 3 * ChaliceLvl**2 + 5
        
        let TotalEnhancedDefenseChalice=0;
        let MinEnhancedDefenseChalice=0;
        let MaxEnhancedDefenseChalice=0;
        let AvgEnhancedDefenseChalice=0;
        
        if(ShieldingChaliceCheck){
            TotalEnhancedDefenseChalice=+99
        }
        
        
        const MaxDamageChalice=ChaliceDamage*1.17;
        const MinDamageChalice=ChaliceDamage*0.83;
        
        const MaxDamageTakenChalice=MaxDamageChalice - MinDefenseChalice - TotalEnhancedDefenseChalice - MinEnhancedDefenseChalice;
        
        const MinDamageTakenChalice = MinDamageChalice - MaxDefenseChalice - MaxEnhancedDefenseChalice - TotalEnhancedDefenseChalice;
        
        const AvgDamageTakenChalice=(NegZero(MinDamageTakenChalice)+NegZero(MaxDamageTakenChalice))/2
        
        if(NegZero(MaxDamageTakenChalice).toFixed(0)===NegZero(MinDamageTakenChalice).toFixed(0)){
            document.getElementById('ResultChalice').innerText=NegZero(MinDamageTakenChalice).toFixed(0);
        }
        else{
        document.getElementById('ResultChalice').innerText=NegZero(MinDamageTakenChalice).toFixed(0) + "-" + NegZero(MaxDamageTakenChalice).toFixed(0) + " (~" + NegZero(AvgDamageTakenChalice).toFixed(0) + ")";
    }
            
    }

}

//The Listeners
// This is too render radio buttons
const chaliceRadios = document.querySelectorAll('input[name="ArmourTierChalice"]');

chaliceRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        ImportValuesChalice();
    });
});
