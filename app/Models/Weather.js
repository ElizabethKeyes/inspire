import { appState } from "../AppState.js"


export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.description = data.weather[0].main
    this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  }

  get CTemp() {
    let cTemp = (this.temp - 273.15)
    return cTemp.toFixed(0)
  }

  get FTemp() {
    let fTemp = (this.temp - 273.15) * 9 / 5 + 32
    return fTemp.toFixed(0)
  }

  get WeatherTemplate() {
    return `
    <p class="p-0 m-0">${appState.isCelsius ? this.CTemp : this.FTemp}°${appState.isCelsius ? 'C' : 'F'}</p><br>
    <p class="p-0 m-0">${this.description}</p><br>
    <img src="${this.icon}">
    `
  }
}