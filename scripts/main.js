const EffectType = {
	BASERATE: "baseRate",
	MULTIPLIER: "multiplier",
	COST: "cost"
}


class Generator{
	constructor(name,cost,baseRate,amount,multiplier,threshold){
		this.cost = cost;
		this.name = name;
		this.baseRate = baseRate;
		this.amount = amount;
		this.multiplier = multiplier;
		this.threshold = threshold;
		this.associatedElement = null;
	}
	
	GeneratedAmount(){
		return this.amount * Math.round(this.baseRate * this.multiplier);
	}
	OnBuy(){
		this.amount++;
	}	
	SetElement(ele){
		this.associatedElement = ele;
	}
	UpdateElementText(){
		if(!this.associatedElement)
			return;
		var nameText = this.amount === 1 ? this.name : this.name + "s";
		var btnText = `Buy ${this.name} for ${this.cost}. ${this.amount} ${nameText} producing ${this.GeneratedAmount()}/s.`;
		this.associatedElement.innerHTML = btnText;
	}
	UpdateColor(enable){
		if(!this.associatedElement)
			return;
		if(enable){
			this.associatedElement.classList.remove("disable");
		}
		else{
			this.associatedElement.classList.add("disable");
		}
	}
}

class Upgrade{
	constructor(name,cost,target,effect,effectType){ // target is an int -> -1 = player click, others are index of generator in generators array.
		this.name = name;
		this.cost = cost;
		this.target = target;
		this.effect = effect;
		this.effectType = effectType;
		this.bought = false;
	}
	
	OnBuy(){
		if(this.bought)
			return;
		this.bought = true;
	}
	
	SetElement(ele){
		this.associatedElement = ele;
	}
	UpdateElementText(){
		if(!this.associatedElement)
			return;
		var btnText = `Buy ${this.name} for ${this.cost}. cringe text goes here.`;
		this.associatedElement.innerHTML = btnText;
	}
	UpdateColor(enable){
		if(!this.associatedElement)
			return;
		if(enable){
			this.associatedElement.classList.remove("disable");
		}
		else{
			this.associatedElement.classList.add("disable");
		}
	}
	
}
		
// generators
var autoClicker = new Generator("Auto Clicker",25,1,0,1,0);
var pogGenerator = new Generator("Pog generator",125,5,0,1,0);
var pogMachine = new Generator("Pog Machine",500,25,0,1,0);
var twitchChat = new Generator("Twitch chat",5000,100,0,1,0);

var generators = [autoClicker,pogGenerator,pogMachine,twitchChat];

// upgrades
var testUpgrade = new Upgrade("Upgra",0,0,5,EffectType.BASERATE);
availableUpgrades = [];
currentUpgrades = [];
allUpgrades = [];


// create elements
for(i = 0; i < generators.length; i++){	
	let btn = document.createElement("div"); 
	var nameText = generators[i].amount === 1 ? generators[i].name : generators[i].name + "s";
	var btnText = `Buy ${generators[i].name} for ${generators[i].cost}. ${generators[i].amount} ${nameText} producing ${generators[i].GeneratedAmount()}/s.`;
	btn.innerHTML = btnText;
	btn.setAttribute("class","buy-button");
	btn.setAttribute("id","buy-button" + i);
	generators[i].SetElement(btn);

	btn.addEventListener("mousedown",function(e) {
		OnBuyGenerator(e);
	});	
	
	document.getElementById("buy-button-area").appendChild(btn); 
	console.log(i + " _ " + generators[i].name);
}

for(i = 0; i < allUpgrades.length; i++){	
	let btn = document.createElement("div"); 
	var nameText = allUpgrades[i].amount === 1 ? allUpgrades[i].name : allUpgrades[i].name + "s";
	var btnText = `Buy ${allUpgrades[i].name} for ${allUpgrades[i].cost}. cringe text goes here.`;
	btn.innerHTML = btnText;
	btn.setAttribute("class","upgrade-button");
	btn.setAttribute("id","upgrade-button" + i);
	allUpgrades[i].SetElement(btn);

	btn.addEventListener("mousedown",function(e) {
		OnBuyGenerator(e);
	});	
	
	document.getElementById("upgrade-button-area").appendChild(btn); 
	console.log(i + " _ " + allUpgrades[i].name);
}

