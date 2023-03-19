import { appState } from "../AppState.js"
import { User } from "../Models/User.js"
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";
import { todosService } from "./TodosService.js";

class UsersService {

  newUser(newUser) {
    appState.user = new User(newUser)
    saveState('user', appState.user)
  }

  async deleteUser() {
    appState.user = null
    saveState('user', appState.user)
    await todosService.deleteUser()
  }

  changeFont(font) {
    if (appState.user !== null && appState.user.name != undefined) {
      appState.user.font = font
      console.log(appState.user)
      saveState('user', appState.user)
    } else {
      Pop.toast('Please sign in to save preferences', 'warning', 'top', 1500)
    }
  }
}

export const usersService = new UsersService()