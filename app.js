const scoreP1 = document.querySelector(".score.p1");
const scoreP2 = document.querySelector(".score.p2");
const p1Button = document.querySelector(".button.p1");
const p2Button = document.querySelector(".button.p2");
const resetButton = document.querySelector(".reset");
const maxScoreSelect = document.querySelector("#maxscore-select");
const result = document.querySelector(".result");

let p1Score = 0;
let p2Score = 0;
let maxScore = 5;
let isOver = false;

p1Button.addEventListener("click", (e) => {
    if (!isOver) {
        ++p1Score;
        if (p1Score === maxScore) {
            isOver = true;
            scoreP1.classList.add("winner");
            scoreP2.classList.add("loser");
        }
        scoreP1.innerText = p1Score;
    }
});

p2Button.addEventListener("click", (e) => {
    if (!isOver) {
        ++p2Score;
        if (p2Score === maxScore) {
            isOver = true;
            scoreP2.classList.add("winner");
            scoreP1.classList.add("loser");
        }
        scoreP2.innerText = p2Score;
    }
});

resetButton.addEventListener("click", (e) => {
    reset();
});

maxScoreSelect.addEventListener("change", (e) => {
    maxScore = parseInt(maxScoreSelect.value);
    reset();
});


function reset() {
    isOver = false;
    p1Score = 0;
    p2Score = 0;
    scoreP1.innerText = p1Score;
    scoreP2.innerText = p2Score;
    scoreP1.classList.remove("winner", "loser");
    scoreP2.classList.remove("winner", "loser");
}