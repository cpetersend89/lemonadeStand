"use strict";
function userInputMessage(message) {
	var userInput;
	userInput = prompt(message);
	return userInput;
}

function calcTemperature() {
	var temperature;
	var maxTemp;
	var minTemp;
	maxTemp = 100;
	minTemp = 50;
	temperature = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
	return temperature;
}

function calcWeatherForcast() {
	var weather;
	var currentWeather;
	weather = ["Sunny", "Clowdy", "Foggy", "Rain!"];
	currentWeather = weather[Math.floor(Math.random() * weather.length)];
	return currentWeather;	
}

function calcInventory(quantity) {
	var price;
	var quantity1;
	var total;
	price = [.30, .25, .20];
	quantity1 = [25, 50, 100];
	
	if (quantity == quantity1[0]) {
		total = price[0] * quantity;
	}
	else if (quantity == quantity1[1]) {
		total = price[1] * quantity;
	}
	else if (quantity == quantity1[2]) {
		total = price[2] * quantity;
	}
	else {total = 0;
	}
	return total;
}

function calcRandomHighest() {
	return Math.floor((Math.random() * 10) + 5);
}

function calcRandomHigh() {
	return Math.floor((Math.random() * 7) + 3);
}

function calcRandomMedium() {
	return Math.floor((Math.random() * 4) + 3);
}

function calcRandomLow() {
	return Math.floor((Math.random() * 3) + 2);
}

function calcRandomLowest() {
	return Math.floor((Math.random() * 1) + 1);
}

function calcSunnyWeather(currentTemp, price, totalCups) {
	var temperature;
	temperature = [59, 69, 79, 89, 100];
	var priceRange;
	priceRange = [.25, .35, .45, .55, .65, .75];
	var cupsSold;
	
	if (currentTemp <= temperature[0] && price <= priceRange[0]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[0] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[1]) {
		cupsSold = 0;
	}
	
	else if (currentTemp <= temperature[1] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomLow();
	}
	else if (currentTemp <= temperature[1] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[1] && price > priceRange[2]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[2] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomLowest();
	}
	else if (currentTemp <= temperature[2] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[2] && price > priceRange[3]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[3] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomLowest();
	}
	else if (currentTemp <= temperature[3] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[3] && price > priceRange[4]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[4] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomLowest();
	}
	else if (currentTemp <= temperature[4] && price <= priceRange[5]) {
		cupsSold = totalCups / calcRandomLow();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[5]) {
		cupsSold = 0;
	}
	
	return cupsSold;
}

function calcClowdyWeather(currentTemp, price, totalCups) {
	var temperature;
	temperature = [59, 69, 79, 89, 100];
	var priceRange;
	priceRange = [.25, .35, .45, .55, .65, .75];
	var cupsSold;
	
	if (currentTemp <= temperature[0] && price <= priceRange[0]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[0] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[1]) {
		cupsSold = 0;
	}
	
	else if (currentTemp <= temperature[1] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[1] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[1] && price > priceRange[2]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[2] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomLow();
	}
	else if (currentTemp <= temperature[2] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomHigh();
	}
	else if (currentTemp <= temperature[2] && price > priceRange[3]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[3] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomLow();
	}
	else if (currentTemp <= temperature[3] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[3] && price > priceRange[4]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[4] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomLowest();
	}
	else if (currentTemp <= temperature[4] && price <= priceRange[5]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[5]) {
		cupsSold = 0;
	}
	
	return cupsSold;
}

function calcRainWeather(currentTemp, price, totalCups) {
	var temperature;
	temperature = [59, 69, 79, 89, 100];
	var priceRange;
	priceRange = [.25, .35, .45, .55, .65, .75];
	var cupsSold;
	
	if (currentTemp <= temperature[0] && price <= priceRange[0]) {
		cupsSold = totalCups / calcRandomHigh();
	}
	else if (currentTemp <= temperature[0] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[1]) {
		cupsSold = 0;
	}
	
	else if (currentTemp <= temperature[1] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomHigh();
	}
	else if (currentTemp <= temperature[1] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[1] && price > priceRange[2]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[2] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[2] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[2] && price > priceRange[3]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[3] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[3] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[3] && price > priceRange[4]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[4] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomMedium();
	}
	else if (currentTemp <= temperature[4] && price <= priceRange[5]) {
		cupsSold = totalCups / calcRandomHighest();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[5]) {
		cupsSold = 0;
	}
	
	return cupsSold;
}

function calcBudgetInventory(budget, inventoryOutput) {
	var updateBudget;
	updateBudget = budget - inventoryOutput;
	return updateBudget;
}
function calcBudgetGross(budget, grossProfit) {
	var updateBudget;
	updateBudget = budget + grossProfit;
	return updateBudget;
}

function calcGrossProfit(priceSold, cupsSold) {
	var grossProfit;
	grossProfit = priceSold * cupsSold;
	return grossProfit;
}

function displayTemperature(htmlTemperature, currentTemperature) {
	document.getElementById(htmlTemperature).innerHTML=currentTemperature + " degrees fahrenheit";	
}

function displayWeather(htmlWeather, currentWeather) {
	document.getElementById(htmlWeather).innerHTML=currentWeather;	
}

function displayBudget(htmlBudget, scriptBudget) {
	document.getElementById(htmlBudget).innerHTML="$ " + scriptBudget.toFixed(0);
}

function displayInventory(htmlInventory, cupsPurchased) {
	document.getElementById(htmlInventory).innerHTML=cupsPurchased + " cups";
}

