const planets = [
    {
        name: "Mercury",
        order: 1,
        diameterKm: 4879,
        funFact: "Mercury is the closest planet to the Sun and has no atmosphere."
    },
    {
        name: "Mars",
        order: 4,
        diameterKm: 6779,
        funFact: "Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface."
    },
    {
        name: "Earth",
        order: 3,
        diameterKm: 12742,
        funFact: "Earth is the only planet known to support life and has a diverse range of ecosystems."
    },
    {
        name: "Venus",
        order: 2,
        diameterKm: 12104,
        funFact: "Venus has a thick atmosphere that traps heat, making it the hottest planet in our solar system."
    },
    {
        name: "Jupiter",
        order: 5,
        diameterKm: 139820,
        funFact: "Jupiter is the largest planet in our solar system and has a Great Red Spot, which is a giant storm."
    },
    {
        name: "Saturn",
        order: 6,
        diameterKm: 116460,
        funFact: "Saturn is famous for its stunning ring system, which is made up of ice and rock particles."
    }

    
];


const planetsList = document.getElementById("planet-list");
const orderButton = document.getElementById("sort-order");
const diameterButton = document.getElementById("sort-diameter");

let orderAscending = true;
let diameterAscending = true;

function displayPlanets() {
    planetsList.innerHTML = "";
    planets.forEach((planet) => {
        const planetCard = document.createElement("div");
        planetCard.classList.add("planet-card");

        planetCard.innerHTML = `
        <h2>${planet.name}</h2>
        <p>Order from the Sun: ${planet.order}</p>
        <p>Diameter: ${planet.diameterKm} km</p>
        `;

        const fact = document.createElement("p");
        fact.textContent = planet.funFact;
        fact.style.display = "none";

        planetCard.appendChild(fact);

        planetCard.addEventListener("click", () => {
            if (fact.style.display === "none") {
                fact.style.display = "block";
            } else {
                fact.style.display = "none";
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        planetCard.appendChild(deleteButton);

        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const index = planets.indexOf(planet);
            if (index !== -1) {
                planets.splice(index, 1);
            }

            displayPlanets();
        });

        planetsList.appendChild(planetCard);

});
}

orderButton.addEventListener("click", () => {
    if (orderAscending) {
        planets.sort((a, b) => a.order - b.order);

    } else {

        planets.sort((a, b) => b.order - a.order);
    }

    orderAscending = !orderAscending;

    displayPlanets();
});

    diameterButton.addEventListener("click", () => {
        if (diameterAscending) {

            planets.sort((a, b) => a.diameterKm - b.diameterKm);

        } else {

            planets.sort((a, b) => b.diameterKm - a.diameterKm);
        }

        diameterAscending = !diameterAscending;

        displayPlanets();
    });

    displayPlanets();