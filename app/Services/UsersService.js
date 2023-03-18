import { appState } from "../AppState.js"
import { User } from "../Models/User.js"
import { saveState } from "../Utils/Store.js";


class UsersService {

  newUser(newUser) {
    appState.user = new User(newUser)
    saveState('user', appState.user)
  }

  deleteUser() {
    appState.user = null
    saveState('user', appState.user)
  }
}

export const usersService = new UsersService()