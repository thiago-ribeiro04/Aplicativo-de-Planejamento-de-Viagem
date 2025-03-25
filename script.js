function loadTrips() {
    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    const tripList = document.getElementById("trip-list");
    tripList.innerHTML = "";  

    trips.forEach((trip, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${trip.destination}</span> (${trip.startDate} - ${trip.endDate})<br>
            <strong>Voo:</strong> ${trip.flight}<br>
            <strong>Hotel:</strong> ${trip.hotel}<br>
            <strong>Atividades:</strong> ${trip.activities.join(", ")}<br>
            <button class="delete-btn" data-index="${index}">Excluir</button>
        `;
        tripList.appendChild(listItem);
    });
}

function saveTrips(trips) {
    localStorage.setItem("trips", JSON.stringify(trips));
}

document.getElementById("trip-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const flight = document.getElementById("flight").value;
    const hotel = document.getElementById("hotel").value;
    const activities = document.getElementById("activities").value.split(",");

    const newTrip = { destination, startDate, endDate, flight, hotel, activities };

    const trips = JSON.parse(localStorage.getItem("trips")) || [];

    trips.push(newTrip);

    saveTrips(trips);

    document.getElementById("trip-form").reset();

    loadTrips();
});

document.getElementById("trip-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = event.target.getAttribute("data-index");
        
        const trips = JSON.parse(localStorage.getItem("trips")) || [];
        
        trips.splice(index, 1);
        
        saveTrips(trips);
        
        loadTrips();
    }
});

window.onload = loadTrips;

