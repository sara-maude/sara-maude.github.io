document.getElementById("play").addEventListener("click", function() {
    window.location.href = "jeu.html";
});

const robot  = document.querySelector("#robot");
const friend = document.querySelector("#group");
const checkbox = document.querySelector("#toggle");

checkbox.addEventListener("change", () => {
    const robotFilled = robot.classList.contains("filled");
    let mode;

    if (robotFilled) {
        mode = "ami";
        robot.classList.remove("filled");
        robot.classList.add("unfilled");

        friend.classList.remove("unfilled");
        friend.classList.add("filled");
    } else {
        mode = "bot";
        robot.classList.remove("unfilled");
        robot.classList.add("filled");

        friend.classList.remove("filled");
        friend.classList.add("unfilled");
    }

    localStorage.setItem("versus", mode);
});

