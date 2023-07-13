export function pageHome() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')
    const mainImg = document.createElement('img');

    mainImg.src = "./img/mainImg.jpg"
    mainImg.style.width = "500px"

    content.appendChild(mainSection);
    mainSection.appendChild(mainImg);
}