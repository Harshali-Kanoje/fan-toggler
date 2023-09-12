const fanImg = document.getElementById('fanImg');
let fanvalue = true;


// function toggleFan() {
//     if (fanvalue == false) {
//         fanImg.src = './../fan-toggler/image/fan.gif';
//         fanvalue = true;

//     }
//     else {
//         fanImg.src = './../fan-toggler/image/fan.png';
//         fanvalue = false;
//     }

// }

//    easy method

function onFan() {
    const fanImg = document.getElementById('fanImg');
    fanImg.src = './../fan-toggler/image/fan.gif';
}

function offFan() {
    const fanImg = document.getElementById('fanImg');
    fanImg.src = './../fan-toggler/image/fan.png';
}

// optimize method