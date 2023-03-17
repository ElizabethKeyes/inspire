import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  setHTML('weather', appState.weather.WeatherTemplate)
}

export class WeatherController {
  constructor() {
    this.getWeather()
    appState.on('weather', _drawWeather)
    appState.on('isCelsius', _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  toggleCelsius() {
    weatherService.toggleCelsius()
  }
}