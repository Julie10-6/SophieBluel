console.log("hello")


getWork() //j'appelle la fonction getWork
 let allWorks 
  function getWork(){ //Je déclare la fonction getWork
    fetch("http://localhost:5678/api/works") //j'appelle l'API works
  .then(response => { //l'API me retourne response
    if (!response.ok) { //je vérifie si le code de l'erreur est bon ou pas, cad je vérifie si ma requête a bien été traitée
      throw new Error('Network response was not ok');
    }
    return response.json(); //je passe la réponse à l'étape suivante sous format json
  })
  .then(worksData => { //je traite la réponse sous le nom worksData
    allWorks = worksData
    // Process the retrieved user data
    // showWork(worksData); // j'appelle la fontion showWork et je lui passe la réponse de l'api pour lui afficher les travaux
  })
  .catch(error => { // cette partie s'éxecute si il y a une erreur avce l'appel api
    console.error('Error:', error);
  });
}

function showWork(worksData) {
  
  const portfolio = document.getElementById("portfolio"); // Récupère la div Portfolio du HTML

 
  portfolio.innerHTML = '';  // Supprime tous les enfants existants de la div portfolio


  const newGallery = document.createElement("div");   // Crée une nouvelle div pour la galerie
  newGallery.className = "gallery";

  portfolio.appendChild(newGallery);   // Ajoute la nouvelle galerie à la div portfolio


  worksData.forEach(work => {
       const newFigure = document.createElement("figure");
       const newImage = document.createElement("img");
       newImage.src = work.imageUrl; 
       const newFigCaption = document.createElement("figcaption");
       newFigCaption.textContent = work.title; // Définit le texte de la légende


      // Ajoute l'image à la galerie
       newFigure.appendChild(newImage);
       newFigure.appendChild(newFigCaption); // Ajoute la légende à l'élément figure
       newGallery.appendChild(newFigure); // Ajoute l'élément figure à la galerie
      
  });

}

const boutonTous = document.getElementById("tous");
// boutonTous.addEventListener("click", function() {
//   const tous = allWorks.filter( function(work) {
//     return work.categoryId 
//   });
//   showWork(tous)
//   if(this.click){
//     boutonTous.style.backgroundColor = "#1D6154"
//     boutonTous.style.color = "white"
//   } else {
//     ''

//   }

// });

const boutonObjet = document.getElementById("objets"); // je récupère le bouton de objet dans le html
// boutonObjet.addEventListener("click", function() { // j'ajoute un event listener pour qu'il déclenche une fonction au click
//   const objets = allWorks.filter( function(work) { // je créée la fonction pour les filtres
//     return work.categoryId === 1 // je retourne les images si elles ont l'id que je demande (1)
//   });
//   showWork(objets) // j'appelle la fonction showWork
//   if(this.click){
//     boutonObjet.style.backgroundColor = "#1D6154"
//     boutonObjet.style.color = "white"
//   } else {
//     ''
//   }

// });

const boutonAppartements = document.getElementById("appartements");
// boutonAppartements.addEventListener("click", function() {
//   const appartements = allWorks.filter( function(work) {
//     return work.categoryId === 2
//   });
//   showWork(appartements)
//   if(this.click){
//     boutonAppartements.style.backgroundColor = "#1D6154"
//     boutonAppartements.style.color = "white"
//   } else {
//     ''
//   }

// });

const boutonHotelsEtRestaurants = document.getElementById("hotels_et_restaurants");
// boutonHotelsEtRestaurants.addEventListener("click", function() {
//   const hotels_et_restaurants = allWorks.filter( function(work) {
//     return work.categoryId === 3
//   });
//   showWork(hotels_et_restaurants)
//   if(this.click){
//     boutonHotelsEtRestaurants.style.backgroundColor = "#1D6154"
//     boutonHotelsEtRestaurants.style.color = "white"
//   } else {
//     ''
//   }

// });


const email = document.getElementById('loginemail').value;
const password = document.getElementById('pass').value;
const loginButton = document.getElementById('login-button');


const apiUrl = 'http://localhost:5678/api/users/login';

const contactForm = document.getElementById('loginForm');
//const responseMessage = document.getElementById('response-message');


contactForm.addEventListener('submit', function (event) {
  console.log("hello")
  event.preventDefault();

  const formData = {
    "email": document.getElementById('loginemail').value,
    "password": document.getElementById('pass').value
  } //new FormData(contactForm);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
});