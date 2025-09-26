import mapImg from "./images/fake-google-map.JPG";

export function renderContactPage() {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");
    contactSection.append(createContactAddress(), createContactUs());

    const content = document.querySelector("#content");
    content.appendChild(contactSection);
}

function createContactAddress() {
    const contactInfo = document.createElement("div");

    const contactAddrTitle = document.createElement("h2");
    contactAddrTitle.classList.add("contact-addr-title");
    contactAddrTitle.textContent = "Address";

    const contactAddr = document.createElement("p");
    contactAddr.classList.add("contact-address");
    contactAddr.textContent = `    Apartment 4C
    221 Simulation Road
    Faker's End, NY 00001
    United States`;

    const contactMap = document.createElement("img");
    contactMap.classList.add("contact-map");
    contactMap.src = mapImg;

    contactInfo.append(contactAddrTitle, contactAddr, contactMap);

    return contactInfo;
}

function createContactUs() {
    const contactUs = document.createElement("div");

    const contactUsTitle = document.createElement("h2");
    contactUsTitle.classList.add("contact-us-title");
    contactUsTitle.textContent = "Contact Us";

    const contactOpenTime = document.createElement("p");
    contactOpenTime.classList.add("contact-open-time");
    contactOpenTime.textContent = `Mon-Thurs: 8am-8pm, 
Fri-Sun: 8am-11pm`;

    contactUs.append(contactUsTitle, contactOpenTime, createContactForm());

    return contactUs;
}

function createContactForm() {
    const fields = [{
        label: { tagName: "label", htmlFor: "name", textContent: "Name" },
        input: { tagName: "input", type: "text", name: "name", id: "name", class: "input-field" }
    }, {
        label: { tagName: "label", htmlFor: "email", textContent: "Email" },
        input: { tagName: "input", type: "email", name: "email", id: "email", class: "input-field" }
    }, {
        label: { tagName: "label", htmlFor: "message", textContent: "Message"},
        input: { tagName: "textarea", name: "message", id: "message", class: "input-field"  }
    }
    ];

    const form = document.createElement("form");
    form.classList.add("contact-form");

    fields.forEach((field) => {
        const div = document.createElement("div");

        const label = document.createElement(field.label.tagName);
        label.htmlFor = field.label.htmlFor;
        label.textContent = field.label.textContent;

        const input = document.createElement(field.input.tagName);
        for (const key in field.input) {
            if (key !== "tagName") {
                input.setAttribute(key, field.input[key]);
            }
        }

        div.append(label, input);
        form.appendChild(div);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Send Message";
    form.appendChild(submitBtn);

    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for contacting us!");
    });

    return form;
}