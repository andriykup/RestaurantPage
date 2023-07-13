export function pageHome() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')
    const restName = document.createElement('h1');
    const mainImg = document.createElement('img');

    mainSection.style.flexDirection = "column";
    mainSection.style.alignItems = "center";

    restName.textContent = "Cafe Brunch";
    mainImg.src = "./img/mainImg.jpg"
    mainImg.style.width = "500px"
    mainImg.style.marginTop = "50px";

    content.appendChild(mainSection);
    mainSection.appendChild(restName);
    mainSection.appendChild(mainImg);
}