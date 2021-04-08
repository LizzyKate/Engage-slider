const calculatePlan = (dte, dtu) => {
	const result = {
		cost: "0",
		plan: "free",
	};
	if (dtu <= 2499 && dte < 99999) {
		return result;
	} else {
		if (dtu >= 2500 && dte >= 100000 && dtu <= 14999 && dte <= 999999) {
			// use starndard plan
			const cost = 20;
			let extraDteCost = 0;
			let extraDtuCost = 0;
			if (dte > 100000) {
				extraDteCost = Math.fround(((dte - 100000) / 10000) * 3).toFixed(2);
			}
			if (dtu > 2500) {
				extraDtuCost = Math.fround(((dtu - 2500) / 1000) * 5).toFixed(2);
			}
			result.cost = cost + +extraDteCost + +extraDtuCost;
			result.plan = "Standard Plan";
			return result;
		} else if (dtu >= 15000 || dte >= 1000000) {
			const cost = 100;
			let extraDteCost = 0;
			let extraDtuCost = 0;
			if (dte > 1000000) {
				extraDteCost = Math.fround(((dte - 1000000) / 10000) * 3).toFixed(2);
			}
			if (dtu > 15000) {
				extraDtuCost = Math.fround(((dtu - 15000) / 1000) * 5).toFixed(2);
			}
			result.cost = cost + +extraDteCost + +extraDtuCost;
			result.plan = "Growth Plan";
			return result;
		} else {
			return result;
		}
	}
};

const moneyFormat = (amount) => {
	const str = "" + amount;
	if (str.indexOf(",") !== -1) return amount;
	return (
		"$" +
		parseFloat(amount || 0)
			.toFixed(2)
			.replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
	);
};
