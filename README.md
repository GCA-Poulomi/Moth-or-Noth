# 🦋 Moth or Not? – A Web Companion Game for Cambridge Moth Ball 2025

Welcome to **Moth or Not?** – a fun, educational browser-based game developed as a companion activity for the **2025 Cambridge Moth Ball**, celebrating **National Moth Week**. This is an **open educational resource** designed to help kids and adults alike test their knowledge of moths and their vital role in nature.

## 🎯 About the Game

This interactive web game helps players learn about moths through engaging true/false-style questions. Players are presented with statements about moth behavior, biology, and ecological importance, and must decide whether each statement describes a **MOTH** or **NOT**.

**Game Features:**
- 8 educational questions about moth facts and behaviors
- Beautiful side-by-side layout with questions and nature imagery
- Real-time scoring and progress tracking
- Detailed explanations for each answer
- Sound effects and smooth animations
- Celebratory confetti for perfect scores
- Fully responsive design for all devices
- Keyboard navigation support

## 🗓 Event Context

This web application was created as an **open educational resource** for the **Cambridge Moth Ball**, held on **Wednesday, July 23, 2025**, at Kingsley Park, Fresh Pond Reservation in Cambridge, MA. 

### Event Organizers
- **Boston Birding Festival** (Lead Organizer)
- Biodiversity for a Livable Climate
- Earthwise Aware
- Cambridge Wildlife Arts
- Mystic Charles Pollinator Pathways
- Native Plant Community Gardeners
- Cambridge Water Department

## 🧰 Tech Stack

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with animations and responsive design
- **Vanilla JavaScript** - Interactive game logic and Web Audio API
- **Google Fonts** - Typography (Inter & Playfair Display)

## 🖼️ Image Sources & Attribution

All images used in this educational game have been sourced from the following platforms under their respective licenses:

- **Unsplash** - High-quality nature and moth photography
- **Wikipedia** - Educational moth and nature imagery under Creative Commons
- **Pexels** - Free stock photography for educational use

*Note: This is an open educational resource. All images are used for educational purposes in accordance with their respective licensing terms.*

## 📂 File Structure

```
moth-or-not-game/
├── index.html          # Main game structure
├── style.css           # Styling and animations
├── script.js           # Game logic and interactions
├── README.md           # Project documentation
└── media/              # Image assets folder
    ├── media1.jpg      # Hero image (intro page)
    ├── media2.jpg      # Question 1 image
    ├── media3.jpg      # Question 2 image
    ├── media4.jpg      # Question 3 image
    ├── media5.jpg      # Question 4 image
    ├── media6.jpg      # Question 5 image
    ├── media7.jpg      # Question 6 image
    ├── media8.jpg      # Question 7 image
    └── media9.jpg      # Question 8 image
```

## 🚀 How to Use

1. **Download or clone** this repository
2. **Add your images** to the `media/` folder (media1.jpg through media9.jpg)
3. **Open `index.html`** in your browser, or
4. **Host the files** on a static server (GitHub Pages, Netlify, Vercel, etc.)

No backend or special server requirements needed!

## 🎮 Game Controls

### Mouse/Touch
- Click "Moth" or "Not" buttons to answer
- Click "Next Question" to proceed
- Click "Play Again" to restart

### Keyboard Shortcuts
- **1, M, ←** : Select "Moth"
- **2, N, →** : Select "Not"  
- **Enter/Space** : Next Question

## 🌱 Educational Objectives

This game teaches players about:
- **Moth anatomy** (fuzzy antennae, wing patterns)
- **Moth behavior** (nocturnal activity, light attraction)
- **Ecological roles** (pollination, food web importance)
- **Conservation awareness** (habitat protection, biodiversity)
- **Common misconceptions** (distinguishing moths from other insects)

## 🔧 Customization

### Adding More Questions
Edit the `questions` array in `script.js`:

```javascript
const questions = [
  { 
    text: "Your question here?", 
    answer: true, // or false
    image: "media/your-image.jpg",
    explanation: "Educational explanation here!"
  },
  // ... more questions
];
```

### Styling Changes
Modify `style.css` to:
- Change color schemes
- Adjust fonts and sizes
- Customize animations
- Update responsive breakpoints

## 🌍 Open Educational Resource

This project is developed as an **open educational resource (OER)** to:
- Promote moth conservation awareness
- Support environmental education initiatives
- Encourage citizen science participation
- Foster appreciation for biodiversity

Feel free to adapt, modify, and share this resource for educational purposes!

## 🦋 About Moths

Moths are fascinating nocturnal insects that play crucial roles in ecosystems:
- Over 160,000 moth species worldwide (10x more than butterflies!)
- Essential nighttime pollinators for many plants
- Important food sources for birds, bats, and spiders
- Indicators of environmental health
- Beautiful and diverse in colors and patterns

## 📧 Contact & Support

For questions about this educational resource or the Cambridge Moth Ball event, please reach out to the event organizers through the Boston Birding Festival.

## 🙏 Acknowledgments

- **Cambridge Moth Ball 2025 organizing committee**
- **Unsplash, Wikipedia, and Pexels** for educational imagery
- **National Moth Week** for inspiring moth conservation
- **Fresh Pond Reservation** for hosting the event
- The **open-source community** for web development resources

---

**Created in celebration of moths, biodiversity, and citizen science** 🌍🦋

*"In every walk with nature, one receives far more than they seek." - John Muir*