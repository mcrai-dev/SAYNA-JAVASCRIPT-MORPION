var character_Choosen, computer_Character;
var item_list = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];
var engaged_item = [];
var ran, identity;
for (let i = 0; i <= 8; i++) {
    engaged_item[i] = false;
}

start();

function start() {
    $('.layer').css({ "display": "inline-block" })
}

function teamchoise(id) {
    character_Choosen = id;
    computer_Character;
    (character_Choosen === 'X') ? (computer_Character = 'O') : (computer_Character = 'X');
    console.log("lecomputer is : " + computer_Character);
    $('.layer').css({ "display": "none" })
}

function random_number() {
    ran = Math.floor(Math.random() * 9); //affiche un nombre randomisé de 0 à 8
}

// function computer_random() {
//     var value_randomised = Math.floor(Math.random() * 9); //affiche un nombre randomisé de 0 à 8
//     if (engaged_item[value_randomised] === false) {
//         document.getElementById(identity).innerHTML = computer_Character;
//         console.log(value_randomised + computer_Character);
//     } else {
//         // alert("ok");
//         console.log(value_randomised + computer_Character);
//     }

// }

function choiseCase(id) {
    var item_id = document.getElementById(id).innerHTML;
    console.log(item_id); //return the document with all balise of the ID, onajoute .innerHTML pour capturer seulemetn letext
    console.log(id); //return only ID
    identity = id;
    console.log(id);
    if (item_id === "") {
        // document.getElementById(id).innerHTML = 'Z';
        document.getElementById(id).innerHTML = character_Choosen;
        var ran = Math.floor(Math.random() * 9); //affiche un nombre randomisé de 0 à 8

        console.log("le random est " + ran);
        // document.getElementById(ran).innerHTML = computer_Character;
        switch (ran) {
            case 1:
                document.getElementById('item1').innerHTML = computer_Character;
                break;
            case 2:
                document.getElementById('item2').innerHTML = computer_Character;
                break;
            case 3:
                document.getElementById('item3').innerHTML = computer_Character;
                break;
            case 4:
                document.getElementById('item4').innerHTML = computer_Character;
                break;
            case 5:
                document.getElementById('item5').innerHTML = computer_Character;
                break;
            case 6:
                document.getElementById('item6').innerHTML = computer_Character;
                break;
            case 7:
                document.getElementById('item7').innerHTML = computer_Character;
                break;
            case 8:
                document.getElementById('item8').innerHTML = computer_Character;
                break;
            case 9:
                document.getElementById('item9').innerHTML = computer_Character;
                break;
        }
        // computer_random();
    } else {
        alert("case already choosen! ");
    }

    // switch (id) {
    //     case 'item1':
    //         if (engaged_item[0] === false) {
    //             engaged_item[0] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             // computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item2':
    //         if (engaged_item[1] === false) {
    //             engaged_item[1] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item3':
    //         if (engaged_item[2] === false) {
    //             engaged_item[2] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item4':
    //         if (engaged_item[3] === false) {
    //             engaged_item[3] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item5':
    //         if (engaged_item[4] === false) {
    //             engaged_item[4] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item6':
    //         if (engaged_item[5] === false) {
    //             engaged_item[5] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item7':
    //         if (engaged_item[6] === false) {
    //             engaged_item[6] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;















    //     case 'item8':
    //         if (engaged_item[7] === false) {
    //             engaged_item[7] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    //     case 'item9':
    //         if (engaged_item[8] === false) {
    //             engaged_item[8] = true;
    //             document.getElementById(id).innerHTML = character_Choosen;
    //             computer_random();
    //         } else {
    //             alert("case already choosen! ");
    //         }
    //         break;

    // }
}