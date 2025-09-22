import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu-page.js";
import { loadAboutPage } from "./about-page.js";

(() => {
    const content = document.querySelector("#content");
    const navBtns = document.querySelectorAll(".nav-btn");
    const pages = {
        "home-btn": loadHomePage,
        "menu-btn": loadMenuPage,
        "about-btn": loadAboutPage,
    };

    navBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (pages[e.currentTarget.id]) {
                content.textContent = "";
                pages[e.currentTarget.id]();
            } else {
                console.warn("Sorry unknown page", e.currentTarget.id);
            }
        });
    });

    loadHomePage();
})();