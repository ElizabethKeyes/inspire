import { appState } from "../AppState.js"
import { User } from "../Models/User.js";
import { usersService } from "../Services/UsersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";
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

  async deleteUser() {
    window.event.preventDefault()
    if (await Pop.confirm("Are you sure you want to delete your account?", "All your todos will be lost.", "Yes, I'm sure", "warning"))
      await usersService.deleteUser()
  }
}