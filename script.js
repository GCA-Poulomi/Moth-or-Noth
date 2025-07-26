const questions = [
  { 
    text: "Has fuzzy antennae?", 
    answer: true, 
    image: "https://images.unsplash.com/photo-1535090467336-9501f1c3e7e5",
    explanation: "Moths have feathery or fuzzy antennae, unlike butterflies which have club-shaped antennae!"
  },
  { 
    text: "Sleeps during the day?", 
    answer: false, 
    image: "https://images.unsplash.com/photo-1600099602285-f60a37651a79",
    explanation: "This is too general - while many moths are nocturnal, some are active during the day!"
  },
  { 
    text: "Loves porch lights at night?", 
    answer: true, 
    image: "https://images.unsplash.com/photo-1623085985524-faad94508ffb",
    explanation: "Moths are famous for being attracted to artificial lights at night!"
  },
  { 
    text: "Makes honey?", 
    answer: false, 
    image: "https://images.unsplash.com/photo-1589891027565-b0c8e5c94f91",
    explanation: "Only bees make honey! Moths are pollinators but don't produce honey."
  },
  { 
    text: "Pollinates nighttime flowers?", 
    answer: true, 
    image: "https://images.unsplash.com/photo-1627818821525-34365a3f2db2",
    explanation: "Moths are crucial nighttime pollinators for many flowers, including tobacco and yucca!"
  },
  { 
    text: "Buzzes loudly when flying?", 
    answer: false, 
    image: "https://images.unsplash.com/photo-1596484553650-f966b7b3e2ee",
    explanation: "Moths typically fly silently, unlike buzzing bees or flies!"
  },
  { 
    text: "Helps feed baby birds?", 
    answer: true, 
    image: "https://images.unsplash.com/photo-1600865581014-06c1138d3a1b",
    explanation: "Moths and their caterpillars are a vital food source for many bird species!"
  },
  { 
    text: "Drinks nectar from flowers?", 
    answer: true, 
    image: "https://images.unsplash.com/photo-1623245310904-1592b6093efc",
    explanation: "Many adult moths feed on flower nectar, making them important pollinators!"
  }
];

let currentQuestion = 0;
let score = 0;
let gameStarted = false;
let answeredQuestions = [];

// Game State Management
function startGame() {
  // Hide intro and final sections
  document.getElementById('intro').style.display = 'none';
  document.getElementById('final-message').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  
  // Reset game state
  currentQuestion = 0;
  score = 0;
  gameStarted = true;
  answeredQuestions = [];
  
  // Update UI
  updateScoreDisplay();
  updateProgressBar();
  showQuestion();
  
  // Add smooth transition
  setTimeout(() => {
    document.getElementById('game-container').style.animation = 'fadeIn 0.5s ease-out';
  }, 100);
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }

  const question = questions[currentQuestion];
  
  // Update question content
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('moth-image').src = question.image;
  
  // Clear previous feedback and hide next button
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';
  document.getElementById('next-btn').style.display = 'none';
  
  // Re-enable answer buttons
  enableAnswerButtons();
  
  // Update progress and counters
  updateProgressBar();
  updateQuestionCounter();
  
  // Add entrance animation
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.animation = 'slideInUp 0.5s ease-out';
}

function checkAnswer(userAnswer) {
  const question = questions[currentQuestion];
  const isCorrect = userAnswer === question.answer;
  const feedback = document.getElementById('feedback');
  
  // Disable answer buttons to prevent multiple clicks
  disableAnswerButtons();
  
  // Store answer result
  answeredQuestions.push({
    questionIndex: currentQuestion,
    userAnswer: userAnswer,
    correct: isCorrect
  });
  
  // Update score
  if (isCorrect) {
    score++;
    updateScoreDisplay();
  }
  
  // Show feedback with animation
  setTimeout(() => {
    if (isCorrect) {
      feedback.textContent = `✅ Correct! ${question.explanation}`;
      feedback.className = 'feedback correct';
      playCorrectSound();
    } else {
      feedback.textContent = `❌ Not quite. ${question.explanation}`;
      feedback.className = 'feedback incorrect';
      playIncorrectSound();
    }
    
    // Show next button
    document.getElementById('next-btn').style.display = 'inline-block';
  }, 300);
}

function nextQuestion() {
  currentQuestion++;
  
  // Add exit animation
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.animation = 'fadeOut 0.3s ease-out';
  
  setTimeout(() => {
    showQuestion();
  }, 300);
}

