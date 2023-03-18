import { User } from "./Models/User.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Image').Image|null} */
  image = null

  /** @type {import('./Models/Quote').Quote|null} */
  quote = null

  /** @type {import('./Models/Weather').Weather|null} */
  weather = null

  isCelsius = false

  /** @type {import('./Models/Todo').Todo[]} */
  todos = []

  /** @type {import('./Models/User').User|null} */
  user = loadState('user', User) || null

  militaryTime = false
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
