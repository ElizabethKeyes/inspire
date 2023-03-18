import { appState } from "../AppState.js"


export class User {
  constructor(data) {
    this.name = data.name
  }

  get Template() {
    return `
    <h2>${this.Greeting}, ${this.name}</h2>
    `
  }

  get Greeting() {
    if (new Date().getHours() < 12) {
      return 'Good Morning'
    } else if (new Date().getHours() < 18) {
      return 'Good Afternoon'
    } else return 'Good Evening'
  }

  static form() {
    return `
  <form class="mt-2 mb-4 mx-2 d-flex flex-row user-form" onsubmit="app.usersController.newUser()">
  <input type="text" name="name" id="name" minlength="3" maxlength="25" placeholder="Please enter your name.."
    class="form-control inline-input" required>
  <button type="submit" class="btn btn-search name-btn"><i class="mdi mdi-check my-text"></i></button>
</form>`
  }
}