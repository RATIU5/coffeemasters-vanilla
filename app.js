import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
