//This is the currently chosen menu of the 8 available menus for the bestiary
let BestiaryScrollerCurrentChoice=1
//Array used to store names of the 8 bestiary menus
const BestiaryScrollerArray=["Sewer","Prison","Caves","City","Halls","Non Regional","Minibosses","Bosses"]

function BestiaryScrollerFunction(Increment) {
    if(Increment){
        
        document.getElementById('BestiaryScrollerMenuName').innerText=(BestiaryScrollerArray[ModFunction(BestiaryScrollerCurrentChoice,8)]);
        
        ShowBestiary(BestiaryScrollerCurrentChoice,0);
        
        ShowBestiary(1+ModFunction(BestiaryScrollerCurrentChoice,8),1);
        //console.log(BestiaryScrollerCurrentChoice)
        BestiaryScrollerCurrentChoice=1+ModFunction(BestiaryScrollerCurrentChoice,8)
        //console.log(BestiaryScrollerCurrentChoice)
    }
    else if(!Increment){
        
        document.getElementById('BestiaryScrollerMenuName').innerText=(BestiaryScrollerArray[ModFunction(BestiaryScrollerCurrentChoice-2,8)]);
        
        ShowBestiary(BestiaryScrollerCurrentChoice,0);
        
        ShowBestiary(ModFunction(BestiaryScrollerCurrentChoice-2,8)+1,1)
        
        BestiaryScrollerCurrentChoice=ModFunction(BestiaryScrollerCurrentChoice-2,8)+1
        console.log(BestiaryScrollerCurrentChoice)
    }
}
//function to hide and show bestiary menus
function ShowBestiary(v,w){
if(w){
    if (v === 1) {
    document.getElementById('BestiaryListSewer').classList.remove('hidden')
    }
    if (v === 2) {
    document.getElementById('BestiaryListPrison').classList.remove('hidden')
    }
    if (v === 3) {
    document.getElementById('BestiaryListCaves').classList.remove('hidden')
    }
    if (v === 4) {
    document.getElementById('BestiaryListCity').classList.remove('hidden')
    }
    if (v === 5) {
    document.getElementById('BestiaryListHalls').classList.remove('hidden')
    }
    if (v === 6) {
    document.getElementById('BestiaryListNonRegional').classList.remove('hidden')
    }
    if (v === 7) {
    document.getElementById('BestiaryListMiniBoss').classList.remove('hidden')
    }
    if(v===8){
        document.getElementById('BestiaryListBoss').classList.remove('hidden')
    }
}
else if(!w){
    if(v===1){
        document.getElementById('BestiaryListSewer').classList.add('hidden')
    }
    if(v===2){
        document.getElementById('BestiaryListPrison').classList.add('hidden')
    }
    if (v === 3) {
    document.getElementById('BestiaryListCaves').classList.add('hidden')
    }
    if(v===4){
        document.getElementById('BestiaryListCity').classList.add('hidden')
    }
    if(v===5){
        document.getElementById('BestiaryListHalls').classList.add('hidden')
    }
    if(v===6){
        document.getElementById('BestiaryListNonRegional').classList.add('hidden')
    }
    if (v === 7) {
    document.getElementById('BestiaryListMiniBoss').classList.add('hidden')
    }
    if(v===8){
        document.getElementById('BestiaryListBoss').classList.add('hidden')
    }
}
}
for(let i=2;i<9;i++){
    ShowBestiary(i,0)
}

