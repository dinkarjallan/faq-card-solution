let arrows = document.querySelectorAll('span.arrow');
let questions = document.querySelectorAll('div.question');
let answers = document.querySelectorAll('div.answer');
let display = false;
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        if (display === false) {
            questions[i].classList.remove('ques-active');
            answers[i].style.display = "none";
            display = true;
        } else if (display === true) {
            questions[i].classList.add('ques-active');
            answers[i].style.display = "block";
            display = false;
        }

    });
}