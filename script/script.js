// Récupération des objets du HTML

let bb8 = document.getElementById("bb8")
let TIE = document.getElementById("TIE")
let darkSathi = document.getElementById("darkSathi")
let yoda = document.getElementById("yoda")
let sabreLaser = document.getElementById("sabreLaser")
let humain = document.getElementById('recep')
let ordi = document.getElementById('trucAdverse')
let resultat = document.getElementById("resultat")
let recordTexte = document.getElementById("record")
let animation = document.getElementById("animation")

// Tableau pour le choix Ordi

let tableauObjet = ["bb8", "TIE", "darkSathi", "yoda", "sabreLaser"]

// Variables pour les tests et les records

let stockChoixHumain = {}
let stockChoixOrdi = {}
let score = 0
let record = 0

// Partie boutons
let sections = document.getElementsByTagName("section")
let li = document.getElementsByTagName("li")

let clickBouton = function (numeroBouton) {
    li[numeroBouton].addEventListener("click", function () {
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = "none"
        }
        sections[numeroBouton].style.display = "block"
    })
}

for (let i = 0; i < li.length; i++) {
    clickBouton(i)
}

// Drag&Drop

// Début du Drag + On définit index
function dragStart(evt) {
    /* Index de l'image que l'on dragge */
    let index = tableauObjet.findIndex(imageDraggable => imageDraggable === evt.target.id)
    console.log(index)
    evt.dataTransfer.setData("text", index)
}

document.addEventListener('dragstart', dragStart)

// Que se passe t'il dans la div que l'on tire ?
function Drag(evt) {
}

document.addEventListener('drag', Drag)

// Que se passe t'il dans la div que l'on a tiré ?
function DragEnd(evt) {
}

document.addEventListener('dragend', DragEnd)
humain.addEventListener('dragenter', DragEnter)
humain.addEventListener('dragover', DragOver)
humain.addEventListener('dragleave', DragLeave)
humain.addEventListener('drop', Drop)

// Permet à l'image d'entrer dans un récepteur
function DragEnter(evt) {
    evt.preventDefault()
}

// Quand l'image passe au dessus du cercre = Fond Gris
function DragOver(evt) {
    evt.preventDefault()
    evt.target.style.backgroundColor = "lightgrey"
}

// Sortir sans drop = Remettre le cercle transparent
function DragLeave(evt) {
    evt.target.style.backgroundColor = 'rgba(255,255,255,0)'
}

// Drop
function Drop(evt) {
    let indexRecup = evt.dataTransfer.getData("text")
    
    //Choix de l'ordi
    let choixOrdi = tableauObjet[Math.floor(Math.random() * 5)]
    
    // Affichage des images dans les cercles
    recep.style.backgroundImage = `url(image/${tableauObjet[indexRecup]}.png)`
    ordi.style.backgroundImage = `url(image/${choixOrdi}.png)`
    
    // Extraction des variables hors de la fonction
    stockChoixHumain = tableauObjet[indexRecup]
    stockChoixOrdi = choixOrdi

    /* console.log(indexRecup)
    console.log(choixOrdi)
    console.log(recep)
    console.log(adverse)
    console.log(stockChoixHumain)
    console.log(stockChoixHumain) */
    
    //Appel du moteur de jeu pour les tests
    tests();
}





//-----------------------------------------------------------------------------------------------------------------

// PARTIE MOTEUR DU JEU UNREAL ENGINE -8000

// Conditions pour victoire ordinateur