const MobDataArraySewer= [
 {name:"Sewer Snake",hp:4,dmg:[1,4],armour:[0,0],acc:10,eva:25,addon:""},
 {name:"Marsupial Rat",hp:8,dmg:[1,4],armour:[0,1],acc:8,eva:2,addon:""}, 
 {name:"Albino Rat",hp:15,dmg:[1,4],armour:[0,1],acc:8,eva:2,addon:"Applies Bleeding"},
 {name:"Gnoll Scout",hp:12,dmg:[1,6],armour:[0,2],acc:10,eva:4,addon:""},
 {name:"Gnoll Exile",hp:24,dmg:[1,10],armour:[0,3],acc:15,eva:6,addon:"Range: 2"},
 {name:"Sewer Crab",hp:15,dmg:[1,7],armour:[0,4],acc:12,eva:5,addon:"Move Speed: 2"},
 {name:"Hermit Crab",hp:25,dmg:[1,7],armour:[2,6],acc:12,eva:5,addon:""},
 {name:"Swarm of Flies",hp:50,dmg:[1,4],armour:[0,0],acc:10,eva:5,addon:"Divides when hit physically : Loses half health when dividing. Flying"},
 {name:"Slime",hp:20,dmg:[2,5],armour:["N/A","N/A"],acc:12,eva:5,addon:"Abnormal Armour Calculation"},
 {name:"Caustic Slime",hp:20,dmg:[2,5],armour:["N/A","N/A"],acc:12,eva:5,addon:"Applies Caustic Ooze effect. Abnormal armour calculation"}
 
]

const MobDataArrayPrison= [
 {name:"Skeleton",hp:25,dmg:[2,10],armour:[0,5],acc:12,eva:9,addon:"Explodes on death dealing 6-12 damage : Armour twice as effective against explosion"}, 
 {name:"Crazy Thief",hp:20,dmg:[1,10],armour:[0,3],acc:12,eva:12,addon:"Steals random unupgraded item : Flees after stealing : Fleeing Move Speed = 5/6"},
 {name:"Crazy Bandit",hp:20,dmg:[1,10],armour:[0,3],acc:12,eva:12,addon:"Steals random unupgraded item : Applies Blinded, Poisoned, and Crippled : Flees after stealing : Fleeing Move Speed = 5/6 "},
 {name:"Necromancer",hp:40,dmg:["N/A","N/A"],armour:[0,5],acc:"N/A",eva:14,addon:"Summons skeleton"},
 {name:"Spectral Necromancer",hp:40,dmg:["N/A","N/A"],armour:[0,5],acc:"N/A",eva:14,addon:"Summons wraiths"},
 {name:"DM–100",hp:20,dmg:[2,8],armour:[0,4],acc:11,eva:8,addon:"Ranged: 3-10 armour piercing damage"},
 {name:"Prison Guard",hp:40,dmg:[4,12],armour:[0,7],acc:12,eva:10,addon:"Chains player towards itself and applies Crippled"}
 ]
const MobDataArrayCaves= [
 {name:"Bat",hp:30,dmg:[5,18],armour:[0,4],acc:16,eva:15,addon:"Move Speed : 2. Heals when attacking. Flying"}, 
 {name:"Gnoll Brute",hp:40,dmg:[5,25],armour:[0,8],acc:20,eva:15,addon:"Rages after dying dealing 15-40 damage for 6 turns"},
 {name:"Armoured Brute",hp:40,dmg:[5,25],armour:[6,10],acc:20,eva:20,addon:"Rages after dying dealing 15-40 damage for 72 turns"},
 {name:"Gnoll Shaman",hp:35,dmg:[5,10],armour:[0,6],acc:18,eva:15,addon:"Ranged : 6-15 armour piercing damage : Applies Weakened, Vulnerable, or Hexed"},
 {name:"Cave Spinner",hp:50,dmg:[10,20],armour:[0,6],acc:20,eva:14,addon:"Applies Poisoned"},
 {name:"DM–200",hp:80,dmg:[10,25],armour:[0,8],acc:25,eva:8,addon:"Large"},
 {name:"DM–201",hp:120,dmg:[15,25],armour:[0,8],acc:25,eva:8,addon:"Move Speed:0"}
]
const MobDataArrayCity= [
 {name:"Dwarven Ghoul",hp:45,dmg:[16,22],armour:[0,4],acc:24,eva:20,addon:""}, 
 {name:"Dwarf Warlock",hp:70,dmg:[16,22],armour:[0,8],acc:25,eva:18,addon:"Ranged: 12-18 armour piercing: Applies Degraded"},
 {name:"Monk",hp:68,dmg:[12,25],armour:[0,2],acc:30,eva:30,addon:"Attack Speed: 2"},
 {name:"Senior Monk",hp:68,dmg:[16,25],armour:[0,2],acc:30,eva:30,addon:"Attack Speed:2"},
 {name:"Elemental",hp:65,dmg:[20,25],armour:[0,5],acc:20,eva:25,addon:"Ranged: 0 damage. Applies burning, chilled, or blinded. Flying"},
 {name:"Chaos Elemental",hp:65,dmg:[20,25],armour:[0,5],acc:20,eva:25,addon:"Ranged: 0 damage. Random cursed wand effect. Flying"},
 {name:"Golem",hp:120,dmg:[25,30],armour:[0,12],acc:28,eva:15,addon:"Large"}
]

