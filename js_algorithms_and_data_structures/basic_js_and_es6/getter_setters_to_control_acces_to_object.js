// Only change code below this line
class Thermostat {
	constructor(numFahrenheit) {
		this.fahrenheit = numFahrenheit;
	}
	// getter
	get temperature() {
		//FAR to CEL -> C = 5/9 * (F - 32)
		return 5 / 9 * (this.fahrenheit - 32);
	}

	// setter
	set temperature(celsiusTemp) {
		//CEL TO FAR -> F = C * 9.0 / 5 + 32
		this.fahrenheit = celsiusTemp * 9.0 / 5 + 32;
	}
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);

let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
console.log(thermos);

temp = thermos.temperature; // 26 in Celsius
console.log(thermos);
