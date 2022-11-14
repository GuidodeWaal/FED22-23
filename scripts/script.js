//==========================================
//==========================================
// VALUES
//==========================================
//==========================================


//------------------------------------------
// Media section values
//------------------------------------------

const mainscreenshot = document.getElementById("Mainscreenshot");
const screenshot0 = document.getElementById("screenshot0");
const screenshot1 = document.getElementById("screenshot1");
const screenshot2 = document.getElementById("screenshot2");
const screenshot3 = document.getElementById("screenshot3");
const screenshot4 = document.getElementById("screenshot4");
const screenshot5 = document.getElementById("screenshot5");



//==========================================
//==========================================
// FUNCTIONS
//==========================================
//==========================================


//------------------------------------------
// Media section functions
//------------------------------------------

function changeto0 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot0.avif";
}

function changeto1 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot1.avif";
}

function changeto2 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot2.avif";
}

function changeto3 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot3.avif";
}

function changeto4 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot4.avif";
}

function changeto5 (){
    document.getElementById("Mainscreenshot").src = "images/pagina2/screenshot5.avif";
}



//==========================================
//==========================================
// EVENTS
//==========================================
//==========================================


//------------------------------------------
// Media section events
//------------------------------------------

screenshot0.addEventListener("click", changeto0);
screenshot1.addEventListener("click", changeto1);
screenshot2.addEventListener("click", changeto2);
screenshot3.addEventListener("click", changeto3);
screenshot4.addEventListener("click", changeto4);
screenshot5.addEventListener("click", changeto5);