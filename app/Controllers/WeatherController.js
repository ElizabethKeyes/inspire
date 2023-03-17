import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  console.log('drawing');
  setHTML('weather', appState.weather.WeatherTemplate)
  console.log(appState.weather.icon, 'icon')
}

export class WeatherController {
  constructor() {
    console.log('hello from weather controller');
    this.getWeather()
    appState.on('weather', _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}