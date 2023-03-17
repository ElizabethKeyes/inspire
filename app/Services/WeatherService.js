import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwAPI } from "./AxiosService.js"


class WeatherService {

  async getWeather() {
    const res = await bcwAPI('weather')
    console.log(res.data);
    appState.weather = new Weather(res.data)
    console.log(appState.weather);
  }
}

export const weatherService = new WeatherService()