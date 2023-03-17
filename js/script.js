// INIZIAMO RICHIAMANDO I NUMERI CHE CI SERVONO DA STAMPARE
const easyBox = 100;
const mediumBox = 81;
const hardBox = 49;

// ORA GENERIAMO LE CASELLE IN BASE AL NUMERO 

const btnStart = document.querySelector("button");

// IMPLEMENTIAMO IL GIOCO AL CLICK
btnStart.addEventListener("click", function() {
    const userChoise = document.getElementById("difficoltà");
    const userChoiseInput = userChoise.value;
    console.log(userChoise);

    const gridElem = document.querySelector(".grid");
    // PRIMO IF PER LA SCELTA DELLA MODALITA' FACILE

    if (userChoiseInput === "facile") {
        
        // GENERIAMO I NUMERI PER CASELLA
        function getEasyBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= easyBox; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getEasyBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("easy");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }
    } 
    // ORA IMPLEMENTIAMO LA SCELTA DELLA MODALITA' NORMALE
    else if (userChoiseInput === "normale") {
        // btnStart.addEventListener("click", getMediumBox)
    
        // GENERIAMO I NUMERI PER CASELLA
        function getMediumBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= mediumBox; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getMediumBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("medium");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }
    }
    // IMPLEMENTIAMO LA SCELTA DELLA MODALITA' DIFFICILE 
    else if (userChoiseInput === "difficile"){
        // btnStart.addEventListener("click", getHardBox)
    
        // GENERIAMO I NUMERI PER CASELLA
        function getHardBox () {
            gridElem.innerHTML = "";
            for (let i = 1; i <= hardBox; i++) {
                const grid = generateNewBox(i);
                grid.addEventListener("click", colorClick);
                gridElem.append(grid);
            }
        }
        getHardBox()
        // CREIAMO LA FUNZIONE PER IL BOX
        function generateNewBox(testo) {
            const newBox = document.createElement("div");
            newBox.classList.add ("grid-item");
            newBox.classList.add ("hard");
            newBox.innerHTML = `<span>${testo}</span>`;
            return newBox;
        }
    }
    // RIPULISCO I CAMPI PER NON RICLICCARE IL BOTTONE
    userChoise.value = ""
})

// FUNZIONE PER IL CLICK SUL BOX
function colorClick() {
    const clickNumber = parseInt(this.querySelector("span").textContent)
    this.classList.toggle("azure");
    console.log(clickNumber);
}
