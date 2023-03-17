

export class Clock {
  constructor() {
    this.time = (new Date().getHours() + ':' + new Date().getMinutes())
  }
}