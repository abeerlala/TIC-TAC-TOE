const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resetBtn");
const winnerP = document.querySelector(".winner");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else if (turnO == false) {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const changeBtn = () => {
    resetBtn.innerText = "New Game";
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winnerP.innerText = `Winner Is "${pos1}"`;
                winnerP.style.borderBottom = "5px solid #C8E0F9";
                disableBtns();
                changeBtn();
            }
        }
    }
}
