import { TemperatureVO } from "../valueobjects/TemperatureVO";

/**
 * Converts a temperature to the unit to be converted
 * @param {TemperatureVO} temperature - Objectthat contains a vale and a unit representing a temperature
 * @param {string} unit - The unit to convert the temperature
 * @returns {TemperatureVO} - The converted temperature
 */

const TemperatureUtil = () => {
    function convert(temperature, unit) {
        if (temperature.unit == "CELSIUS" && unit == "FAHRENHEIT") {
            let convertedValue = (temperature.value * 9/5) + 32;
            return new TemperatureVO(convertedValue, unit);
        } else if (temperature.unit == "FAHRENHEIT" && unit == "CELSIUS") {
            let convertedValue = (temperature.value - 32) * 5/9;
            return new TemperatureVO(convertedValue, unit);
        } else {
            return new TemperatureVO(temperature.value, unit);
        }
    }

    const tries = 0;
    return { convert };
}

export default TemperatureUtil;