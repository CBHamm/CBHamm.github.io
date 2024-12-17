document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services-content");

    // Fetch the XML file
    fetch("services.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const services = xmlDoc.getElementsByTagName("service");

            for (let service of services) {
                const category = service.getElementsByTagName("category")[0].textContent;
                const title = service.getElementsByTagName("title")[0].textContent;
                const duration = service.getElementsByTagName("duration")[0].textContent;
                const cost = service.getElementsByTagName("cost")[0].textContent;
                const details = service.getElementsByTagName("details")[0].textContent;

                // Create Bootstrap Card
                const card = document.createElement("div");
                card.className = "col-md-4 mb-4";
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text"><strong>Category:</strong> ${category}</p>
                            <p class="card-text"><strong>Duration:</strong> ${duration}</p>
                            <p class="card-text"><strong>Cost:</strong> ${cost}</p>
                            <p class="card-text">${details}</p>
                            <a href="#" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                `;
                servicesContainer.appendChild(card);
            }
        })
        .catch(error => console.error("Error loading XML:", error));
});
