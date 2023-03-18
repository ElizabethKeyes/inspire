import { appState } from "../AppState.js"


export class User {
  constructor(data) {
    this.name = data.name
  }

  get template() {
    return `
    <h2>Hello, ${this.name}</h2>
    `
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