function displayCupsSold(htmlCups, cupsSold) {
	document.getElementById(htmlCups).innerHTML=cupsSold.toFixed(0) + " cups";
}

function displayGrossProfit(htmlGross, grossProfit) {
	document.getElementById(htmlGross).innerHTML="$ " + grossProfit.toFixed(0);
}

function reloadPage () {
	location.reload();
}

function checkGameStatus(budget){
	if (budget <= 0) {
		alert("Sorry! You went bankrupt, GAME OVER!");
		reloadPage();
	}
}

function main() {
var startGameMessage;
var startGameInput;

var currentTemperature;
var currentWeather;

var calcInventoryMessage;
var inventoryInput;
var inventoryOutput;

var priceMessage;
var priceInput;

var totalCupsSold;
var grossProfit;

var budget;

budget = 20;

startGameMessage = "Would you like to open for business? 'Y' for Yes or 'N' for No.";
startGameInput = userInputMessage(startGameMessage);

displayBudget("htmlBudget", budget);

while (startGameInput === "Y" || startGameInput === "y") {

currentTemperature = (calcTemperature());
displayTemperature("htmlTemperature", currentTemperature);
currentWeather = (calcWeatherForcast());
displayWeather("htmlWeather", currentWeather);

calcInventoryMessage = "How many glasses of lemonade would you like to purchase: 25 for $0.30, 50 for $0.25, or 100 for $.20?";
inventoryInput = userInputMessage(calcInventoryMessage);
displayInventory("htmlInventory", inventoryInput);
inventoryOutput = (calcInventory(inventoryInput));

budget = calcBudgetInventory(budget, inventoryOutput);
displayBudget("htmlBudget", budget);

priceMessage = "How much would you like to sell each glass of lemonade for?";
priceInput = userInputMessage(priceMessage);

if (currentWeather === "Sunny"){
	totalCupsSold = calcSunnyWeather(currentTemperature, priceInput, inventoryInput);
}
else if (currentWeather === "Clowdy") {
	totalCupsSold = calcClowdyWeather(currentTemperature, priceInput, inventoryInput);
}
else if (currentWeather === "Foggy") {
	totalCupsSold = calcFoggyWeather(currentTemperature, priceInput, inventoryInput);
}
else if (currentWeather === "Rain!") {
	totalCupsSold = calcRainWeather(currentTemperature, priceInput, inventoryInput);
}
displayCupsSold("htmlCups", totalCupsSold);

grossProfit = calcGrossProfit(priceInput, totalCupsSold);
displayGrossProfit("htmlGross", grossProfit);

budget = calcBudgetGross(budget, grossProfit);
displayBudget("htmlBudget", budget);

checkGameStatus(budget);

startGameInput = userInputMessage(startGameMessage);

}
}
main();

/*function weatherAlertMessage(temperature) {
	alert("Today's weather is " + temperature + " degrees fahrenheit.");	
}

weatherAlertMessage(currentTemperature);

function inventoryMessage(totalCups) {
	console.log("Total inventory for the day: " + totalCups + " glasses of lemonade.");
}

inventoryMessage(inventoryInput);

function cupsSoldMessage(cupsSold) {
	console.log("You sold " + cupsSold.toFixed(0) + " cups of lemonade today.");
}

cupsSoldMessage(totalCupsSold);

function grossProfitMessage(grossProfit) {
	console.log("You earned" + " $" + grossProfit.toFixed(0) + " from lemonade sales.");
}

grossProfitMessage(grossProfit);

function newBudgetMessage(budget) {
	console.log("Your new budget for tomorrow is:" + " $" + budget.toFixed(0));
}

budget = budget - inventoryOutput;
budget = budget + grossProfit;


function calcCupsSold(currentTemp, price, totalCups) {
	var temperature;
	temperature = [59, 69, 79, 89, 100];
	var priceRange;
	priceRange = [.25, .35, .45, .55, .65, .75];
	var cupsSold;
	
	if (currentTemp <= temperature[0] && price <= priceRange[0]) {
		cupsSold = totalCups / calcSunnyNum2();
	}
	else if (currentTemp <= temperature[0] && price <= priceRange[1]) {
		cupsSold = totalCups / calcSunnyNum1();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[1]) {
		cupsSold = 0;
	}
	
	else if (currentTemp <= temperature[1] && price <= priceRange[1]) {
		cupsSold = totalCups / calcSunnyNum2();
	}
	else if (currentTemp <= temperature[1] && price <= priceRange[2]) {
		cupsSold = totalCups / calcSunnyNum1();
	}
	else if (currentTemp <= temperature[1] && price > priceRange[2]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[2] && price <= priceRange[2]) {
		cupsSold = totalCups / calcSunnyNum2();
	}
	else if (currentTemp <= temperature[2] && price <= priceRange[3]) {
		cupsSold = totalCups / calcSunnyNum1();
	}
	else if (currentTemp <= temperature[2] && price > priceRange[3]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[3] && price <= priceRange[3]) {
		cupsSold = totalCups / calcSunnyNum3();
	}
	else if (currentTemp <= temperature[3] && price <= priceRange[4]) {
		cupsSold = totalCups / calcSunnyNum1();
	}
	else if (currentTemp <= temperature[3] && price > priceRange[4]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[4] && price <= priceRange[4]) {
		cupsSold = totalCups / calcSunnyNum3();
	}
	else if (currentTemp <= temperature[4] && price <= priceRange[5]) {
		cupsSold = totalCups / calcSunnyNum1();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[5]) {
		cupsSold = 0;
	}
	
	return cupsSold;
}

calcCupsSold(currentTemperature, priceInput, inventoryInput);


*/