export function pageStory() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection');
    const mainImg = document.createElement('img');
    const aboutUs = document.createElement('div');
    aboutUs.style.width = "200px";
    aboutUs.style.display = "flex";
    aboutUs.style.flexDirection = "column";
    aboutUs.style.justifyContent = "center";
    
    const aboutUsTitle = document.createElement('p');
    const par1 = document.createElement('p');
    const par2 = document.createElement('p');

    mainImg.src = "./img/imgAbout.jpg";
    mainImg.style.height = "550px";
    mainImg.style.marginRight = "45px";

    aboutUsTitle.textContent = "About Us";
    aboutUsTitle.style.fontWeight = "bold";
    par1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    par2.textContent = "Praesentium tempora minus illo in necessitatibus soluta, earum nulla ullam! Odio labore dolorum dignissimos tempore ad nobis iusto ullam quasi dolorem consequatur!";

    content.appendChild(mainSection);
    mainSection.appendChild(mainImg);
    mainSection.appendChild(aboutUs);
    aboutUs.appendChild(aboutUsTitle);
    aboutUs.appendChild(par1);
    aboutUs.appendChild(par2);
}