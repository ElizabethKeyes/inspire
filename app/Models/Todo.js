

export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description || data
  }

  // TODO figure out how to strike out the text
  get ListTemplate() {
    return `
    <div class="">
      <input type="checkbox" ${this.completed ? 'checked' : ''} class="me-2" onclick="app.todosController.complete('${this.id}')">
      <p class="p-0 my-0 me-2 d-inline">${this.description}</p> <i class="mdi mdi-delete" onclick="app.todosController.delete('${this.id}')"></i>
    </div>
      `
    // return `
    // <div class="col-12 d-flex">
    //   <input type="checkbox" ${this.completed ? 'checked' : ''} class="me-2" onclick="app.todosController.complete('${this.id}')">
    //   <p class="p-0 my-0 me-2 d-inline">${this.description}</p> <i class="mdi mdi-delete" onclick="app.todosController.delete('${this.id}')"></i>
    // </div>
    //   `
  }
}