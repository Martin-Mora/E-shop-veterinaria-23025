const hamburger= document.querySelector('.hamburger');
const navOcult= document.querySelector('.navOcult');
const navHidden = document.querySelector('.x');
const containerCards = document.querySelector('.container-flex');


hamburger.addEventListener('click',()=>{
  navOcult.classList.toggle('navOcult')
})

navHidden.addEventListener('click',()=>{
  navOcult.classList.toggle('navOcult')
})


// function pintarCards(arrayData){
//   let card='';
 
//   for(let i=0; i<arrayData.length;i++ ){
//     card+=`<div class="card">
//     <img src="${arrayData[i].image}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn">Go somewhere</a>
//     </div>
//   </div>`
//   }

//   containerCards.innerHTML=card;
// }


// pintarCards(data.products)