// initialize elements
var clickText = document.getElementById('pog-amount');
var mainButton = document.getElementById('main-button');
var logText = document.getElementById('log-text');

function BuyUpgradeTest(){
	OnBuyUpgrade(testUpgrade);
}
function OnBuyUpgrade(upgrade){
	upgrade.OnBuy();
	if(upgrade.target === -1){
		console.log("not implemented");
	}
	else{
		switch(upgrade.effectType){
			case EffectType.BASERATE:
				generators[upgrade.target].baseRate += upgrade.effect;
				break;
			case EffectType.MULTIPLIER:
				generators[upgrade.target].multiplier += upgrade.effect;
				break;
			case EffectType.COST:
				console.log("implement me please");
				generators[upgrade.target].cost -= upgrade.effect;
				break;
		}
	}
	}

// set events
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  OnDebugKeyDown(keyName);
});
mainButton.addEventListener('mousedown',function(){IncrementClicks(1)});
mainButton.addEventListener('mousedown',function(){UpdateGeneratorElements()});


// init game
var clickCount = 0;
OnGameStart();



function RunEverySecond(){
	// iterate through generators
	for(i=0; i < generators.length; i++){
		IncrementClicks(generators[i].GeneratedAmount());
	}
	UpdateGeneratorElements();

    setTimeout(RunEverySecond, 1000);
}
RunEverySecond();


// buying stuff
function OnBuyGenerator(e){ // e is event argument
	if(e.target){
		var id = e.target.id.charAt(e.target.id.length-1);
		if(clickCount < generators[id].cost)		
			return;
		generators[id].OnBuy();
		clickCount -= generators[id].cost;
		
		UpdateClickDisplay();		
		UpdateGeneratorElements();
	}
	
}
function OnBuyUpgrade(e){ // e is event argument
	if(e.target){
		var id = e.target.id.charAt(e.target.id.length-1);
		if(clickCount < generators[id].cost)		
			return;
		generators[id].OnBuy();
		clickCount -= generators[id].cost;
		
		UpdateClickDisplay();		
		UpdateGeneratorElements();
	}
}

// Game initialization
function OnGameStart(){
	UpdateLogText('');
}

// Visual stuff
function UpdateLogText(str){
	logText.innerHTML = str;
}

function UpdateGeneratorElements(){
	for(i=0; i < generators.length; i++){
		generators[i].UpdateElementText();
		if(clickCount < generators[i].cost)		
			generators[i].UpdateColor(false);
		else
			generators[i].UpdateColor(true);
	}
}

function UpdateUpgradeElements(){
	for(i=0; i < allUpgrades.length; i++){
		allUpgrades[i].UpdateElementText();
		if(clickCount < allUpgrades[i].cost)		
			allUpgrades[i].UpdateColor(false);
		else
			allUpgrades[i].UpdateColor(true);
	}
}


// Clicking logic

function IncrementClicks(amount = 1){
	clickCount += amount;
	UpdateClickDisplay();
}

function UpdateClickDisplay(){
	clickText.innerHTML = 'Pogs: ' + clickCount;
}

// Debug
var debugMenuKeys = ['i','d','k','f','a']
var currentKeyIndex = 0;

function OnDebugKeyDown(key){
	if(currentKeyIndex === -1)
		return;
	if(key == debugMenuKeys[currentKeyIndex])
		currentKeyIndex++;
	else
		currentKeyIndex = 0;
	if(currentKeyIndex >= debugMenuKeys.length){
		currentKeyIndex = -1;
		ShowDebugMenu();
		alert('Menu de');
	}
}
function ShowDebugMenu(){
	var debugMenu = document.getElementById('debug-menu');
	debugMenu.style.display = 'block';
}

