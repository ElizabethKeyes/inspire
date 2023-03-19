import { appState } from "../AppState.js"
import { User } from "../Models/User.js";
import { usersService } from "../Services/UsersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"

function _checkForUser() {
  if (appState.user !== null && appState.user.name != undefined) {
    document.getElementById('offcanvas-toggle').classList.remove('invisible')
  } else if (appState.user == null || appState.user.name == undefined) {
    document.getElementById('offcanvas-toggle').classList.add('invisible')
  }
}

function _drawUser() {
  if (appState.user != null && appState.user.name != undefined) {
    setHTML('user', appState.user.Template)
  } else setHTML('user', User.form())
}

function _loadFont() {
  document.body.style.fontFamily = appState.user.font
}

export class UsersController {
  constructor() {
    _drawUser()
    _checkForUser()
    _loadFont()
    appState.on('user', _drawUser)
    appState.on('user', _checkForUser)

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
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance('#todosOffCanvas').hide()
  }

  changeFont() {
    window.event.preventDefault()
    let form = window.event.target
    // @ts-ignore
    let font = form.font.value
    document.body.style.fontFamily = font
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance('#fontModal').hide()
    usersService.changeFont(font)
  }

}