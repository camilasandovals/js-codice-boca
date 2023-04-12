const menuSection = document.getElementById('menu')

function displayMenuItems(menuItems){
    menuSection.innerHTML = '';
    menuItems.map(dish => {
        const div = document.createElement('div');
        const title = document.createElement('h2')
        const titleText = document.createTextNode(dish.title);
        title.appendChild(titleText)
        div.appendChild(title)
        const description = document.createElement('p')
        const descriptionText = document.createTextNode(dish.description)
        description.appendChild(descriptionText);
        div.appendChild(description);
        menuSection.appendChild(div)
    })
}

async function getMenuItems() {
    const response = await fetch('https://codice-boca.web.app/menu')
    const menuItems = await response.json()
    displayMenuItems(menuItems);
}

getMenuItems()