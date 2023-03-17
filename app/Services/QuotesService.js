import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { bcwAPI } from "./AxiosService.js"


class QuotesService {
  async getQuote() {
    const res = await bcwAPI(`quotes`)
    appState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()