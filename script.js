const question = document.querySelectorAll(".faq__question");
const answer = document.querySelectorAll(".faq__answer");
const row = document.querySelectorAll(".faq__row");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    if (answer[i].classList.contains("faq__answer--hidden")) {
      answer[i].classList.remove("faq__answer--hidden");
      question[i].classList.add("faq__question--bold");
      row[i].style.transform = "rotate(180deg)";
    } else {
      answer[i].classList.add("faq__answer--hidden");
      question[i].classList.remove("faq__question--bold");
      row[i].style.transform = "rotate(0deg)";
    }
  });
}

// const question = document.querySelectorAll(".question");

// question.forEach();
