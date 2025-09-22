import grilledChickenImg from "./images/grilled-chicken.jpg";
import grilledSteakImg from "./images/grilled-steak.jpg";
import grilledSalmonImg from "./images/grilled-salmon.jpg";
import grilledShrimpImg from "./images/grilled-shrimp.jpg";
import grilledLambChopsImg from "./images/grilled-lamb-chops.jpg";
import grilledPorkChopsImg from "./images/grilled-pork-chops.jpg";

const meals = [{
    title: "Grilled Chicken",
    description: "Succulent chicken breast, perfectly seasoned and char-grilled.",
    image: grilledChickenImg,
    price: 22.00,
}, {
    title: "Grilled Steak",
    description: "Tender cut, flame-seared with a charred crust.",
    image: grilledSteakImg,
    price: 30.50,
}, {
    title: "Grilled Salmon",
    description: "Fresh fillet with a smoky, buttery flavor.",
    image: grilledSalmonImg,
    price: 28.00,
}, {
    title: "Grilled Shrimp",
    description: "Marinated and skewered, bursting with smoky flavor.",
    image: grilledShrimpImg,
    price: 28.50,
}, {
    title: "Grilled Lamb Chops",
    description: "Tender and juicy with a smoky, charred finish.",
    image: grilledLambChopsImg,
    price: 27.50,
}, {
    title: "Grilled Pork Chops",
    description: "Perfectly seasoned and flame-grilled for rich flavor.",
    image: grilledPorkChopsImg,
    price: 27.00,
},
];

export function loadMenuPage() {
    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    const menuHeading = document.createElement("h2");
    menuHeading.classList.add("menu-heading");
    menuHeading.textContent = "Delicious From the Grill";
    menuSection.appendChild(menuHeading);

    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("menu-card-container");

    meals.forEach((meal) => {
        menuCardContainer.appendChild(createMenuCard(meal));
    });
    menuSection.appendChild(menuCardContainer);

    const content = document.querySelector("#content");
    content.appendChild(menuSection);
}

function createMenuCard(meal) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const menuCardImg = document.createElement("img");
    menuCardImg.classList.add("menu-card-img");
    menuCardImg.src = meal.image;
    menuCardImg.alt = meal.title;

    const menuCardTitleWrapper = document.createElement("div");

    const menuCardTitle = document.createElement("h3");
    menuCardTitle.classList.add("menu-card-title");
    menuCardTitle.textContent = meal.title;

    const menuCardPrice = document.createElement("p");
    menuCardPrice.classList.add("menu-card-price");
    menuCardPrice.textContent = meal.price.toLocaleString("en-US", { style: "currency", currency: "USD" });

    const menuCardDescription = document.createElement("p");
    menuCardDescription.classList.add("menu-card-body");
    menuCardDescription.textContent = meal.description;

    menuCardTitleWrapper.append(menuCardTitle, menuCardPrice);
    menuCard.append(menuCardImg, menuCardTitleWrapper, menuCardDescription);

    return menuCard;
}