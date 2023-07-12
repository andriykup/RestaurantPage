export function pageLoad(){
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const mainDescription = document.createElement('div');

    //header buttons
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactsButtton = document.createElement('button');
    
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactsButtton.textContent = "Contacts";

    homeButton.addEventListener('click', testbtn);
    menuButton.addEventListener('click', testbtn);
    contactsButtton.addEventListener('click', testbtn);

    //TEST FUNCTION
    function testbtn(){
        console.log("button was clicked");
    }

    //appending elements
    content.appendChild(header);
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactsButtton);
    content.appendChild(mainDescription);
}