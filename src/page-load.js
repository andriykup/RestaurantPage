export function pageLoad(){
    const content = document.getElementById('content');
    const header = document.createElement('header');

    //header buttons
    const homeButton = document.createElement('button');
    const ourStoryButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactsButtton = document.createElement('button');

    homeButton.setAttribute('id', 'homeButton')
    ourStoryButton.setAttribute('id', 'ourStoryButton')
    menuButton.setAttribute('id', 'menuButton')
    contactsButtton.setAttribute('id', 'contactsButtton')

    
    homeButton.textContent = "Home";
    ourStoryButton.textContent = "Our Story";
    menuButton.textContent = "Menu";
    contactsButtton.textContent = "Contacts";

    //appending elements
    content.appendChild(header);
    header.appendChild(homeButton);
    header.appendChild(ourStoryButton);
    header.appendChild(menuButton);
    header.appendChild(contactsButtton);
}