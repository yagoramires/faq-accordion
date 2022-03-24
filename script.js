const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const rowDown = document.querySelectorAll(".seta-bx");
const rowUp = document.querySelectorAll(".seta-cm");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    if (answer[i].classList.contains("hidden")) {
      answer[i].classList.remove("hidden");
      question[i].classList.add("bold");
      rowDown[i].classList.add("hidden");
      rowUp[i].classList.remove("hidden");
    } else {
      answer[i].classList.add("hidden");
      question[i].classList.remove("bold");
      rowDown[i].classList.remove("hidden");
      rowUp[i].classList.add("hidden");
    }
  });
}
