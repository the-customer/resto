
const foods = [
    {
        name: "Pizza",
        type: "thiep",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi minus porro autem iusto similique, consequatur, possimus impedit quas maiores illum reiciendis est in. Numquam fugit sint cum illum fugiat!",
        price: 5000,
        day : 1,
        stock : 10,
        image : "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
    },
    {
        name: "Burger",
        type: "drink",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "this is a generic description sdlfjsdl flsd flsdjfldskjfldsk fjlkds fdslkfj dslkf jdslk",
        price: 2500,
        day : 1,
        stock : 5,
        image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
    },
    {
        name: "Pizza",
        type: "fast-food",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi minus porro autem iusto similique, consequatur, possimus impedit quas maiores illum reiciendis est in. Numquam fugit sint cum illum fugiat!",
        price: 5000,
        day : 1,
        stock : 10,
        image : "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
    },
    {
        name: "Burger",
        type: "dessert",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "this is a generic description",
        price: 2500,
        day : 1,
        stock : 5,
        image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
    },
    {
        name: "Pizza",
        type: "dessert",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi minus porro autem iusto similique, consequatur, possimus impedit quas maiores illum reiciendis est in. Numquam fugit sint cum illum fugiat!",
        price: 5000,
        day : 1,
        stock : 10,
        image : "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
    },
    {
        name: "Burger",
        type: "mains",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "this is a generic description",
        price: 2500,
        day : 1,
        stock : 5,
        image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
    },
    {
        name: "Pizza",
        type: "mains",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi minus porro autem iusto similique, consequatur, possimus impedit quas maiores illum reiciendis est in. Numquam fugit sint cum illum fugiat!",
        price: 5000,
        day : 1,
        stock : 10,
        image : "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
    },
    {
        name: "Burger",
        type: "dessert",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "this is a generic description",
        price: 2500,
        day : 1,
        stock : 5,
        image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
    },
    {
        name: "Pizza",
        type: "Italian",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi minus porro autem iusto similique, consequatur, possimus impedit quas maiores illum reiciendis est in. Numquam fugit sint cum illum fugiat!",
        price: 5000,
        day : 1,
        stock : 10,
        image : "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
    },
    {
        name: "Burger",
        type: "Italian",
        ingredients: ["cheese", "pepperoni", "sauce"],
        description: "this is a generic description",
        price: 2500,
        day : 1,
        stock : 5,
        image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
    },

];

const categories = [
    "Thiep",
    "Drink",
    "Dessert",
    "Mains",
    "Cakes",
    "Fast-Food"
];

const menuGrid = document.querySelector('.menu-grid');
const menuNav = document.querySelector('.menu-nav');


window.onload = function(){
    menu();
}


// NOS FONCTION:

function menu(){
    categories.forEach(function(cat){
        const button = `<button onclick=onMenuClick()>${cat}</button>`;
        menuNav.innerHTML += button;
    });
}


function onMenuClick(){
    printMenuItems("thiep");
}

function printMenuItems(category){
    foods.forEach(function(food){
        if(food.type == category){
            let description = food.description.substring(0,80);
        if(food.description.length > 80){
            description += "...";
        } 
        const html = `
                    <div class="menu-item">
                        <div class="card-image">
                            <img src="${food.image}">
                        </div>
                        <h3>${food.name}</h3>
                        <p>${description}</p>
                        <p class="price">${food.price} FCFA</p>
                    </div>
                    `
        menuGrid.innerHTML += html;
        }
        
    });
}
