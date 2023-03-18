

export class Clock {
  constructor() {
    this.time = (new Date().getHours() + ':' + new Date().getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 }))
  }

  //   static formatTime(){
  //     if
  //   }
}