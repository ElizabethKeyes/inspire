import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();

  weatherController = new WeatherController();

  clocksController = new ClocksController();

  todosController = new TodosController();
}

window["app"] = new App();
