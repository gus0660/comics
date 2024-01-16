let goldorak = {
  nom: "GOLDORAK",
  type: "Robot",
  pointsDeVie: 800,
  attaque: 100,
  defense: 100,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74LlqAH3GHlS-dhYT7e71S9rEOKApacB4Tw&usqp=CAU",
};
// creation d'une fonction qui s'appelle "affichImage"
function affichImage(goldorak) {
  // je cré une variable que j'appelle "boulou" suivie d'une fonction "document.createElement("img")" donc la variable "boulou"
  // cré une balise html "img" dans le document ou DOM ou html
  let boulou = document.createElement("img");
  // je cré la source de celle-ci en allant chercher l'attribut "image" de la premiere variable "goldorak"
  boulou.src = goldorak.image;

  // pour créer une boucle qui appelle successivement chaque attribut pour les afficher, je cré d'abors une variable pour chaque attributs.
  // que je commence par la nommer (là c'est gronom) qui est égale à "dans le DOM (html) , je cré un element qui est : (là c'est <h1>)".
  let gronom = document.createElement("h1");
  gronom.textContent = goldorak.nom;

  //  meme chose
  let grotype = document.createElement("p");
  grotype.innerHTML = `<h2>Type : ${goldorak.type}</h2>`;

  //  meme chose
  let groPV = document.createElement("p");
  groPV.innerHTML = `Ses points de vie sont de : ${goldorak.pointsDeVie} points`;

  //  meme chose
  let groatt = document.createElement("p");
  groatt.innerHTML = `Son attaque est de : ${goldorak.attaque} points`;

  //  meme chose
  let grodef = document.createElement("p");
  grodef.innerHTML = `Sa défense est de : ${goldorak.defense} points`;

  //  avec toute ces nouvelles variables je cré un tableau qui est une variable tableau donc let tabInfos qui est égal à toute les variables.
  let tabInfos = [gronom, boulou, grotype, groPV, groatt, grodef];
  // mise en place de la boucle "forEach" ...à finir de noter ...
  tabInfos.forEach((info) => {
    document.body.appendChild(info);
  });
}

//  regroupement des attributs dans une classe du nom de "Persos" en s'aidant du "constructor"
class Persos {
  constructor(nom, type, pointsDeVie, attaque, defense, image) {
    // maintenant il faut afirmer/confirmer que tel attribut est bien lui-meme
    this.nom = nom;
    this.type = type;
    this.pointsDeVie = pointsDeVie;
    this.attaque = attaque;
    this.defense = defense;
    this.image = image;
  }
}
let Groot = new Persos(
  "GROOT",
  "bois",
  1000,
  1020,
  600,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwHmDac4CjXaYG5poTsCvn1sgbPZRVnwyrg&usqp=CAU"
);

let Ironman = new Persos(
  "IRON MAN",
  "armure",
  500,
  600,
  900,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcWFXZzx7rztER6PORj6UiD4AH7ybItn6Bw&usqp=CAU"
);

let Thor = new Persos(
  "THOR",
  "divinité",
  1000,
  1000,
  1000,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcElc0RDwjWpKSf6sd6FdujJDSKvbgAzdoWw&usqp=CAU"
);

let Hulk = new Persos(
  "HULK",
  "mutant",
  800,
  800,
  800,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KrXrrBWx74NpKIoeM3ztv-ji3dud5-qmEQ&usqp=CAU"
);
// boucles : for
// on commence par établir la 1ere variable qui, dans ce cas, est une variable tableau, on regroupe donc les elements entre crochés []
let marvels = [Thor, Groot, Ironman, Hulk, goldorak];
// la boucle se décompose comme cela : for (initialisation; condition; itération) {
// la, se situe le bloc de code à executer à chaque itération
// }

// Initialisation : C'est la partie où vous déclarez et initialisez la variable de contrôle de la boucle. Elle s'exécute une seule fois au début de la boucle.

// Condition : C'est une expression booléenne qui est évaluée avant chaque itération. Si la condition est vraie, le bloc de code à l'intérieur de la boucle est exécuté.
// Si la condition est fausse, la boucle se termine.

// Itération : C'est l'instruction qui est exécutée à la fin de chaque itération de la boucle. Elle permet généralement de modifier la variable de contrôle de la boucle.
for (let i = 0; i < marvels.length; i++) {
  affichImage(marvels[i]);
}
marvels.forEach((marvel) => {
  affichImage(marvel);
});

for (let marvel in marvels) {
  affichImage(marvels[marvel]);
}
