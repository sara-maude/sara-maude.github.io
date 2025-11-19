const opened = document.getElementById("opened");
const closed = document.getElementById("closed");

document.getElementById("close").addEventListener("click", () => {
    opened.classList.add("hidden");
    setTimeout(() => {
        closed.classList.add("visible");
    }, 150);
});

document.getElementById("open").addEventListener("click", () => {
    closed.classList.remove("visible");
    opened.classList.remove("hidden");
});

document.getElementById("settings").addEventListener("click", function() {
    window.location.href = "reglages.html";
});

document.getElementById("info").addEventListener("click", function() {
    window.location.href = "tutoriel.html";
});

document.getElementById("trophy").addEventListener("click", function() {
    window.location.href = "historique.html";
});

const root = document.documentElement;

const lightBtn = document.getElementById("light");
const icon = lightBtn ? lightBtn.querySelector("span") : null;

const darkColor  = "#092834";
const lightColor = "#E4F1F6";

function applyLightMode(on) {
    if (on) {
        root.style.setProperty("--fonce", lightColor);
        root.style.setProperty("--pale", darkColor);
        if (icon) icon.textContent = "lightbulb";
    } else {
        root.style.setProperty("--fonce", darkColor);
        root.style.setProperty("--pale", lightColor);
        if (icon) icon.textContent = "light_off";
    }
}

let lightOn = localStorage.getItem("lightOn") === "true";
applyLightMode(lightOn);

if (lightBtn) {
    lightBtn.addEventListener("click", () => {
        lightOn = !lightOn;
        localStorage.setItem("lightOn", lightOn);
        applyLightMode(lightOn);
    });
}
