import { pageLoad } from "./page-load.js";
import { pageHome } from "./page-home.js";
import { pageStory } from "./page-story.js";
import { pageMenu } from "./page-menu.js";
import { pageContacts } from "./page-contacts.js";

//removeMainSection() removes section befora ading new one afte tab button 
//was clicked, prevent content duplication.
export function removeMainSection(){
    mainSection.remove();
}

pageLoad();
pageHome();

homeButton.addEventListener('click', () => {
    removeMainSection();
    pageHome();
});
ourStoryButton.addEventListener('click', () => {
    removeMainSection();
    pageStory();
});
menuButton.addEventListener('click', () => {
    removeMainSection();
    pageMenu();
});
contactsButtton.addEventListener('click', () => {
    removeMainSection();
    pageContacts();
});
