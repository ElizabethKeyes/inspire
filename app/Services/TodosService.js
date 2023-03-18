import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { bcwAPI, todoAPI } from "./AxiosService.js"


class TodosService {

  async getTodos() {
    const res = await todoAPI.get('')
    appState.todos = res.data.map(t => new Todo(t))
  }
  async addTodo(description) {
    let newTodo = new Todo(description)
    const res = await todoAPI.post('', newTodo)
    appState.todos.push(new Todo(res.data))
    appState.emit('todos')
  }

  async delete(id) {
    const res = await todoAPI.delete(`${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }

  async complete(id) {
    let todo = appState.todos.find(t => t.id == id)
    todo.completed = !todo.completed
    const res = await todoAPI.put(`${id}`, todo)
    let todoIndex = appState.todos.findIndex(t => t.id == id)
    appState.todos.splice(todoIndex, 1, todo)
    appState.emit('todos')
  }

  async deleteUser() {
    for (let i = 0; i < appState.todos.length; i++) {
      const res = await todoAPI.delete(`${appState.todos[i].id}`)
    }
    appState.todos = []

  }
}

export const todosService = new TodosService()