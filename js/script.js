// INIZIAMO RICHIAMANDO I NUMERI CHE CI SERVONO DA STAMPARE
const easyBox = 100;
const mediumBox = 81;
const hardBox = 49;

// ORA GENERIAMO LE CASELLE IN BASE AL NUMERO 
const gridElem = document.querySelector(".grid")
const btnStart = document.querySelector("button")

btnStart.addEventListener("click", getEasyBox)

// for (let i = 0; i < numbers; i++) {
//     const currentNumber = number[i];
//     const newItem = generateNewBox[currentNumber];
//     gridElem.append(newItem)
// }

// FUNZIONI

// GENERIAMO I NUMERI PER CASELLA
function getEasyBox () {
    for (let i = 1; i <= 100; i++) {
        const grid = generateNewBox(i)
        grid.addEventListener("click", colorClick)
        gridElem.append(grid)
    }
}

// CREIAMO LA FUNZIONE PER IL BOX
function generateNewBox(testo) {
    const newBox = document.createElement("div");
    newBox.classList.add ("grid-item");
    newBox.classList.add ("easy");
    newBox.innerHTML = `<span>${testo}</span>`;
    return newBox;
}

function colorClick() {
    const clickNumber = parseInt(this.querySelector("span").textContent)
    this.classList.toggle("azure");
    console.log(clickNumber);
}
