export function pageContacts() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')
    const mainImg = document.createElement('img');

    mainImg.src = "./img/mainImg.webp"
    mainImg.style.width = "800px"

    content.appendChild(mainSection);
    mainSection.appendChild(mainImg);
}