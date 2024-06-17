let screen = null;
let valueInScreen = "";

function clearScreen() {
    emitClickSound();
    valueInScreen = "";
    updateScreen();
}

function clearLastValueInsertedInScreen() {
    emitClickSound();
    valueInScreen = valueInScreen.slice(0, valueInScreen.length - 1);
    updateScreen();
}

function addValueInScreen(value) {
    emitClickSound();
    if (hasScreenInfinityOrNaN()) {
        valueInScreen = "";
    }
    valueInScreen += value;
    updateScreen();
}

function emitClickSound() {
    const audio = createAudioElement();
    audio.play();
}

function createAudioElement() {
    const audio = document.createElement("audio");
    audio.src = "./assets/sound/mouse-click.mp3";
    return audio;
}

function hasScreenInfinityOrNaN() {
    return hasScreenInfinity() || hasScreenNaN();
}

function hasScreenInfinity() {
    return valueInScreen === "Infinito";
}

function hasScreenNaN() {
    return valueInScreen === "Não é um número";
}

function updateScreen() {
    if (isScreenNotInitialized()) {
        return;
    }
    screen.value = valueInScreen;
}

function isScreenNotInitialized() {
    return screen === null;
}

function calculateValueInScreen() {
    convertValueInScreenForCalculate();
    try {
        valueInScreen = eval(valueInScreen);
    } catch {
        alert("A operação está incorreta, por favor, revise-a para que possamos calcular para ti.");
    }
    convertValueInScreenForPresentation();
    updateScreen();
}

function convertValueInScreenForCalculate() {
    valueInScreen = valueInScreen.replace(/\÷/g, "/");
    valueInScreen = valueInScreen.replace(/\x/g, "*");
    valueInScreen = valueInScreen.replace(/\,/g, ".");
    valueInScreen = valueInScreen.replace(/\Infinito/g, "Infinity");
    valueInScreen = valueInScreen.replace(/\Não é um número/g, "NaN");
}

function convertValueInScreenForPresentation() {
    valueInScreen = valueInScreen.toString();
    valueInScreen = valueInScreen.replace(/\//g, "÷");
    valueInScreen = valueInScreen.replace(/\*/g, "x");
    valueInScreen = valueInScreen.replace(/\./g, ",");
    valueInScreen = valueInScreen.replace(/\NaN/g, "Não é um número");
    valueInScreen = valueInScreen.replace(/\Infinity/g, "Infinito");
}

window.onload = () => {
    screen = document.getElementById("screen");
    updateScreen();
};