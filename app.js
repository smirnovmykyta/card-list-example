// Daten für die erste und zweite Kartenauswahl
const firstSet = [
  { title: "Card 1", description: "This is the first card." },
  { title: "Card 2", description: "This is the second card." },
  { title: "Card 3", description: "This is the third card." },
];

const secondSet = [
  { title: "Card A", description: "This is another card." },
  { title: "Card B", description: "Here is a different card." },
];

// Funktion zum Erstellen einer Karte
function createCard({ title, description }) {
  const card = document.createElement("div");
  card.className = "bg-white shadow rounded p-4";
  card.innerHTML = `<h2 class="text-lg font-bold mb-2">${title}</h2><p>${description}</p>`;
  return card;
}

// Funktion zum Laden von Karten in einen Behälter
function loadCards(cardData) {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Очистка контейнера
  cardData.forEach((data) => {
    const card = createCard(data);
    container.appendChild(card);
  });
}

// Funktion zum Nachladen von Karten
function reloadCards() {
  const newCards = Math.random() > 0.5 ? firstSet : secondSet; // Случайный выбор
  loadCards(newCards);
}

// Startkarten initialisieren
loadCards(firstSet);
