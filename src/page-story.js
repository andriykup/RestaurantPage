export function pageStory() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')
    const mainImg = document.createElement('img');

    mainImg.src = "./img/mainImg.webp"
    mainImg.style.width = "600px"

    content.appendChild(mainSection);
    mainSection.appendChild(mainImg);
}