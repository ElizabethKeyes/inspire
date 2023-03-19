

export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description || data
  }

  get ListTemplate() {
    return `
    <div>
      <input type="checkbox" ${this.completed ? 'checked' : ''} class="me-2" onclick="app.todosController.complete('${this.id}')">
      <p class="p-0 my-0 me-2 d-inline">${this.description}</p> <i class="mdi mdi-delete" onclick="app.todosController.delete('${this.id}')"></i>
    </div>
      `
  }
}