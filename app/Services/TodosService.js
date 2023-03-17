import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { todoAPI } from "./AxiosService.js"


class TodosService {

  async getTodos() {
    const res = await todoAPI.get('')
    appState.todos = res.data.map(t => new Todo(t))
    console.log(res.data);
    console.log(appState.todos, 'fetched todos');
  }
  async addTodo(description) {
    let newTodo = new Todo(description)
    console.log(newTodo);
    const res = await todoAPI.post('', newTodo)
    appState.todos.push(new Todo(res.data))
    appState.emit('todos')
  }

  async delete(id) {
    const res = await todoAPI.delete(`${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }
}

export const todosService = new TodosService()