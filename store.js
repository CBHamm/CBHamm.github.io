document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            "gear_manu": "Petzl",
            "gear_name": "Omni Locking Carabiner, Screw-Lock",
            "gear_cost": "23.95",
            "gear_image": "images/carabiner-omni.png.jpeg"
        },
        {
            "gear_manu": "Petzl",
            "gear_name": "AmD Screw Lock Carabiner",
            "gear_cost": "18.95",
            "gear_image": "images/carabiner-amd.png.jpeg"
        },
        {
            "gear_manu": "Petzl",
            "gear_name": "Attache",
            "gear_cost": "19.00",
            "gear_image": "images/attache.png.jpeg"
        },
        {
            "gear_manu": "Petzl",
            "gear_name": "SmD Twist-Lock Autolock Carabiner",
            "gear_cost": "22.95",
            "gear_image": "images/smdcarabiner.png.jpeg"
        },
        {
            "gear_manu": "Black Diamond",
            "gear_name": "RockLock TwistLock - Gray",
            "gear_cost": "22.95",
            "gear_image": "images/rocklock.png.jpeg"
        },
        {
            "gear_manu": "Black Diamond",
            "gear_name": "Hotforge Screwgate 3 Pack",
            "gear_cost": "34.95",
            "gear_image": "images/hotforge-pack.png.jpeg"
        },
        {
            "gear_manu": "Black Diamond",
            "gear_name": "Hotforge Screwgate",
            "gear_cost": "12.95",
            "gear_image": "images/hotforge.png.jpeg"
        },
        {
            "gear_manu": "Black Diamond",
            "gear_name": "Camalot C4 2nds - Size .75",
            "gear_cost": "63.96",
            "gear_image": "images/camalot.png.jpeg"
        }
    ];

    const productGrid = document.getElementById("product-grid");
    const cartCount = document.getElementById("cart-count");
    let cart = [];

    // Render Products
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4";
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.gear_image}" class="card-img-top" alt="${product.gear_name}">
                <div class="card-body">
                    <h5 class="card-title">${product.gear_name}</h5>
                    <p class="card-text"><strong>Manufacturer:</strong> ${product.gear_manu}</p>
                    <p class="card-text"><strong>Price:</strong> $${product.gear_cost}</p>
                    <button class="btn btn-primary add-to-cart" data-name="${product.gear_name}" data-price="${product.gear_cost}">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            cart.push({ name, price });
            cartCount.textContent = cart.length;
            alert(`${name} has been added to your cart!`);
        });
    });

    // Search Functionality
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.gear_name.toLowerCase().includes(query) || product.gear_manu.toLowerCase().includes(query)
        );

        productGrid.innerHTML = "";
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "col-md-4";
            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="${product.gear_image}" class="card-img-top" alt="${product.gear_name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.gear_name}</h5>
                        <p class="card-text"><strong>Manufacturer:</strong> ${product.gear_manu}</p>
                        <p class="card-text"><strong>Price:</strong> $${product.gear_cost}</p>
                        <button class="btn btn-primary add-to-cart" data-name="${product.gear_name}" data-price="${product.gear_cost}">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    });
});
