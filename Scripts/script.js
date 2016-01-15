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
	weather = ["Sunny", "Cloudy", "Foggy", "Rain!"];
	currentWeather = weather[Math.floor(Math.random() * weather.length)];
	return currentWeather;	
}

function calcProductCost(quantity) {
	var price;
	var quantity1;
	var total;
	price = [.15, .10, .05];
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

function calcCloudyWeather(currentTemp, price, totalCups) {
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

function calcBudgetInventory(budget, inventoryOutput, htmlInventory, sellButton) {
	var updateBudget;
	updateBudget = budget - inventoryOutput;
	while (updateBudget < 0) {
	alert("You do not have enough money in your budget to make that purchase, select a lower amount.")
	updateBudget = budget;
	document.getElementById(htmlInventory).innerHTML="";
	}	
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
	if (budget <= 1) {
		alert("Sorry! You do no have enough money to continue playing.  Try again!");
		reloadPage();
	}
}

function setBackground(currentWeather) {
	var weatherCondition;
	weatherCondition = ["Sunny", "Cloudy", "Foggy", "Rain!"];
    if (currentWeather === weatherCondition[0]){
	document.body.style.backgroundImage = "url(http://www.fslocal.com/blog/wp-content/uploads/2013/06/104259904.jpg)";
	}
	else if (currentWeather === weatherCondition[1]) {
	document.body.style.backgroundImage = "url(https://0d47eeef2abf05521f71-1e80f65b3c6327b7cb4b0619fd21f75b.ssl.cf2.rackcdn.com/4d0b25fe872a9b57f2689803d9e1a929.jpg)";
	}
	else if (currentWeather === weatherCondition[2]) {
	document.body.style.backgroundImage = "url(https://ripplesinapoolofhighstrangeness.files.wordpress.com/2014/03/p10002361.jpg)";	
	}
	else if (currentWeather === weatherCondition[3]) {
	document.body.style.backgroundImage = "url(http://www.hdwallpapersact.com/wp-content/gallery/rainy-day/dark-rainy.jpg)";	
	}
}

function endDay() {
	alert("You have reached the end of " + days[i] + ", click 'START DAY' to begin a new day");
}

function resetBoard(htmlTemperature, htmlWeather, htmlInventory, htmlCups, htmlGross, htmlPriceInput, productList) {
	document.getElementById(htmlTemperature).innerHTML="";
	document.getElementById(htmlWeather).innerHTML="";
	document.getElementById(htmlInventory).innerHTML="";
	document.getElementById(htmlCups).innerHTML="";
	document.getElementById(htmlGross).innerHTML="";
	document.getElementById(htmlPriceInput).value="";
	document.getElementById(productList).selectedIndex=0;
	
}


function disableStartButton(startDayButton){
	document.getElementById(startDayButton).disabled=true;
}

function enableStartButton(startDayButton){
	document.getElementById(startDayButton).disabled=false;
}

function disableProductButton(productButton){
	document.getElementById(productButton).disabled=true;
}

function enableProductButton(productButton) {
	document.getElementById(productButton).disabled=false;
}

function disableSellButton(sellButton){
	document.getElementById(sellButton).disabled=true;
}

function enableSellButton(sellButton) {
	document.getElementById(sellButton).disabled=false;
}



function main() {
var startDayButton;
var productButton;
var sellButton;
	
var inventory;	
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


enableStartButton("startDayButton");
disableProductButton("productButton");
disableSellButton("sellButton");
resetBoard("htmlTemperature", "htmlWeather", "htmlInventory", "htmlCups", "htmlGross", "htmlPriceInput", "productList");

startDayButton = document.getElementById("startDayButton");



startDayButton.onclick= function (){
resetBoard("htmlTemperature", "htmlWeather", "htmlInventory", "htmlCups", "htmlGross", "htmlPriceInput", "productList");
displayBudget("htmlBudget", budget);
currentTemperature = (calcTemperature());
displayTemperature("htmlTemperature", currentTemperature);
currentWeather = (calcWeatherForcast());
setBackground(currentWeather);
displayWeather("htmlWeather", currentWeather);
disableStartButton("startDayButton");
enableProductButton("productButton");
}

productButton = document.getElementById("productButton");
productButton.onclick= function() {
inventory = document.getElementById("productList");
inventoryInput = inventory.options[inventory.selectedIndex].value;
displayInventory("htmlInventory", inventoryInput);
inventoryOutput = (calcProductCost(inventoryInput));

budget = calcBudgetInventory(budget, inventoryOutput, "htmlInventory", "sellButton");
displayBudget("htmlBudget", budget);
disableProductButton("productButton")
enableSellButton("sellButton");
}




sellButton = document.getElementById("sellButton");
sellButton.onclick= function() {
priceInput = document.getElementById("htmlPriceInput").value;

if (currentWeather === "Sunny"){
	totalCupsSold = calcSunnyWeather(currentTemperature, priceInput, inventoryInput);
}
else if (currentWeather === "Cloudy" || currentWeather === "Foggy") {
	totalCupsSold = calcCloudyWeather(currentTemperature, priceInput, inventoryInput);
}
else if (currentWeather === "Rain!") {
	totalCupsSold = calcRainWeather(currentTemperature, priceInput, inventoryInput);
}
displayCupsSold("htmlCups", totalCupsSold);

grossProfit = calcGrossProfit(priceInput, totalCupsSold);
displayGrossProfit("htmlGross", grossProfit);

budget = calcBudgetGross(budget, grossProfit);
displayBudget("htmlBudget", budget);
disableSellButton("sellButton");
enableStartButton("startDayButton");

checkGameStatus(budget);
endDay();

}



}

main();







/*




function weatherAlertMessage(temperature) {
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
else if (currentWeather === "Cloudy") {
	totalCupsSold = calcCloudyWeather(currentTemperature, priceInput, inventoryInput);
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

//calcInventoryMessage = "How many glasses of lemonade would you like to purchase: 25 for $0.30, 50 for $0.25, or 100 for $.20?";


startGameMessage = "Would you like to open for business? 'Y' for Yes or 'N' for No.";
startGameInput = userInputMessage(startGameMessage);



while (startGameInput === "Y" || startGameInput === "y") {



startGameInput = userInputMessage(startGameMessage);

priceMessage = "How much would you like to sell each glass of lemonade for?";
*/