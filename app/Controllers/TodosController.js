import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let todos = appState.todos
  let template = ''
  todos.forEach(t => template += t.ListTemplate)
  setHTML('todo-list', template)
}

export class TodosController {
  constructor() {
    this.getTodos()
    appState.on('todos', _drawTodos)
  }


  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
  async addTodo() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      // @ts-ignore
      let description = form.description.value
      await todosService.addTodo(description)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }


  }
  async delete(id) {
    try {
      await todosService.delete(id)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}