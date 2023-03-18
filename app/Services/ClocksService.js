import { appState } from "../AppState.js"


class ClocksService {

  toggleFormat() {
    appState.militaryTime = !appState.militaryTime
    appState.emit('militaryTime')
  }
}

export const clocksService = new ClocksService()