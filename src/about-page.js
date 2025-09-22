export function loadAboutPage() {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("aboutSection");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutHeading = document.createElement("h2");
    aboutHeading.classList.add("about-heading");
    aboutHeading.textContent = "About us";

    const aboutUs = document.createElement("p");
    aboutUs.textContent = `At Grill & Thrill, we believe that great food brings
    people together. Our passion for grilling shines through in every dish, from 
    perfectly seared steaks to smoky, tender ribs and fresh, flavorful sides. 
    Using only the highest-quality ingredients and time-honored techniques, 
    we create meals that are bold, satisfying, and unforgettable. Whether 
    you're joining us for a family dinner, a night out with friends, or 
    a quick bite to eat, our warm, welcoming atmosphere makes every visit 
    feel like home. Come taste the difference that care, flavor, and fire can make.`;

    aboutContainer.append(aboutHeading, aboutUs);
    aboutSection.appendChild(aboutContainer);

    const content = document.querySelector("#content");
    content.appendChild(aboutSection);
}