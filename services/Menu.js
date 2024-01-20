import API from "./API";

export async function loadData() {
    app.store.menu = await API.fetchMenu();
}