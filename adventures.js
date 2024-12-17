document.addEventListener("DOMContentLoaded", () => {
    const adventures = [
        {
            adventurename: "Seneca Rocks",
            adventuredate: "July 14, 2024",
            adventurephoto: "seneca.png",
            customername: "Denver",
            customerquote: "Amazing",
            excurstionstmt: "Very cool",
            descriptionfile: "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
        },
        {
            adventurename: "Red River Gorge",
            adventuredate: "June 14, 2024",
            adventurephoto: "rrg.png",
            customername: "Marie",
            customerquote: "Fantastic",
            excurstionstmt: "Beautiful trip",
            descriptionfile: "Premier sport climbing area in eastern Kentucky."
        },
        {
            adventurename: "New River Gorge",
            adventuredate: "August 14, 2024",
            adventurephoto: "newrg.png",
            customername: "Jon",
            customerquote: "Righteous",
            excurstionstmt: "Wild and Wonderful",
            descriptionfile: "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
        },
        {
            adventurename: "Shawangunk",
            adventuredate: "September 14, 2024",
            adventurephoto: "gunks.png",
            customername: "Frank",
            customerquote: "Whoa",
            excurstionstmt: "Epic trip",
            descriptionfile: "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
        }
    ];

    const adventureCards = document.getElementById("adventure-cards");

    // Render Adventures
    adventures.forEach(adventure => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card">
                <img src="images/${adventure.adventurephoto}" class="card-img-top" alt="${adventure.adventurename}">
                <div class="card-body">
                    <h5 class="card-title">${adventure.adventurename}</h5>
                    <p class="card-text"><strong>Date:</strong> ${adventure.adventuredate}</p>
                    <p class="card-text">${adventure.descriptionfile}</p>
                    <p class="card-text"><strong>Customer:</strong> ${adventure.customername} - "${adventure.customerquote}"</p>
                </div>
            </div>
        `;
        adventureCards.appendChild(card);
    });

    // Handle Form Submission
    const inquiryForm = document.getElementById("inquiryForm");
    const formResponse = document.getElementById("formResponse");

    inquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("message").value;

        formResponse.innerHTML = `
            <div class="alert alert-success">
                <strong>Thank you, ${name}!</strong> Your request for more information about <strong>${interest}</strong> has been received.
                We'll contact you at <strong>${email}</strong> soon!
            </div>
        `;
        inquiryForm.reset();
    });
});
