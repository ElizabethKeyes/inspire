import { appState } from "../AppState.js"


export class Clock {
  constructor() {
    this.time = Clock.formatTime()
    // this.time = (new Date().getHours() + ':' + new Date().getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 }))
  }

  static formatTime() {
    if (new Date().getHours() > 12 && appState.militaryTime == false) {
      return (new Date().getHours() - 12) + ':' + new Date().getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })
    } else if (new Date().getHours() <= 12 || appState.militaryTime == true) {
      return (new Date().getHours()) + ':' + new Date().getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })
    }

  }
}