import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwAPI } from "./AxiosService.js"


class WeatherService {

  async getWeather() {
    const res = await bcwAPI('weather')
    appState.weather = new Weather(res.data)
  }

  toggleCelsius() {
    appState.isCelsius = !appState.isCelsius
  }
}

export const weatherService = new WeatherService()