function endGame() {
  document.getElementById('game-container').style.display = 'none';
  const finalSection = document.getElementById('final-message');
  const resultsIcon = document.getElementById('results-icon');
  const resultsTitle = document.getElementById('results-title');
  const resultsSubtitle = document.getElementById('results-subtitle');
  const finalScore = document.getElementById('final-score');
  
  // Calculate percentage
  const percentage = Math.round((score / questions.length) * 100);
  
  // Set results content based on score
  if (score === questions.length) {
    resultsIcon.textContent = '🏆';
    resultsTitle.textContent = 'Perfect Score!';
    resultsSubtitle.textContent = 'You\'re a moth expert! Congratulations on getting every question right!';
    triggerConfetti();
  } else if (percentage >= 75) {
    resultsIcon.textContent = '🌟';
    resultsTitle.textContent = 'Excellent Work!';
    resultsSubtitle.textContent = 'You know a lot about moths! Just a few more facts to master.';
  } else if (percentage >= 50) {
    resultsIcon.textContent = '👍';
    resultsTitle.textContent = 'Good Job!';
    resultsSubtitle.textContent = 'You\'re on your way to becoming a moth expert!';
  } else {
    resultsIcon.textContent = '🦋';
    resultsTitle.textContent = 'Keep Learning!';
    resultsSubtitle.textContent = 'Every expert was once a beginner. Try again to improve your moth knowledge!';
  }
  
  finalScore.textContent = `${score}/${questions.length}`;
  finalSection.style.display = 'block';
  
  // Add entrance animation
  finalSection.style.animation = 'fadeIn 0.5s ease-out';
}

// UI Helper Functions
function updateScoreDisplay() {
  document.getElementById('score-text').textContent = score;
}

function updateProgressBar() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('progress').style.width = `${progress}%`;
}

function updateQuestionCounter() {
  document.getElementById('question-number').textContent = currentQuestion + 1;
  document.getElementById('total-questions').textContent = questions.length;
}

function enableAnswerButtons() {
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  });
}

function disableAnswerButtons() {
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.style.cursor = 'not-allowed';
  });
}

// Sound Effects (using Web Audio API)
function playCorrectSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    // Fallback for browsers that don't support Web Audio API
    console.log('Audio not supported');
  }
}

function playIncorrectSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
    oscillator.frequency.setValueAtTime(196, audioContext.currentTime + 0.15); // G3
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    // Fallback for browsers that don't support Web Audio API
    console.log('Audio not supported');
  }
}

// Enhanced Confetti Animation
function triggerConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
  let pieces = [];
  
  // Create confetti pieces
  for (let i = 0; i < 150; i++) {
    pieces.push(createConfettiPiece());
  }
  
  function createConfettiPiece() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      dx: Math.random() * 4 - 2,
      dy: Math.random() * 3 + 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? 'circle' : 'square',
      life: 1,
      decay: Math.random() * 0.01 + 0.005
    };
  }
  
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    pieces.forEach(piece => {
      ctx.save();
      ctx.globalAlpha = piece.life;
      ctx.translate(piece.x + piece.size / 2, piece.y + piece.size / 2);
      ctx.rotate(piece.rotation * Math.PI / 180);
      ctx.fillStyle = piece.color;
      
      if (piece.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
      }
      
      ctx.restore();
    });
  }
  
  function updateConfetti() {
    pieces.forEach(piece => {
      piece.x += piece.dx;
      piece.y += piece.dy;
      piece.rotation += piece.rotationSpeed;
      piece.life -= piece.decay;
      
      // Reset pieces that have fallen off screen or faded
      if (piece.y > canvas.height || piece.life <= 0) {
        Object.assign(piece, createConfettiPiece());
        piece.y = -piece.size;
      }
      
      // Wrap horizontally
      if (piece.x > canvas.width + piece.size) {
        piece.x = -piece.size;
      } else if (piece.x < -piece.size) {
        piece.x = canvas.width + piece.size;
      }
    });
  }
  
  function animate() {
    drawConfetti();
    updateConfetti();
    
    // Stop animation after 5 seconds
    if (pieces.some(piece => piece.life > 0)) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
  
  // Clean up after 5 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (!gameStarted) return;
  
  switch(e.key) {
    case '1':
    case 'ArrowLeft':
      if (document.getElementById('next-btn').style.display === 'none') {
        checkAnswer(true);
      }
      break;
    case '2':
    case 'ArrowRight':
      if (document.getElementById('next-btn').style.display === 'none') {
        checkAnswer(false);
      }
      break;
    case 'Enter':
    case ' ':
      if (document.getElementById('next-btn').style.display !== 'none') {
        nextQuestion();
      }
      break;
  }
});

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial question counter
  document.getElementById('total-questions').textContent = questions.length;
  
  // Preload images for better performance
  questions.forEach(question => {
    const img = new Image();
    img.src = question.image;
  });
});