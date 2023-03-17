import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js";
import { bcwAPI } from "./AxiosService.js"


class ImagesService {

  async getImage() {
    const res = await bcwAPI.get('images')
    appState.image = new Image(res.data)
  }
}

export const imagesService = new ImagesService()