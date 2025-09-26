import githubImg from "./images/github-mark-white.png";

export function renderFooter() {
    const footer = document.createElement("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright \u00A9 W.Xie ${new Date().getFullYear()}`;

    const githubLink = document.createElement("a");
    githubLink.target = "_blank";
    githubLink.href = "https://github.com/weizhixie";

    const githubIcon = document.createElement("img");
    githubIcon.classList.add("github-icon");
    githubIcon.src = githubImg;
    githubLink.appendChild(githubIcon);

    footer.append(copyright, githubLink);

    const content = document.querySelector("#content");
    content.insertAdjacentElement("afterend", footer);
}