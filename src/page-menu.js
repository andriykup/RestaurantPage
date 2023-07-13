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

    content.appendChild(mainSection);
    mainSection.appendChild(menuItems);
    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(item4);
    menuItems.appendChild(item5);
    menuItems.appendChild(item6);
}