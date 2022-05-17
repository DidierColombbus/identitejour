document.write('Kikoolol ze monde!');

let nom = prompt("Bonjour, quel est votre nom?");
let prenom = prompt("Et quel est votre prénom?");
let age = prompt("Quel est votre âge?")
let ville = prompt("Dans quelle ville habitez-vous?")

alert("Vous vous appelez " + nom + " " + prenom + " , vous avez " + age + " ans et vous habitez à " + ville + ".");

let today = prompt("Quel jour de la semaine sommes-nous?");

//  if(today == 'lundi' || today == 'Lundi'){
//         document.write(`<p>On est lundi et demain on sera mardi</p>`);
//     }else if(today == 'mardi' || today == 'Mardi'){
//         document.write(`<p>On est mardi et demain on sera mercredi</p>`);
//     }else if(today == 'mercredi' || today == 'Mercredi'){
//         document.write(`<p>On est mercredi et demain on sera jeudi</p>`);
//     }else if(today == 'jeudi' || today == 'Jeudi'){
//         document.write(`<p>On est jeudi et demain on sera vendredi</p>`);
//     }else if(today == 'vendredi' || today == 'Vendredi'){
//         document.write(`<p>On est vendredi et demain on sera samedi</p>`);
//     }else if(today == 'samedi' || today == 'Samedi'){
//         document.write(`<p>On est samedi et demain on sera dimanche</p>`);
//     }else if(today == 'dimanche' || today == 'Dimanche'){
//         document.write(`<p>On est dimanche et demain j'ai pas envie de revenir au travail...</p>`);
//     }else{
//             document.write(`<p>Oulah, il faudrait mettre un jour dans le prompt, sinon ça ne marche pas. Merci de rafraichir la page :0)</p>`);
//         }


// Deuxième version, avec switch, mais manque de précision et de maniabilité, on ne peut intégrer "ou" dans
// les conditions sans doubler le nombre de cas.

    switch(today){
    case 'lundi': document.write(`<p>On est lundi et demain on sera mardi</p>`);
            break;
    case 'Lundi': document.write(`<p>On est lundi et demain on sera mardi</p>`);
            break;
    case 'mardi': document.write(`<p>On est mardi et demain on sera mercredi</p>`);
            break;
    case 'Mardi': document.write(`<p>On est mardi et demain on sera mercredi</p>`);
            break;
    case 'mercredi': document.write(`<p>On est mercredi et demain on sera jeudi</p>`);
            break;
    case 'Mercredi': document.write(`<p>On est mercredi et demain on sera jeudi</p>`);
            break;
    case 'jeudi': document.write(`<p>On est jeudi et demain on sera vendredi</p>`);
            break;
    case 'Jeudi': document.write(`<p>On est jeudi et demain on sera vendredi</p>`);
            break;
    case 'vendredi': document.write(`<p>On est vendredi et demain on sera samedi</p>`);
            break;
    case 'Vendredi': document.write(`<p>On est vendredi et demain on sera samedi</p>`);
            break;
    case 'samedi': document.write(`<p>On est samedi et demain on sera dimanche</p>`);
            break;
    case 'Samedi': document.write(`<p>On est samedi et demain on sera dimanche</p>`);
            break; 
        default:
            document.write(`<p>On est dimanche et demain j'ai pas envie de revenir au travail...</p>`);
            break;
    }