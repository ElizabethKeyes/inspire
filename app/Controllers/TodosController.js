import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
  let todos = appState.todos
  let template = ''
  todos.forEach(t => template += t.ListTemplate)
  setHTML('todo-list', template)
}

function _drawCount() {
  let count = 0
  appState.todos.forEach(t => t.completed ? '' : count++)
  setText('todo-count', count)
}

export class TodosController {
  constructor() {
    this.getTodos()
    appState.on('todos', _drawTodos)

  }


  async getTodos() {
    try {
      await todosService.getTodos()
      _drawCount()
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
      // @ts-ignore
      form.reset()
      await todosService.addTodo(description)
      _drawCount()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }


  }
  async delete(id) {
    try {
      if (await Pop.confirm('Are you sure you want to remove this todo?')) {
        await todosService.delete(id)
        Pop.toast('todo removed!', 'success', 'top', 1500)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async complete(id) {
    try {
      await todosService.complete(id)
      _drawCount()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}