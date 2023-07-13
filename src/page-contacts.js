export function pageContacts() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection');

    
    const contactInfo = document.createElement('div');
    contactInfo.style.display = "grid";

    const contactImg = document.createElement('img');
    contactImg.src = './img/resta.jpg';
    contactImg.style.width = "400px"
    contactImg.style.marginRight = "45px"
    


    const scheduleInfo = document.createElement('p');
    const numberInfo = document.createElement('p');
    const locationinfo = document.createElement('p');

    scheduleInfo.textContent = "Monday: 8am - 12pm";
    numberInfo.textContent = "+99999999999";
    locationinfo.textContent = "Amsterdam, 123-12333";

    mainSection.appendChild(contactImg);
    mainSection.appendChild(contactInfo);
    contactInfo.appendChild(scheduleInfo);
    contactInfo.appendChild(numberInfo);
    contactInfo.appendChild(locationinfo);
    content.appendChild(mainSection);
}