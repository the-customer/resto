const MIX_DESCTION_LENGTH = 50
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
        name: "thiep",
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
    "Mbaxal",
    "Thiep",
    "Drink",
    "Dessert",
    "Mains",
    "Cakes",
    "Fast-Food"
];

const paniers = [];

const menuGrid = document.querySelector('.menu-grid');
const menuNav = document.querySelector('.menu-nav');
const inputSearch = document.querySelector('input');
const cart = document.querySelector('#cart');

cart.innerText = paniers.length;

// window.onload = function(){
//     menu();
// }

menu()

// NOS FONCTION:

function menu(){
    categories.forEach(function(cat){

        const button = `
        <button class='menu' onclick=onMenuClick(this)>
            ${cat}
        </button>`;
        menuNav.innerHTML += button;
    });
}


function onMenuClick(e){
    //2 recuperer le texte le bouton sur lequel on a clique
    const textBtn = e.innerText.toLowerCase()
    // console.log(textBtn)
    printMenuItems(textBtn);
}

function printPlat(food){
    let description = food.description.substring(0,MIX_DESCTION_LENGTH);
        if(food.description.length > MIX_DESCTION_LENGTH){
            description += "...";
        } 
        const div1 = document.createElement("div"); 
        div1.className = "menu-item";
        //
        const div2 = document.createElement("div");
        div2.className = "card-image";
        //
        const img = document.createElement('img');
        img.src = food.image;
        //
        div2.appendChild(img);
        //
        const h3 = document.createElement('h3');
        h3.innerText = food.name;
        //
        const pDesc = document.createElement('p');
        pDesc.innerText = description;
        //
        const pPrix = document.createElement('p');
        pPrix.innerText = description;
        pPrix.className = "price";
        pPrix.innerText = `${food.price} FCFA`;
        //
        const a = document.createElement('a');
        a.href = "#";
        a.className = "cart";
        a.addEventListener("click", function(){
            // const name = food.name;
            // const price = food.price;
            // const stock = food.stock;
            // ou bien
            const {name,price,stock} = food
            //rechercher si le plat est dans le panier ou pas
            paniers.push({name,price,stock,qte:1});
            cart.innerText = paniers.length;
            console.log(paniers);
        });
        //
        const img2 = document.createElement('img');
        img2.src = './img/panier.png';
        //
        a.appendChild(img2);
        //
        // div1.appendChild(div2);
        // div1.appendChild(h3);
        // div1.appendChild(pDesc);
        // div1.appendChild(pPrix);
        // div1.appendChild(a);
        div1.append(div2,h3,pDesc,pPrix,a)
        //
        menuGrid.appendChild(div1);
        //

    // const html = `
    //                 <div class="menu-item">
    //                     <div class="card-image">
    //                         <img src="${food.image}">
    //                     </div>
    //                     <h3>${food.name}</h3>
    //                     <p>${description}</p>
    //                     <p class="price">${food.price} FCFA</p>
    //                     <a href="#" class="cart">
    //                         <img src="./img/panier.png" alt="" srcset="">
    //                     </a>
    //                 </div>
    //                 `
    // menuGrid.innerHTML += html;
}

function printMenuItems(category){
    menuGrid.innerHTML = '';
    foods.forEach(function(food){
        if(food.type == category){
            printPlat(food);
        }
        
    
    });
}

//Creation des evenemt
inputSearch.addEventListener('input',function(e){
    motCle = e.target.value.trim()
    menuGrid.innerHTML='';
    if(motCle.length >= 3){
        foods.forEach(function(food){
            if(food.name.toLowerCase().startsWith(motCle.toLowerCase())){
                printPlat(food);
            }
        });
    }
});


// const nombres = [12,23,45,2,12,34,434,456,2,45,78,20]

// for i in nombres:
//     print(i)

// som = 0;
// nombres.forEach(function(i){
//     som += i;
// });
// console.log(som)

// const a = "Aly"
// const nom = `<h1>${a}</h1>`;



// // 1. recuperer la ou on veut l'afficher
// // document.body.innerHTML += nom;
// const h1 = document.getElementById("monH1");
// h1.innerHTML = nom;
// console.log(nom)





// function onSearch(){
//     console.log("recherche")
// }