// Obținem referințe la elementele din HTML
var sceneElement = document.getElementById("scene");
var actionButton = document.getElementById("actionButton");
var messageElement = document.getElementById("message");

// Variabile pentru starea jocului
var currentScene = 0;

// Definim scenele jocului
var scenes = [
  {
    message: "Ești într-o pădure întunecată. Ce alegi să faci?",
    choices: [
      { text: "Mergi înainte", nextScene: 1 },
      { text: "Te întorci înapoi", nextScene: 2 }
    ]
  },
  {
    message: "Ai găsit o peșteră misterioasă. Ce vrei să faci?",
    choices: [
      { text: "Explorăm peștera", nextScene: 3 },
      { text: "Continuăm să mergem", nextScene: 4 }
    ]
  },
  {
    message: "Ai întâlnit un monstru înspăimântător! Ce faci?",
    choices: [
      { text: "Luptăm cu monstrul", nextScene: 5 },
      { text: "Încerci să scapi", nextScene: 6 }
    ]
  },
  {
    message: "Ai descoperit o comoară ascunsă în peșteră. Bravo!",
    choices: [
      { text: "Joci din nou", nextScene: 0 }
    ]
  },
  {
    message: "Ai ajuns la marginea pădurii. Felicitări, ai terminat jocul!",
    choices: [
      { text: "Joci din nou", nextScene: 0 }
    ]
  },
  {
    message: "Ai învins monstrul și ai supraviețuit! Bravo!",
    choices: [
      { text: "Joci din nou", nextScene: 0 }
    ]
  },
  {
    message: "Ai fost prins de monstru. Jocul s-a terminat.",
    choices: [
      { text: "Joci din nou", nextScene: 0 }
    ]
  }
];

// Funcție pentru actualizarea scenei
function updateScene() {
  var scene = scenes[currentScene];
  
  // Actualizăm mesajul scenei
  messageElement.textContent = scene.message;
  
  // Stergem toate butoanele de acțiune existente
  while (actionButton.firstChild) {
    actionButton.removeChild(actionButton.firstChild);
  }
  
  // Adăugăm butoane pentru fiecare opțiune din scenă
  for (var i = 0; i < scene.choices.length; i++) {
    var choice = scene.choices[i];
    var button = document.createElement("button");
    button.textContent = choice.text;
    
    // Adăugăm un eveniment de click pentru fiecare buton
    button.addEventListener("click", createChoiceHandler(choice.nextScene));
    
    actionButton.appendChild(button);
  }
}

// Funcție pentru gestionarea acțiunilor de click
function createChoiceHandler(nextScene) {
  return function() {
    currentScene = nextScene;
    updateScene();
  };
}

// Inițializare joc
updateScene();
