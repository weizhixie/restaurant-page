import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu-page.js";

(() => {
    loadHomePage();
    loadMenuPage();
})();