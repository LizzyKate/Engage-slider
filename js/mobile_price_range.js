// mobile mtu range
var mobile_mtu = document.querySelector(".mobile_input_mtu");
// mobile  data range
var mobile_data = document.querySelector(".mobile_input_data");
// mobile mtu range value
var mtuValue = document.querySelector(".mobile_mtu_no");
// mobile data range value
var dataValue = document.querySelector(".mobile_data_no");
// color of mtu input
const mtuColor = document.querySelector("#mtu-input");
// total price
const totalAmount = document.querySelector(
	"div.mobile_range.mt-10 > div > div:nth-child(5) > p:nth-child(1)"
);
// mtu  input value
const mtu_input = document.querySelector(".mtu_number");
// data input value
const mte_input = document.querySelector(".data_number");

// mtu
mtuValue.innerHTML = 2500 + " MTU per month";

// Mtu range
mobile_mtu.addEventListener("input", function () {
	mtuValue.innerHTML = this.value + " MTU per month";
	mtu_input.value = this.value;
	console.log(calculatePlan(mobile_data.value, this.value));
	totalAmount.innerHTML = `${moneyFormat(
		calculatePlan(mobile_data.value, this.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// mtu input
mtu_input.addEventListener("input", function () {
	mtuValue.innerHTML = this.value + " MTU per month";
	mobile_mtu.value = this.value;
	console.log(calculatePlan(mobile_data.value, this.value));
	var user = ((+this.value - 2500) / (50000 - 2500)) * 100;
	mtuColor.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		user +
		"%, #dee5ef4d " +
		user +
		"%, #dee5ef4d 100%)";
	totalAmount.innerHTML = `${moneyFormat(
		calculatePlan(mobile_data.value, this.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// data event value
dataValue.innerHTML = 100000 + " Data Event per month";
mobile_data.addEventListener("input", function () {
	mte_input.value = this.value;
	dataValue.innerHTML = this.value + " Data Event per month";
	console.log(calculatePlan(this.value, mobile_mtu.value));
	totalAmount.innerHTML = `${moneyFormat(
		calculatePlan(this.value, mobile_mtu.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

mte_input.addEventListener("input", function () {
	dataValue.innerHTML = this.value + " MTU per month";
	mobile_data.value = this.value;
	console.log(calculatePlan(this.value, mobile_mtu.value));
	var user = ((+this.value - 100000) / (2000000 - 100000)) * 100;
	dataColor.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		user +
		"%, #dee5ef4d " +
		user +
		"%, #dee5ef4d 100%)";
	totalAmount.innerHTML = `${moneyFormat(
		calculatePlan(this.value, mobile_mtu.value).cost
	)}<span style="color: #74859c; font-size: 14px" class="">/month</span>`;
});

// mtu input color

mtuColor.value = 2500;
const m = ((2500 - 1) / (50000 - 1)) * 100;
mtuColor.style.background =
	"linear-gradient(to right, #32BA85 0%, #32BA85 " +
	m +
	"%, #dee5ef4d " +
	m +
	"%, #dee5ef4d 100%)";

mtuColor.oninput = function () {
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
const dataColor = document.querySelector("#data-input");
dataColor.value = 100;
const d = ((100 - 1) / (2000000 - 1)) * 100;
dataColor.style.background =
	"linear-gradient(to right, #32BA85 0%, #32BA85 " +
	d +
	"%, #dee5ef4d " +
	d +
	"%, #dee5ef4d 100%)";

dataColor.oninput = function () {
	console.log(this.value, this.min, this.max, this.min);
	var event = ((this.value - this.min) / (this.max - this.min)) * 100;

	this.style.background =
		"linear-gradient(to right, #32BA85 0%, #32BA85 " +
		event +
		"%, #dee5ef4d " +
		event +
		"%, #dee5ef4d 100%)";
};
