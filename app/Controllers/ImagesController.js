import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage() {
  let background = appState.image
  document.body.style.backgroundImage = `url(${background.url})`
}

export class ImagesController {
  constructor() {
    this.getImage()
    appState.on('image', _drawImage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}