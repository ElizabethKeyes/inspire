import { appState } from "../AppState.js"
import { User } from "../Models/User.js";
import { usersService } from "../Services/UsersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawUser() {
  console.log(appState.user);
  if (appState.user != null && appState.user.name != undefined) {
    setHTML('user', appState.user.Template)
  } else setHTML('user', User.form())
}

export class UsersController {
  constructor() {
    _drawUser()
    appState.on('user', _drawUser)

  }

  newUser() {
    window.event.preventDefault()
    let form = window.event.target
    // @ts-ignore
    let newUser = getFormData(form)
    usersService.newUser(newUser)
  }

  deleteUser() {
    window.event.preventDefault()
    usersService.deleteUser()
  }
}