function tests() {
    if (stockChoixOrdi == "TIE" && stockChoixHumain == "yoda") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/TIEyoda.gif">`
        score = 0
    } else if (stockChoixOrdi == "TIE" && stockChoixHumain == "sabreLaser") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/TIEsabre.gif">`
        score = 0
    } else if (stockChoixOrdi == "bb8" && stockChoixHumain == "TIE") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/bb8TIE.gif">`
        score = 0
    } else if (stockChoixOrdi == "bb8" && stockChoixHumain == "darkSathi") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/bb8sathi.gif">`
        score = 0
    } else if (stockChoixOrdi == "darkSathi" && stockChoixHumain == "yoda") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/darkSathiyoda.gif">`
        score = 0
    } else if (stockChoixOrdi == "darkSathi" && stockChoixHumain == "TIE") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/TIEsathi.gif">`
        score = 0
    } else if (stockChoixOrdi == "yoda" && stockChoixHumain == "sabreLaser") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/sabreYoda.gif">`
        score = 0
    } else if (stockChoixOrdi == "yoda" && stockChoixHumain == "bb8") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/YodaBB8.gif">`
        score = 0
    } else if (stockChoixOrdi == "sabreLaser" && stockChoixHumain == "darkSathi") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/sabreSathi.gif">`
        score = 0
    } else if (stockChoixOrdi == "sabreLaser" && stockChoixHumain == "bb8") {
        resultat.innerHTML = "L'ordinateur gagne.<br>Le score revient à 0."
        animation.innerHTML = `<img src="image/sabreLaserbb8.gif">`
        score = 0
    }

    // Conditions pour victoire humaine
    else if (stockChoixHumain == "TIE" && stockChoixOrdi == "yoda") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/TIEyoda.gif">`
    } else if (stockChoixHumain == "TIE" && stockChoixOrdi == "sabreLaser") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/TIEsabre.gif">`
    } else if (stockChoixHumain == "bb8" && stockChoixOrdi == "darkSathi") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/bb8sathi.gif">`
    } else if (stockChoixHumain == "bb8" && stockChoixOrdi == "TIE") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/bb8TIE.gif">`
    } else if (stockChoixHumain == "darkSathi" && stockChoixOrdi == "yoda") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/darkSathiyoda.gif">`
    } else if (stockChoixHumain == "darkSathi" && stockChoixOrdi == "TIE") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/TIEsathi.gif">`
    } else if (stockChoixHumain == "yoda" && stockChoixOrdi == "sabreLaser") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/sabreYoda.gif">`
    } else if (stockChoixHumain == "yoda" && stockChoixOrdi == "bb8") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/YodaBB8.gif">`
    } else if (stockChoixHumain == "sabreLaser" && stockChoixOrdi == "darkSathi") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/sabreSathi.gif">`
    } else if (stockChoixHumain == "sabreLaser" && stockChoixOrdi == "bb8") {
        score++
        resultat.innerHTML = `L'humain gagne. <br>Le score est de ${score}.`
        animation.innerHTML = `<img src="image/sabreLaserbb8.gif">`
    } 
    
    // Conditions ex aequo
    else if (stockChoixOrdi == "bb8" && stockChoixHumain == "bb8") {
        resultat.innerHTML = `La partie est nulle.<br>Le score est actuellement de ${score}.`
        animation.innerHTML = `<img src="image/bb8.gif">`
    } else if (stockChoixOrdi == "TIE" && stockChoixHumain == "TIE") {
        resultat.innerHTML = `La partie est nulle.<br>Le score est actuellement de ${score}.`
        animation.innerHTML = `<img src="image/TIE.gif">`
    } else if (stockChoixOrdi == "darkSathi" && stockChoixHumain == "darkSathi") {
        resultat.innerHTML = `La partie est nulle.<br>Le score est actuellement de ${score}.`
        animation.innerHTML = `<img src="image/darkSathi.gif">`
    } else if (stockChoixOrdi == "yoda" && stockChoixHumain == "yoda") {
        resultat.innerHTML = `La partie est nulle.<br>Le score est actuellement de ${score}.`
        animation.innerHTML = `<img src="image/yoda.gif">`
    } else if (stockChoixOrdi == "sabreLaser" && stockChoixHumain == "sabreLaser") {
        resultat.innerHTML = `La partie est nulle.<br>Le score est actuellement de ${score}.`
        animation.innerHTML = `<img src="image/sabreLaser.gif">`
    } else {
        resultat.innerHTML = "Erreur, veuillez recommencer."
        animation.innerHTML = `<img src="image/erreur.gif">`
    }

    
    // Tests Score
    if (score > record) {
        record++
        recordTexte.innerHTML = `Vous venez d'établir un nouveau record ! Il est maintenant de ${record}.<br><br><img src="image/congrats.gif">`
    } else {
        recordTexte.innerHTML = `<br><br>Record = ${record}<br><br>`
    }

}



// Easter Egg

document.getElementById("deadPixel").addEventListener("click", function (event) {
    score = score + 10;
    resultat.innerHTML = `Cheat Code ! Le score est maintenant de ${score}.`;
    animation.innerHTML = `<img src="image/cheat.gif">`
    if (score > record) {
        record = score
        recordTexte.innerHTML = `Vous venez d'établir un nouveau record ! Il est maintenant de ${record}.<br><br><img src="image/congrats.gif">`
    }
})
