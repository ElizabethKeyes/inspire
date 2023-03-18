import { appState } from "../AppState.js";
import { Clock } from "../Models/Clock.js";
import { clocksService } from "../Services/ClocksService.js";
import { setText } from "../Utils/Writer.js";


export class ClocksController {

  constructor() {
    setInterval(this.drawTime, 1000)
    appState.on('militaryTime', this.drawTime)
  }

  drawTime() {
    setText('clock', new Clock().time)
  }

  toggleFormat() {
    clocksService.toggleFormat()
  }
}