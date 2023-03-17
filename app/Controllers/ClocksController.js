import { Clock } from "../Models/Clock.js";
import { setText } from "../Utils/Writer.js";


export class ClocksController {

  constructor() {
    setInterval(this.drawTime, 1000)
  }

  drawTime() {
    setText('clock', new Clock().time)
  }
}