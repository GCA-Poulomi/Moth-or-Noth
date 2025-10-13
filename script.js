const questions = [
  { 
    text: "Has fuzzy antennae?", 
    answer: true, 
    image: "media/media2.jpg",
    explanation: "Moths have feathery or fuzzy antennae, unlike butterflies which have club-shaped antennae!"
  },
  { 
    text: "Sleeps during the day?", 
    answer: false, 
    image: "media/media3.jpg",
    explanation: "This is too general - while many moths are nocturnal, some are active during the day!"
  },
  { 
    text: "Loves porch lights at night?", 
    answer: true, 
    image: "media/media4.jpg",
    explanation: "Moths are famous for being attracted to artificial lights at night!"
  },
  { 
    text: "Makes honey?", 
    answer: false, 
    image: "media/media5.jpg",
    explanation: "Only bees make honey! Moths are pollinators but don't produce honey."
  },
  { 
    text: "Pollinates nighttime flowers?", 
    answer: true, 
    image: "media/media6.jpg",
    explanation: "Moths are crucial nighttime pollinators for many flowers, including tobacco and yucca!"
  },
  { 
    text: "Buzzes loudly when flying?", 
    answer: false, 
    image: "media/media7.jpg",
    explanation: "Moths typically fly silently, unlike buzzing bees or flies!"
  },
  { 
    text: "Helps feed baby birds?", 
    answer: true, 
    image: "media/media8.jpg",
    explanation: "Moths and their caterpillars are a vital food source for many bird species!"
  },
  { 
    text: "Drinks nectar from flowers?", 
    answer: true, 
    image: "media/media9.jpg",
    explanation: "Many adult moths feed on flower nectar, making them important pollinators!"
  },
  {
    text: "Some adult moths are born without mouths and cannot eat?",
    answer: true,
    image: "media/media10.jpg",
    explanation: "It's true! Species like the Luna moth don't have mouthparts and live only for about a week to mate."
  },
  {
    text: "Evolved to look like bird droppings for camouflage?",
    answer: true,
    image: "media/media11.jpg",
    explanation: "Yes, some moths, like the beautiful wood nymph, have markings that mimic bird droppings to avoid predators."
  },
  {
    text: "Moths outnumber butterfly species by more than 10 to 1?",
    answer: true,
    image: "media/media12.jpg",
    explanation: "There are over 160,000 species of moths, far outnumbering the approximately 18,500 species of butterflies."
  },
  {
    text: "The famous 'wooly bear' caterpillar turns into a butterfly?",
    answer: false,
    image: "media/media13.jpg",
    explanation: "The wooly bear caterpillar transforms into the Isabella tiger moth, not a butterfly."
  },
  {
    text: "Can have a wingspan of nearly a foot?",
    answer: true,
    image: "media/media14.jpg",
    explanation: "The Atlas moth of Southeast Asia is one of the largest moths, with a wingspan that can reach almost 12 inches."
  },
  {
    text: "Some of their caterpillars live underwater?",
    answer: true,
    image: "media/media15.jpg",
    explanation: "Certain species, like the China-mark moths, have aquatic caterpillars that feed on pond plants."
  },
  {
    text: "Only come in dull, brown colors?",
    answer: false,
    image: "media/media16.jpg",
    explanation: "Many moths are incredibly vibrant, coming in all colors of the rainbow, just like butterflies."
  },
  {
    text: "Evolved much later than butterflies?",
    answer: false,
    image: "media/media17.jpg",
    explanation: "Fossil records show that moths evolved long before butterflies, with some fossils dating back 190 million years."
  },
  {
    text: "Can 'jam' the sonar of a hunting bat?",
    answer: true,
    image: "media/media18.jpg",
    explanation: "Some tiger moths can produce ultrasonic clicks to confuse bats and disrupt their echolocation."
  },
  {
    text: "A male can smell a female from over 7 miles away?",
    answer: true,
    image: "media/media19.jpg",
    explanation: "Male giant silkworm moths have incredible antennae that can detect a female's pheromones from miles away."
  },
  {
    text: "All adult moths will eat holes in your clothing?",
    answer: false,
    image: "media/media20.jpg",
    explanation: "Only a couple of species are known for eating fabrics. Most adult moths don't eat clothes at all."
  },
  {
    text: "Can be cannibals in their caterpillar stage?",
    answer: true,
    image: "media/media21.jpg",
    explanation: "Some moth caterpillars, like the Dun-bar, will eat other caterpillars, including their own kind, if food is scarce."
  },
  {
    text: "Are active and fly around even in the middle of winter?",
    answer: true,
    image: "media/media22.jpg",
    explanation: "Some hardy moth species are adapted to fly in the cold and can be spotted on mild winter days."
  },
  {
    text: "Every single moth species spins a cocoon?",
    answer: false,
    image: "media/media23.jpg",
    explanation: "While many moths make cocoons, some burrow underground or into wood to pupate without one."
  },
  {
    text: "All moths are attracted to artificial light?",
    answer: false,
    image: "media/media24.jpg",
    explanation: "While many are drawn to light (positive phototaxis), some species are actually repelled by it."
  },
  {
    text: "Can be as tiny as the tip of a pencil?",
    answer: true,
    image: "media/media25.jpg",
    explanation: "Micromoths can be incredibly small, with some having a wingspan of only a few millimeters."
  },
  {
    text: "One species is famous for a skull-like pattern on its back?",
    answer: true,
    image: "media/media26.jpg",
    explanation: "The Death's-head hawk-moth is well-known for the spooky, skull-shaped marking on its thorax."
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
  
  // Handle image loading with error fallback
  const imageElement = document.getElementById('moth-image');
  imageElement.onload = function() {
    console.log('Image loaded successfully:', question.image);
  };
  imageElement.onerror = function() {
    console.error('Failed to load image:', question.image);
    // Fallback to a placeholder or default image
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
  };
  imageElement.src = question.image;
  
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
  
  // Add entrance animation to question
  const questionText = document.getElementById('question-text');
  questionText.style.animation = 'none';
  setTimeout(() => {
    questionText.style.animation = 'slideInUp 0.5s ease-out';
  }, 50);
  
  // Add image entrance animation
  const imageWrapper = document.querySelector('.image-wrapper');
  imageWrapper.style.animation = 'none';
  setTimeout(() => {
    imageWrapper.style.animation = 'fadeIn 0.5s ease-out';
  }, 200);
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
  
  // Add subtle transition
  const gameContent = document.querySelector('.game-content');
  gameContent.style.opacity = '0.7';
  
  setTimeout(() => {
    showQuestion();
    gameContent.style.opacity = '1';
  }, 200);
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
    resultsSubtitle.textContent = 'You\'re a moth expert! Congratulations on getting every question right! You clearly know your way around the fascinating world of moths.';
    triggerConfetti();
  } else if (percentage >= 75) {
    resultsIcon.textContent = '🌟';
    resultsTitle.textContent = 'Excellent Work!';
    resultsSubtitle.textContent = 'You know a lot about moths! Just a few more facts to master and you\'ll be a true moth expert.';
  } else if (percentage >= 50) {
    resultsIcon.textContent = '👍';
    resultsTitle.textContent = 'Good Job!';
    resultsSubtitle.textContent = 'You\'re on your way to becoming a moth expert! Keep learning about these amazing creatures.';
  } else {
    resultsIcon.textContent = '🦋';
    resultsTitle.textContent = 'Keep Learning!';
    resultsSubtitle.textContent = 'Every expert was once a beginner. Try again to improve your moth knowledge! These nocturnal beauties have so much to teach us.';
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
    case 'm':
    case 'M':
      if (document.getElementById('next-btn').style.display === 'none') {
        checkAnswer(true);
      }
      break;
    case '2':
    case 'ArrowRight':
    case 'n':
    case 'N':
      if (document.getElementById('next-btn').style.display === 'none') {
        checkAnswer(false);
      }
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
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

// Image preloading and validation
function preloadImages() {
  questions.forEach((question, index) => {
    const img = new Image();
    img.onload = function() {
      console.log(`✅ Image ${index + 1} loaded successfully:`, question.image);
    };
    img.onerror = function() {
      console.error(`❌ Failed to load image ${index + 1}:`, question.image);
    };
    img.src = question.image;
  });
  
  // Also preload hero image
  const heroImg = new Image();
  heroImg.onload = function() {
    console.log('✅ Hero image loaded successfully');
  };
  heroImg.onerror = function() {
    console.error('❌ Failed to load hero image: media/media1.jpg');
  };
  heroImg.src = 'media/media1.jpg';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial question counter
  document.getElementById('total-questions').textContent = questions.length;
  
  // Preload all images for better performance
  preloadImages();
  
  // Add keyboard hint to the page
  console.log('🎮 Keyboard shortcuts:');
  console.log('  1, M, ← : Select Moth');
  console.log('  2, N, → : Select Not');
  console.log('  Enter/Space : Next Question');
});
