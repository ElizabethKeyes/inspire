

export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get QuoteTemplate() {
    return `
    <h4 class="text-center quote mb-3">"${this.content}"</h4>
    <h6 class="mb-4 author">${this.author}</h6>`
  }
}