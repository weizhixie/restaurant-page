export function loadHomePage() {
    const heroSection = document.createElement("section");
    heroSection.classList.add("hero-section");

    const heroTextWrapper = document.createElement("div");
    heroTextWrapper.classList.add("hero-text-wrapper");
    heroSection.appendChild(heroTextWrapper);

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("hero-heading");
    heroHeading.textContent = `More Than a Meal — It's a Celebration`;
    heroTextWrapper.appendChild(heroHeading);

    const heroPara = document.createElement("p");
    heroPara.classList.add("hero-para");
    heroPara.textContent = `This isn't just dining, it's an experience. From the 
    first sip to the last bite, everything is executed with perfection. It's 
    the kind of place that leaves you planning your next visit before you've 
    even finished your meal.`;
    heroTextWrapper.appendChild(heroPara);

    const heroOrderBtn = document.createElement("button");
    heroOrderBtn.classList.add("hero-order-btn");
    heroOrderBtn.textContent = `Order Now`;
    heroTextWrapper.appendChild(heroOrderBtn);

    const content = document.querySelector("#content");
    content.appendChild(heroSection);
}