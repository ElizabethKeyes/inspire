import { appState } from "../AppState.js"
import { User } from "../Models/User.js"
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
    // appState.todos = []
    // appState.emit('count')
    await todosService.deleteUser()
  }

  changeFont(font) {
    appState.user.font = font
    console.log(appState.user)
    saveState('user', appState.user)
  }
}

export const usersService = new UsersService()