import "./styles.css";
import { renderHomePage } from "./homepage.js";
import { renderMenuPage } from "./menu-page.js";
import { renderAboutPage } from "./about-page.js";
import { renderContactPage } from "./contact-page.js";
import { renderFooter } from "./footer.js";

(() => {
    const content = document.querySelector("#content");
    const navBtns = document.querySelectorAll(".nav-btn");
    const pages = {
        "home-btn": renderHomePage,
        "menu-btn": renderMenuPage,
        "about-btn": renderAboutPage,
        "contact-btn": renderContactPage,
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

    renderHomePage();
    renderFooter();
})();