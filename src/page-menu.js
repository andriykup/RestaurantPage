export function pageMenu() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')
    const mainImg = document.createElement('img');

    mainImg.src = "./img/mainImg.webp"
    mainImg.style.width = "700px"

    content.appendChild(mainSection);
    mainSection.appendChild(mainImg);
}