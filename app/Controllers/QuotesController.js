import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuote() {
  setHTML('quote', appState.quote.QuoteTemplate)
}

export class QuotesController {
  constructor() {
    this.getQuote()
    appState.on('quote', _drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}