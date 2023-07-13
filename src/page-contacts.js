export function pageContacts() {
    const mainSection = document.createElement('div');
    const hoursSection = document.createElement('div');
    const contactSection = document.createElement('div');
    const locationSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection');
        
    const contactInfo = document.createElement('div');
    contactInfo.style.display = "grid";

    const contactImg = document.createElement('img');
    contactImg.src = './img/resta.jpg';
    contactImg.style.width = "400px"
    contactImg.style.marginRight = "45px"

    const hours = document.createElement('p');
    const mon = document.createElement('p');
    const tue = document.createElement('p');
    const wed = document.createElement('p');
    const thur = document.createElement('p');
    const fri = document.createElement('p');
    const sat = document.createElement('p');
    const sun = document.createElement('p');

    hours.textContent = "Hours";
    hours.style.fontWeight = "bold";
    mon.textContent = "Monday: 8-12";
    tue.textContent = "Tuesday: Off";
    wed.textContent = "Wednsday: Off";
    thur.textContent = "Thursday: 8-12";
    fri.textContent = "Friday: 8-12";
    sat.textContent = "Saturday: 8-14";
    sun.textContent = "Sunday: 8-14";


    const contact = document.createElement('p');
    const phoneNumbe = document.createElement('p');
    const email = document.createElement('p');

    contact.textContent = "Contact";
    contact.style.fontWeight = "bold";
    phoneNumbe.textContent = "+987654321";
    email.textContent = "rest_project@example.com";


    const location = document.createElement('p')
    location.style.fontWeight = "bold";
    const restAdress = document.createElement('p');
    const restZip = document.createElement('p');
    const restCountry = document.createElement('p');
    
    location.textContent = "Location";
    restAdress.textContent = "Somewhere Street n2354,";
    restZip.textContent = "11XX11 Amsterdam,";
    restCountry.textContent = "Netherlands";

    mainSection.appendChild(contactImg);
    mainSection.appendChild(contactInfo);
    contactInfo.appendChild(hoursSection);
    contactInfo.appendChild(contactSection);
    contactInfo.appendChild(locationSection);

    hoursSection.appendChild(hours);
    hoursSection.appendChild(mon);
    hoursSection.appendChild(tue);
    hoursSection.appendChild(wed);
    hoursSection.appendChild(thur);
    hoursSection.appendChild(fri);
    hoursSection.appendChild(sat);
    hoursSection.appendChild(sun);

    contactSection.appendChild(contact);
    contactSection.appendChild(phoneNumbe);
    contactSection.appendChild(email);

    locationSection.appendChild(location);
    locationSection.appendChild(restAdress);
    locationSection.appendChild(restZip);
    locationSection.appendChild(restCountry);

    content.appendChild(mainSection);
}