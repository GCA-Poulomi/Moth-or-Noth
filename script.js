const questions = [
  { text: "Has fuzzy antennae?", answer: true, image: "https://images.unsplash.com/photo-1535090467336-9501f1c3e7e5" },
  { text: "Sleeps during the day?", answer: false, image: "https://images.unsplash.com/photo-1600099602285-f60a37651a79" },
  { text: "Loves porch lights at night?", answer: true, image: "https://images.unsplash.com/photo-1623085985524-faad94508ffb" },
  { text: "Makes honey?", answer: false, image: "https://images.unsplash.com/photo-1589891027565-b0c8e5c94f91" },
  { text: "Pollinates nighttime flowers?", answer: true, image: "https://images.unsplash.com/photo-1627818821525-34365a3f2db2" },
  { text: "Buzzes loudly when flying?", answer: false, image: "https://images.unsplash.com/photo-1596484553650-f966b7b3e2ee" },
  { text: "Helps feed baby birds?", answer: true, image: "https://images.unsplash.com/photo-1600865581014-06c1138d3a1b" },
  { text: "Drinks nectar from flowers?", answer: true, image: "https://images.unsplash.com/photo-1623245310904-1592b6093efc" }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('final-message').style.display = 'none';
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('moth-image').src = question.image;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(userAnswer) {
  const correct = questions[currentQuestion].answer;
  if (userAnswer === correct) {
    score++;
    document.getElementById('feedback').textContent = 'Correct!';
  } else {
    document.getElementById('feedback').textContent = 'Oops! Not quite.';
  }
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById('game-container').style.display = 'none';
  const final = document.getElementById('final-message');
  if (score === questions.length) {
    final.innerHTML = '<h2>Congratulations! You got all the answers right!</h2>';
    final.style.display = 'block';
    triggerConfetti();
  } else {
    final.innerHTML = `<h2>Great try! You got ${score} out of ${questions.length} correct.</h2>`;
    final.style.display = 'block';
  }
}

function triggerConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let pieces = Array.from({ length: 100 }, () => createPiece());

  function createPiece() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 + 1,
      radius: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  }

  function update() {
    for (let p of pieces) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
      if (p.x > canvas.width) p.x = 0;
    }
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  loop();
}
