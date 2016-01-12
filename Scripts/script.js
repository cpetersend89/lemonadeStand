"use strict";
function userInputMessage(message) {
	var userInput;
	userInput = prompt(message);
	return userInput;
}

function weatherAlertMessage(temperature) {
	alert("Today's weather is " + temperature + " degrees fahrenheit.");	
}

function calcWeather() {
	return Math.floor((Math.random() * 50) + 50);
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

function inventoryMessage(totalCups) {
	console.log("Total inventory for the day: " + totalCups + " glasses of lemonade.");
}

function calcRandomNum1() {
	return Math.floor((Math.random() * 7) + 3);
}

function calcRandomNum2() {
	return Math.floor((Math.random() * 4) + 1);
}

function calcRandomNum3() {
	return Math.floor((Math.random() * 1) + 1);
}

function calcCupsSold(currentTemp, price, totalCups) {
	var temperature;
	temperature = [59, 69, 79, 89, 100];
	var priceRange;
	priceRange = [.25, .40, .60, .80, 1.25, 2.00];
	var cupsSold;
	
	if (currentTemp <= temperature[0] && price <= priceRange[0]) {
		cupsSold = totalCups / calcRandomNum2();
	}
	else if (currentTemp <= temperature[0] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomNum1();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[1]) {
		cupsSold = 0;
	}
	
	else if (currentTemp <= temperature[1] && price <= priceRange[1]) {
		cupsSold = totalCups / calcRandomNum2();
	}
	else if (currentTemp <= temperature[1] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomNum1();
	}
	else if (currentTemp <= temperature[1] && price > priceRange[2]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[2] && price <= priceRange[2]) {
		cupsSold = totalCups / calcRandomNum2();
	}
	else if (currentTemp <= temperature[2] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomNum1();
	}
	else if (currentTemp <= temperature[2] && price > priceRange[3]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[3] && price <= priceRange[3]) {
		cupsSold = totalCups / calcRandomNum3();
	}
	else if (currentTemp <= temperature[3] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomNum1();
	}
	else if (currentTemp <= temperature[3] && price > priceRange[4]) {
		cupsSold = 0;
	}
		
	else if (currentTemp <= temperature[4] && price <= priceRange[4]) {
		cupsSold = totalCups / calcRandomNum3();
	}
	else if (currentTemp <= temperature[4] && price <= priceRange[5]) {
		cupsSold = totalCups / calcRandomNum1();
	}
	else if (currentTemp <= temperature[0] && price > priceRange[5]) {
		cupsSold = 0;
	}
	
	return cupsSold;
}

function cupsSoldMessage(cupsSold) {
	console.log("You sold " + cupsSold.toFixed(0) + " cups of lemonade today.");
}

function grossProfitMessage(grossProfit) {
	console.log("You earned" + " $" + grossProfit.toFixed(0) + " from lemonade sales.");
}

function newBudgetMessage(budget) {
	console.log("Your new budget for tomorrow is:" + " $" + budget.toFixed(0));
}

function calcGrossProfit(priceSold, cupsSold) {
	var grossProfit;
	grossProfit = priceSold * cupsSold;
	return grossProfit;
}

function main() {
var startGameMessage;
var startGameInput;

var currentTemperature;

var lemonadeInventory;
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

while (startGameInput === "Y" || startGameInput === "y") {

currentTemperature = (calcWeather());
weatherAlertMessage(currentTemperature);


calcInventoryMessage = "How many glasses of lemonade would you like to purchase: 25 for $0.15, 50 for $0.13, or 100 for $.10?";
inventoryInput = userInputMessage(calcInventoryMessage);
inventoryOutput = (calcInventory(inventoryInput));


inventoryMessage(inventoryInput);
budget = budget - (calcInventory(inventoryInput));


priceMessage = "How much would you like to sell each glass of lemonade for?";
priceInput = userInputMessage(priceMessage);
totalCupsSold = calcCupsSold(currentTemperature, priceInput, inventoryInput)
cupsSoldMessage(totalCupsSold);
grossProfit = calcGrossProfit(priceInput, totalCupsSold);
grossProfitMessage(grossProfit);
budget = budget + grossProfit;
newBudgetMessage(budget);

startGameInput = userInputMessage(startGameMessage);

}
}
main();