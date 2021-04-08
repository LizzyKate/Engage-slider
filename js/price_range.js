// mobile mtu range
var mobile_mtu_desktop = document.querySelector(".input-range");
// mobile  data range
var mobile_data_desktop = document.querySelector(".data_range_2");
// mobile mtu range value
var mtuValue_desktop = document.querySelector(".user_range_desktop");
// mobile data range value
var dataValue_desktop = document.querySelector(".data_range_desktop");
// color of mtu input
const mtuColor_desktop = document.querySelector("#my-input");
// total price
const totalAmount_desktop = document.querySelector(".__price_desktop");
// mtu  input value
const mtu_input_desktop = document.querySelector(".__number");
// data input value
const mte_input_desktop = document.querySelector(".__number2");

// mtu
mtuValue_desktop.innerHTML = 2500 + " MTU per month";

// Mtu range
mobile_mtu_desktop.addEventListener("input", function () {
	mtuValue_desktop.innerHTML = this.value + " MTU per month";
	mtu_input_desktop.value = this.value;
	console.log(calculatePlan(mobile_data_desktop.value, this.value));
	totalAmount_desktop.innerHTML = `${moneyFormat(
		calculatePlan(mobile_data_desktop.value, this.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// mtu input
mtu_input_desktop.addEventListener("input", function () {
	mtuValue_desktop.innerHTML = this.value + " MTU per month";
	mobile_mtu_desktop.value = this.value;
	console.log(calculatePlan(mobile_data_desktop.value, this.value));
	var user = ((+this.value - 2500) / (50000 - 2500)) * 100;
	mtuColor_desktop.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		user +
		"%, #dee5ef4d " +
		user +
		"%, #dee5ef4d 100%)";
	totalAmount_desktop.innerHTML = `${moneyFormat(
		calculatePlan(mobile_data_desktop.value, this.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// data event value
dataValue_desktop.innerHTML = 100000 + " Data Event per month";
mobile_data_desktop.addEventListener("input", function () {
	mte_input_desktop.value = this.value;
	dataValue_desktop.innerHTML = this.value + " Data Event per month";
	console.log(calculatePlan(this.value, mobile_mtu_desktop.value));
	totalAmount_desktop.innerHTML = `${moneyFormat(
		calculatePlan(this.value, mobile_mtu_desktop.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

mte_input_desktop.addEventListener("input", function () {
	dataValue_desktop.innerHTML = this.value + " MTU per month";
	mobile_data_desktop.value = this.value;
	console.log(calculatePlan(this.value, mobile_mtu_desktop.value));
	var user = ((+this.value - 100000) / (2000000 - 100000)) * 100;
	dataColor_desktop.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		user +
		"%, #dee5ef4d " +
		user +
		"%, #dee5ef4d 100%)";
	totalAmount_desktop.innerHTML = `${moneyFormat(
		calculatePlan(this.value, mobile_mtu_desktop.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// mtu input color

mtuColor_desktop.value = 2500;
const mV = ((2500 - 2500) / (50000 - 2500)) * 100;
mtuColor_desktop.style.background =
	"linear-gradient(to right, #32BA85 0%, #32BA85 " +
	mV +
	"%, #dee5ef4d " +
	mV +
	"%, #dee5ef4d 100%)";

mtuColor_desktop.oninput = function () {
	console.log(this.value, this.min, this.max, this.min);
	var user = ((this.value - this.min) / (this.max - this.min)) * 100;

	this.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		user +
		"%, #dee5ef4d " +
		user +
		"%, #dee5ef4d 100%)";
};

// data input color
const dataColor_desktop = document.querySelector("#my-input2");
dataColor_desktop.value = 100;
const dV = ((100 - 1) / (2000000 - 1)) * 100;
dataColor_desktop.style.background =
	"linear-gradient(to right, #32BA85 0%, #32BA85 " +
	dV +
	"%, #dee5ef4d " +
	dV +
	"%, #dee5ef4d 100%)";

dataColor_desktop.oninput = function () {
	console.log(this.value, this.min, this.max, this.min);
	var event = ((this.value - this.min) / (this.max - this.min)) * 100;

	this.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		event +
		"%, #dee5ef4d " +
		event +
		"%, #dee5ef4d 100%)";
};
