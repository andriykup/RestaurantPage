export function pageMenu() {
    const mainSection = document.createElement('div');
    mainSection.setAttribute('id', 'mainSection')

    const menuItems = document.createElement('div');
    menuItems.style.display = 'grid';
    menuItems.style.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))';
    menuItems.style.width = '75%';
    menuItems.style.gap = '20px';

    const item1 = document.createElement('div');
    item1.setAttribute('class', 'menuItem');
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'menuItem');
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'menuItem');
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'menuItem');
    const item5 = document.createElement('div');
    item5.setAttribute('class', 'menuItem');
    const item6 = document.createElement('div');
    item6.setAttribute('class', 'menuItem');

    //item1
    const item1Img = document.createElement('img');
    const item1Text = document.createElement('p');
    item1Img.src = "./img/crepes.jpg";
    item1Text.textContent = "Crepe 12€";
    
    //item2
    const item2Img = document.createElement('img');
    const item2Text = document.createElement('p');
    item2Img.src = "./img/pancakes.jpeg";
    item2Text.textContent = "Pancakes 12€";

    //item3
    const item3Img = document.createElement('img');
    const item3Text = document.createElement('p');
    item3Img.src = "./img/bagel.jpg";
    item3Text.textContent = "Bagel 10€";

    //item4
    const item4Img = document.createElement('img');
    const item4Text = document.createElement('p');
    item4Img.src = "./img/donuts.jpg";
    item4Text.textContent = "Donuts 2.50€";

    //item5
    const item5Img = document.createElement('img');
    const item5Text = document.createElement('p');
    item5Img.src = "./img/Waffle.jpg";
    item5Text.textContent = "Waffle 10€";

    //item6
    const item6Img = document.createElement('img');
    const item6Text = document.createElement('p');
    item6Img.src = "./img/macarons.jpg";
    item6Text.textContent = "Macarons 3€";


    content.appendChild(mainSection);
    mainSection.appendChild(menuItems);
    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(item4);
    menuItems.appendChild(item5);
    menuItems.appendChild(item6);

    
    //adding items content
    item1.appendChild(item1Img);
    item1Img.setAttribute('class', 'responsiveImg');
    item1.appendChild(item1Text);
    
    item2.appendChild(item2Img);
    item2Img.setAttribute('class', 'responsiveImg');
    item2.appendChild(item2Text);

    item3.appendChild(item3Img);
    item3Img.setAttribute('class', 'responsiveImg');
    item3.appendChild(item3Text);

    item4.appendChild(item4Img);
    item4Img.setAttribute('class', 'responsiveImg');
    item4.appendChild(item4Text);

    item5.appendChild(item5Img);
    item5Img.setAttribute('class', 'responsiveImg');
    item5.appendChild(item5Text);

    item6.appendChild(item6Img);
    item6Img.setAttribute('class', 'responsiveImg');
    item6.appendChild(item6Text);
}