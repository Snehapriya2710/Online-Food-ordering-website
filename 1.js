import {foodItem} from './food.js';

console.log(foodItem);

function displayItems(){
    var Biriyani=document.getElementById('Biriyani')
    var Chicken=document.getElementById('Chicken')
    var Paneer=document.getElementById('Paneer')
    var Chats=document.getElementById('Chats')
    var Egg=document.getElementById('Egg')
    var Chinese=document.getElementById('Chinese')
    var PureVeg=document.getElementById('Pure-veg')
    var SeaFoods=document.getElementById('Sea-foods')
    var SouthIndian=document.getElementById('South-indian')

    const biriyaniData=foodItem.filter(item=>item.
    category=='Biriyani');
    console.log(biriyaniData);
    const chickenData=foodItem.filter(item=>item.
    category=='Chicken');
    console.log(chickenData);
    const paneerData=foodItem.filter(item=>item.
    category=='Paneer');
    console.log(paneerData);
    const chatsData=foodItem.filter(item=>item.
    category=='Chats');
    console.log(chatsData);
    const eggData=foodItem.filter(item=>item.
    category=='Egg');
    console.log(eggData);
    const chineseData=foodItem.filter(item=>item.
    category=='Chinese');
    console.log(chineseData);
    const purevegData=foodItem.filter(item=>item.
    category=='Pure-veg');
    console.log(purevegData);
    const seafoodsData=foodItem.filter(item=>item.
    category=='Sea-Foods');
    console.log(seafoodsData);
    const southindianData=foodItem.filter(item=>item.
    category=='South-Indian');
    console.log(southindianData);

    biriyaniData.map(item=> {
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart=document.createElement('i');
        star.setAttribute('class','fa fa-cart-plus');
        star.setAttribute('id','item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText=item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

      
    })
}
displayItems();
