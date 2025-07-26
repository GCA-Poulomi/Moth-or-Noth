const questions = [
  { text: "Has fuzzy antennae", answer: true },
  { text: "Makes honey", answer: false },
  { text: "Pollinates nighttime flowers", answer: true },
  { text: "Lives in the ocean", answer: false },
  { text: "Camouflages with tree bark", answer: true },
];

let currentQuestion = 0;
let score = 0;

function startGame() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  document.getElementById('feedback').innerText = '';
  document.getElementById('next-btn').style.display = 'none';
  const q = questions[currentQuestion];
  document.getElementById('question-text').innerText = q.text;
}

function checkAnswer(userAnswer) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById('feedback');

  if (userAnswer === q.answer) {
    feedback.innerText = 'Correct!';
    feedback.className = 'correct';
    score++;
  } else {
    feedback.innerText = 'Wrong!';
    feedback.className = 'wrong';
  }

  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

function endGame() {
  document.getElementById('game-container').style.display = 'none';
  const finalMessage = document.getElementById('final-message');
  finalMessage.style.display = 'block';

  if (score === questions.length) {
    finalMessage.innerHTML = "<h2>Congratulations! You got all the answers right!</h2><canvas id='confetti'></canvas>";
    launchConfetti();
  } else {
    finalMessage.innerHTML = `<h2>Thanks for playing!</h2><p>Your score: ${score}/${questions.length}</p>`;
  }
}

function launchConfetti() {
  // Placeholder for actual confetti effect
  alert("🎉 Confetti! 🎉 You did it!");
}