const MobDataArrayHalls= [
 {name:"Evil Eye",hp:100,dmg:[20,30],armour:[0,10],acc:30,eva:20,addon:"Ranged: 30-50 armour piercing. Flying"}, 
 {name:"Succubus",hp:80,dmg:[25,30],armour:[0,10],acc:40,eva:25,addon:"Applies Charm"},
 {name:"Demon Spawner",hp:120,dmg:["N/A","N/A"],armour:[0,12],acc:"N/A",eva:0,addon:"Abnormal armour check. Spawns demon ripper"},
 {name:"Ripper Demon",hp:60,dmg:[15,25],armour:[0,4],acc:30,eva:22,addon:"Attack Speed:2"},
 {name:"Scorpio",hp:110,dmg:[30,40],armour:[0,16],acc:36,eva:24,addon:"Ranged. Applies crippled. Flees"},
 {name:"Acidic Scorpio",hp:110,dmg:[30,40],armour:[0,16],acc:36,eva:24,addon:"Ranged. Applies crippled and caustic ooze. Flees"}
]
const MobDataArrayNonRegional= [
 {name:"Mimic",hp:"6+6D",dmg:["1+D","2+2D"],armour:[0,"1+D/2"],acc:"6+D",eva:"2+D/2",addon:"Deals 2+2D damage on surprise attack"}, 
 {name:"Golden Mimic",hp:"6+6D",dmg:["1+D","2+2D"],armour:[0,"1+D/2"],acc:"6+D",eva:"2+D/2",addon:"Deals 2+2D damage on surprise attack. D MULTIPLIED BY 4/3"}, 
 {name:"Crystal Mimic",hp:"6+6D",dmg:["1+D","2+2D"],armour:[0,"1+D/2"],acc:"6+D",eva:"2+D/2",addon:"Deals 2+2D damage on surprise attack"}, 
 {name:"Ebony Mimic",hp:"6+6D",dmg:["1+D","2+2D"],armour:[0,"1+D/2"],acc:"6+D",eva:"2+D/2",addon:"Deals 2+2D damage on surprise attack"}, 
 {name:"Wraith",hp:1,dmg:["1+D/2","2+D"],armour:[0,0],acc:"10+D",eva:"50+5D",addon:"Flying"},
 {name:"Tormented Spirit",hp:1,dmg:["1+D/2","2+D"],armour:[0,0],acc:"10+D",eva:"50+5D",addon:"Flying"},
 {name:"Bee",hp:"8+4D",dmg:["(2+D)×0.4","2+D"],armour:[0,0],acc:"9+D",eva:"9+D",addon:"Flying"},
 {name:"Piranha",hp:"10+5D",dmg:["D","4+2D"],armour:[0,"D"],acc:"20+2D",eva:"10+2D",addon:"Dies outside of water. Move Speed : High"},
 {name:"Phantom Piranha",hp:"10+5D",dmg:["D","4+2D"],armour:[0,"D"],acc:"20+2D",eva:"10+2D",addon:"Move Speed : High"},
 {name:"Animated Statue",hp:"15+5×D",dmg:["W","W"],armour:[0,"D"],acc:"(9+D)×Acc",eva:"4+D",addon:"Carries weapon"}, 
 {name:"Armoured Statue",hp:"30+10×D",dmg:["W","W"],armour:["A","A+D"],acc:"(9+D)×Acc",eva:"4+D",addon:"Carries weapon and armour"}
]
const MobDataArrayMiniBoss= [
 {name:"Fetid Rat",hp:20,dmg:[1,4],armour:[0,2],acc:12,eva:5,addon:"Applies caustic ooze"}, 
 {name:"Gnoll Trickster",hp:20,dmg:[1,6],armour:[0,2],acc:16,eva:5,addon:"Ranged : Flees. Applies burning and poisoned"},
 {name:"Greatcrab",hp:25,dmg:[1,7],armour:[0,4],acc:12,eva:"N/A",addon:"Immune to non-surprise attacks. Move Speed:0.5"},
 {name:"Rot Fruit",hp:80,dmg:["N/A","N/A"],armour:[0,5],acc:"N/A",eva:0,addon:""},
 {name:"Rot Lasher",hp:80,dmg:[10,20],armour:[0,8],acc:25,eva:0,addon:"Applies crippled. Attack Speed:0.5"},
 {name:"Baby Elemental",hp:60,dmg:[10,12],armour:[0,5],acc:15,eva:12,addon:"Applies burning"},
 {name:"Gnoll Guard",hp:35,dmg:[6,12],armour:[0,6],acc:20,eva:15,addon:"Range: 2 : Deals 16-22 damage at range"},
 {name:"Gnoll Sapper",hp:45,dmg:[1,6],armour:[0,6],acc:18,eva:15,addon:"Applies paralysis"}, 
 {name:"Gnoll Geomancer",hp:150,dmg:[3,6],armour:[0,6],acc:20,eva:0,addon:"Applies paralysis"},
 {name:"Crystal Wisp",hp:"30",dmg:[5,10],armour:[0,5],acc:18,eva:16,addon:"Ranged"},
  {name:"Crystal Guardian",hp:100,dmg:[10,16],armour:[0,10],acc:20,eva:14,addon:"Move Speed reduced in cramped regions"}, 
 {name:"Crystal Spire",hp:300,dmg:[8,15],armour:[0,0],acc:"∞",eva:0,addon:"Only takes damage from pickaxe"},
]
const MobDataArrayBoss= [
 {name:"Goo",hp:100,dmg:[1,12],armour:[0,2],acc:15,eva:10,addon:"Ranged : 3 blocks : 3-36 armour piercing damage. Heals in water"}, 
 {name:"Tengu",hp:200,dmg:[6,12],armour:[0,5],acc:20,eva:15,addon:"Ranged. Flying"},
 {name:"DM–300",hp:300,dmg:[15,25],armour:[0,10],acc:20,eva:15,addon:"Supercharged: Doubles move speed"},
 {name:"Pylon",hp:50,dmg:[10,20],armour:[0,0],acc:"∞",eva:0,addon:"Ignore armour. Soft damage cap of 15"},
 {name:"Yodney, King of Dwarves",hp:300,dmg:[15,25],armour:[0,10],acc:26,eva:22,addon:"Summons all dwarves"},
 {name:"Yog-Dweza",hp:1000,dmg:[20,30],armour:[0,0],acc:"∞",eva:0,addon:"Ranged. Armour piercing"},
 {name:"Burning Fist",hp:300,dmg:[18,36],armour:[0,15],acc:36,eva:20,addon:"Applies burning"},
 {name:"Soiled Fist",hp:300,dmg:[18,36],armour:[0,15],acc:36,eva:20,addon:"Applies rooted. Damage reduction based on nearby grass"},
 {name:"Rotten Fist",hp:300,dmg:[18,36],armour:[0,15],acc:36,eva:20,addon:"Applies caustic ooze. Heals in water"}, 
 {name:"Rusted Fist",hp:300,dmg:[22,44],armour:[0,15],acc:36,eva:20,addon:"Applies crippled"},
 {name:"Bright Fist",hp:300,dmg:[18,36],armour:[0,15],acc:36,eva:20,addon:"Ranged: 10-20 armour piercing damage. Applies blinded"},
  {name:"Dark Fist",hp:300,dmg:[18,36],armour:[0,15],acc:36,eva:20,addon:"Ranged: 10-20 armour piercing damage. Extinguishes torch"}, 
 {name:"God's Larvae",hp:20,dmg:[15,25],armour:[0,4],acc:30,eva:20,addon:""},
]
//Creates divs for bestiary
function GenerateBestiary() {
    const template = document.getElementById('MobTemplate');
    MobDataArraySewer.forEach(mob => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.MobName').innerText = mob.name;
        clone.querySelector('.MobHP').innerText = mob.hp
        clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
        clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
        clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
        clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
        clone.querySelector('.MobAcc').innerText = mob.acc;
        clone.querySelector('.MobEva').innerText = mob.eva;
        clone.querySelector('.MobExtraInfo').innerText = mob.addon;

        document.getElementById('BestiaryListSewer').appendChild(clone);
    });
    MobDataArrayPrison.forEach(mob => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.MobName').innerText = mob.name;
        clone.querySelector('.MobHP').innerText = mob.hp;
        clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
        clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
        clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
        clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
        clone.querySelector('.MobAcc').innerText = mob.acc;
        clone.querySelector('.MobEva').innerText = mob.eva;
        clone.querySelector('.MobExtraInfo').innerText = mob.addon;

        document.getElementById('BestiaryListPrison').appendChild(clone);
    });
    MobDataArrayCaves.forEach(mob => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.MobName').innerText = mob.name;
        clone.querySelector('.MobHP').innerText = mob.hp;
        clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
        clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
        clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
        clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
        clone.querySelector('.MobAcc').innerText = mob.acc;
        clone.querySelector('.MobEva').innerText = mob.eva;
        clone.querySelector('.MobExtraInfo').innerText = mob.addon;

        document.getElementById('BestiaryListCaves').appendChild(clone);
    });
    MobDataArrayCity.forEach(mob => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.MobName').innerText = mob.name;
    clone.querySelector('.MobHP').innerText = mob.hp;
    clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
    clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
    clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
    clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
    clone.querySelector('.MobAcc').innerText = mob.acc;
    clone.querySelector('.MobEva').innerText = mob.eva;
    clone.querySelector('.MobExtraInfo').innerText = mob.addon;
    
    document.getElementById('BestiaryListCity').appendChild(clone);
    });
    MobDataArrayHalls.forEach(mob => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.MobName').innerText = mob.name;
    clone.querySelector('.MobHP').innerText = mob.hp;
    clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
    clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
    clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
    clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
    clone.querySelector('.MobAcc').innerText = mob.acc;
    clone.querySelector('.MobEva').innerText = mob.eva;
    clone.querySelector('.MobExtraInfo').innerText = mob.addon;
    
    document.getElementById('BestiaryListHalls').appendChild(clone);
    });
    MobDataArrayNonRegional.forEach(mob => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.MobName').innerText = mob.name;
    clone.querySelector('.MobHP').innerText = mob.hp;
    clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
    clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
    clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
    clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
    clone.querySelector('.MobAcc').innerText = mob.acc;
    clone.querySelector('.MobEva').innerText = mob.eva;
    clone.querySelector('.MobExtraInfo').innerText = mob.addon;
    
    document.getElementById('BestiaryListNonRegional').appendChild(clone);
    });
    MobDataArrayMiniBoss.forEach(mob => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.MobName').innerText = mob.name;
    clone.querySelector('.MobHP').innerText = mob.hp;
    clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
    clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
    clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
    clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
    clone.querySelector('.MobAcc').innerText = mob.acc;
    clone.querySelector('.MobEva').innerText = mob.eva;
    clone.querySelector('.MobExtraInfo').innerText = mob.addon;
    
    document.getElementById('BestiaryListMiniBoss').appendChild(clone);
    });
    MobDataArrayBoss.forEach(mob => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.MobName').innerText = mob.name;
    clone.querySelector('.MobHP').innerText = mob.hp;
    clone.querySelector('.MobMinDamage').innerText = mob.dmg[0];
    clone.querySelector('.MobMaxDamage').innerText = mob.dmg[1];
    clone.querySelector('.MobMinArmour').innerText = mob.armour[0];
    clone.querySelector('.MobMaxArmour').innerText = mob.armour[1];
    clone.querySelector('.MobAcc').innerText = mob.acc;
    clone.querySelector('.MobEva').innerText = mob.eva;
    clone.querySelector('.MobExtraInfo').innerText = mob.addon;
    
    document.getElementById('BestiaryListBoss').appendChild(clone);
    });
    
}


GenerateBestiary();