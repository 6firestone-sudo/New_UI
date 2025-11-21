// ======================================================
// Global Constants and Data Setup
// ======================================================

// EmailJS Credentials
const EMAILJS_PUBLIC_KEY = '0CV0N42qYc1Rp59R8';
const EMAILJS_SERVICE_ID = 'HMVWORLD_service';
const EMAILJS_TEMPLATE_ID = 'Contactus';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Product Data Structure (Used for Products Page and Quotation Auto-Fill)
const PRODUCTS_DATA = [
    { name: "Spices", hs_code: "0900", hs_name: "Spices, various types", description: "Aromatic and pungent vegetable substances used to flavor food.",
        sub_products: [
            { sub_name: "Black Pepper", spec: "Grade A, 550g/l minimum", ingredients: "100% Black Peppercorns", uses: "General seasoning, medicinal use.", image: "https://placehold.co/400x300/1e293b/fff?text=Black+Pepper" },
            { sub_name: "Turmeric", spec: "Curcumin 5%, Polished", ingredients: "100% Turmeric Root", uses: "Coloring agent, anti-inflammatory, culinary spice.", image: "https://placehold.co/400x300/1e293b/fff?text=Turmeric" },
            { sub_name: "Cumin", spec: "Purity 99%", ingredients: "100% Cumin Seeds", uses: "Flavoring curries and stews, digestive aid.", image: "https://placehold.co/400x300/1e293b/fff?text=Cumin" },
            { sub_name: "Cardamom", spec: "8mm Green, A Grade", ingredients: "100% Cardamom Pods", uses: "Beverages, desserts, savory dishes, mouth freshener.", image: "https://placehold.co/400x300/1e293b/fff?text=Cardamom" },
            { sub_name: "Saffron", spec: "Grade 1, Kashmiri origin", ingredients: "100% Saffron Stigmas", uses: "Coloring, flavoring, traditional medicine.", image: "https://placehold.co/400x300/1e293b/fff?text=Saffron" },
            { sub_name: "Chili", spec: "S4 variety, high heat", ingredients: "100% Dried Red Chilies", uses: "Heat and spice addition to food.", image: "https://placehold.co/400x300/1e293b/fff?text=Chili" },
            // ... other spices
        ]
    },
    { name: "Pulses", hs_code: "0713", hs_name: "Dried leguminous vegetables, shelled", description: "High-protein edible seeds of legume plants.",
        sub_products: [
            { sub_name: "Green Moong", spec: "Whole, machine cleaned", ingredients: "100% Moong Beans", uses: "Soups, stews, sprouts, curries.", image: "https://placehold.co/400x300/1e293b/fff?text=Green+Moong" },
            { sub_name: "Red Lentil", spec: "Split, without skin", ingredients: "100% Masoor Dal", uses: "Dals, purees, quick-cooking.", image: "https://placehold.co/400x300/1e293b/fff?text=Red+Lentil" },
            { sub_name: "Chickpea/Gram", spec: "Kabuli, 10mm size", ingredients: "100% Chickpeas", uses: "Hummus, curries, roasted snacks.", image: "https://placehold.co/400x300/1e293b/fff?text=Chickpea" },
            // ... other pulses
        ]
    },
    { name: "Grains and Cereal", hs_code: "1006", hs_name: "Rice; Wheat and Meslin", description: "Staple food crops including rice, wheat, and millets.",
        sub_products: [
            { sub_name: "Rice (Basmati)", spec: "Extra long grain, aged 1 year", ingredients: "100% Basmati Rice", uses: "Biryani, pilaf, premium dishes.", image: "https://placehold.co/400x300/1e293b/fff?text=Rice" },
            { sub_name: "Wheat", spec: "Durum, Milling quality", ingredients: "100% Wheat Grains", uses: "Flour, bread, pasta.", image: "https://placehold.co/400x300/1e293b/fff?text=Wheat" },
            { sub_name: "Millets (Jowar)", spec: "Grade A, dried", ingredients: "100% Sorghum", uses: "Roti, porridge, health food.", image: "https://placehold.co/400x300/1e293b/fff?text=Millets" },
            // ... other grains
        ]
    },
    { name: "Dry Fruits", hs_code: "0801", hs_name: "Nuts and other edible parts of plants", description: "Dried edible fruits and nuts.",
        sub_products: [
            { sub_name: "Cashew", spec: "W320, roasted/raw", ingredients: "100% Cashews", uses: "Snacks, desserts, garnishes.", image: "https://placehold.co/400x300/1e293b/fff?text=Cashew" },
            { sub_name: "Almonds", spec: "California/Mamra variety", ingredients: "100% Almonds", uses: "Snacks, baking, milk alternative.", image: "https://placehold.co/400x300/1e293b/fff?text=Almonds" },
            { sub_name: "Dates", spec: "Seedless, Medjool variety", ingredients: "100% Dates", uses: "Sweetener, snacks, energy booster.", image: "https://placehold.co/400x300/1e293b/fff?text=Dates" },
        ]
    },
    { name: "Dehydrated Products", hs_code: "0712", hs_name: "Dried vegetables, whole, cut, sliced or broken", description: "Fruits and vegetables processed for extended shelf life.",
        sub_products: [
            { sub_name: "Dehydrated Onion Flakes", spec: "White, 8-16 mesh", ingredients: "100% Onion", uses: "Soups, instant meals, spice blends.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Onion" },
            { sub_name: "Dehydrated Garlic Powder", spec: "40-80 mesh, strong aroma", ingredients: "100% Garlic", uses: "Seasoning, rubs, marinades.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Garlic" },
            { sub_name: "Dehydrated Fruits Mix", spec: "Assorted, unsweetened", ingredients: "Mix of various fruits", uses: "Trail mix, baking, breakfast cereal.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Fruits" },
        ]
    },
    { name: "Fruits", hs_code: "0803", hs_name: "Fruits, fresh or dried", description: "Fresh and various specialty fruits.",
        sub_products: [
            { sub_name: "Banana (Grand Naine)", spec: "Green, Grade A, 4-7 hands/stem", ingredients: "100% Fresh Banana", uses: "Direct consumption, processing, export.", image: "https://placehold.co/400x300/1e293b/fff?text=Grand+Naine+Banana" },
            { sub_name: "Mango (Alphonso)", spec: "Hapus, Export quality", ingredients: "100% Fresh Mango", uses: "Direct consumption, pulp extraction.", image: "https://placehold.co/400x300/1e293b/fff?text=Alphonso+Mango" },
            { sub_name: "Pomegranate", spec: "Bhagwa variety, deep red", ingredients: "100% Fresh Pomegranate", uses: "Juice, consumption, salads.", image: "https://placehold.co/400x300/1e293b/fff?text=Pomegranate" },
            // ... other fruits
        ]
    },
    { name: "Vegetables", hs_code: "0703", hs_name: "Onions, shallots, garlic, leeks, and other alliaceous vegetables", description: "Fresh seasonal and staple vegetables.",
        sub_products: [
            { sub_name: "Onion (Red)", spec: "Grade A, 50-70mm size", ingredients: "100% Red Onion", uses: "Cooking staple, export market.", image: "https://placehold.co/400x300/1e293b/fff?text=Red+Onion" },
            { sub_name: "Potato (Fresh)", spec: "Chipsona variety, round", ingredients: "100% Fresh Potato", uses: "Fries, curries, general cooking.", image: "https://placehold.co/400x300/1e293b/fff?text=Potato" },
            { sub_name: "Bell Pepper (California Wonder)", spec: "Mixed color, firm", ingredients: "100% Bell Pepper", uses: "Salads, stuffing, grilling.", image: "https://placehold.co/400x300/1e293b/fff?text=Bell+Pepper" },
            // ... other vegetables
        ]
    },
    { name: "Herbs", hs_code: "1211", hs_name: "Plants and parts of plants, used in pharmacy or for similar purposes", description: "Medicinal and aromatic herbs.",
        sub_products: [
            { sub_name: "Neem", spec: "Dried leaves, high purity", ingredients: "100% Neem leaves", uses: "Ayurvedic medicine, pest control.", image: "https://placehold.co/400x300/1e293b/fff?text=Neem" },
            { sub_name: "Ashwagandha", spec: "Dried roots, powder form available", ingredients: "100% Ashwagandha root", uses: "Adaptogen, stress relief, traditional medicine.", image: "https://placehold.co/400x300/1e293b/fff?text=Ashwagandha" },
            { sub_name: "Tulasi (Holy Basil)", spec: "Dried leaves and stem", ingredients: "100% Tulasi", uses: "Herbal tea, respiratory health.", image: "https://placehold.co/400x300/1e293b/fff?text=Tulasi" },
        ]
    },
    { name: "INCENSE STICK", hs_code: "3307", hs_name: "Preparations for perfuming or deodorizing rooms", description: "Aromatic materials which release fragrant smoke when burned.",
        sub_products: [
            { sub_name: "Incense Sticks", spec: "Charcoal-free, various scents", ingredients: "Bamboo, natural resins, essential oils", uses: "Meditation, religious ceremonies, air freshening.", image: "https://placehold.co/400x300/1e293b/fff?text=Incense+Sticks" },
            { sub_name: "Dhoop Cones", spec: "Cow dung base, herbal mix", ingredients: "Natural herbs, resins, cow dung", uses: "Traditional rituals, natural air purification.", image: "https://placehold.co/400x300/1e293b/fff?text=Dhoop+Cones" },
        ]
    },
    { name: "IMITATION JEWELRY", hs_code: "7117", hs_name: "Imitation jewellery", description: "Jewelry made from non-precious materials.",
        sub_products: [
            { sub_name: "Necklaces", spec: "Alloy based, antique finish", ingredients: "Brass, copper, glass beads", uses: "Fashion accessory, bulk export for retail.", image: "https://placehold.co/400x300/1e293b/fff?text=Necklaces" },
            { sub_name: "Earrings", spec: "Oxidized silver look, lightweight", ingredients: "White metal, CZ stones", uses: "Fashion accessory, wedding wear.", image: "https://placehold.co/400x300/1e293b/fff?text=Earrings" },
            { sub_name: "Bangles and Bracelets", spec: "Lacquer/Acrylic, regional designs", ingredients: "Lac, glass, acrylic, metal core", uses: "Traditional wear, cultural exports.", image: "https://placehold.co/400x300/1e293b/fff?text=Bangles" },
        ]
    }
];

// Country Codes
const COUNTRY_CODES = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "UK", code: "+44" },
    { name: "China", code: "+86" },
    { name: "Germany", code: "+49" },
    { name: "UAE", code: "+971" },
    // ... add more as needed
];

// ======================================================
// Document Manipulation & Utility Functions
// ======================================================

/**
 * Client-side Router: Handles page view switching based on hash in the URL.
 */
function router() {
    const hash = window.location.hash || '#home';
    const pageId = hash.substring(1); // Remove '#'
    const views = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hide all pages
    views.forEach(view => {
        view.classList.add('hidden');
    });

    // Show the current page
    const currentPage = document.getElementById(pageId);
    if (currentPage) {
        currentPage.classList.remove('hidden');
        window.scrollTo(0, 0); // Scroll to top on page switch

        // Special case for Products page: show main list on first load
        if (pageId === 'products') {
            showMainProducts();
        }
    } else {
        // Default to home if hash is invalid
        document.getElementById('home').classList.remove('hidden');
    }

    // Update active class in navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

/**
 * Initializes the Quotation form: Populates dropdowns and sets up listeners.
 */
function initQuotationForm() {
    const productDropdown = document.getElementById('product-name');
    const codeDropdown = document.querySelector('select[name="country_code"]');
    const hsCodeInput = document.getElementById('hs-code');
    const hsNameInput = document.getElementById('hs-name');
    const productDescInput = document.getElementById('product-description');
    const requirementTextarea = document.querySelector('textarea[name="requirement"]');
    const charCountSpan = document.getElementById('char-count');

    // 1. Populate Product Dropdown
    PRODUCTS_DATA.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });

    // 2. Populate Country Code Dropdown
    COUNTRY_CODES.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        if (country.code === '+91') { // Default to India
            option.selected = true;
        }
        codeDropdown.appendChild(option);
    });

    // 3. Setup Auto-Fill Logic
    productDropdown.addEventListener('change', () => {
        const selectedProductName = productDropdown.value;
        const product = PRODUCTS_DATA.find(p => p.name === selectedProductName);
        if (product) {
            hsCodeInput.value = product.hs_code;
            hsNameInput.value = product.hs_name;
            productDescInput.value = product.description;
        } else {
            hsCodeInput.value = '';
            hsNameInput.value = '';
            productDescInput.value = '';
        }
    });
    productDropdown.dispatchEvent(new Event('change')); // Run once on load

    // 4. Setup Character Counter for Requirement Textarea
    requirementTextarea.addEventListener('input', () => {
        const maxLength = requirementTextarea.maxLength;
        const currentLength = requirementTextarea.value.length;
        charCountSpan.textContent = maxLength - currentLength;
    });

    // 5. Setup Form Submission
    document.getElementById('quotation-form').addEventListener('submit', handleQuotationSubmit);

    // 6. Setup Modal Openers
    document.getElementById('open-terms-modal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('terms-modal');
    });
}

/**
 * Initializes the Products page by generating the main product categories.
 */
function initProductsPage() {
    const productListContainer = document.getElementById('main-product-list');
    productListContainer.innerHTML = ''; // Clear previous content

    PRODUCTS_DATA.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'p-6 bg-slate-800 rounded-xl shadow-xl border border-slate-700 hover:border-accent-color transition duration-300 cursor-pointer text-center group';
        productCard.innerHTML = `
            <div class="text-6xl mb-4 text-accent-color transition duration-300 group-hover:scale-110">
                <i class="fas fa-${getProductIcon(product.name)}"></i>
            </div>
            <h4 class="text-xl font-bold text-white group-hover:text-accent-color transition duration-300">${product.name}</h4>
            <p class="text-sm text-slate-400 mt-1">${product.sub_products.length} varieties</p>
        `;
        productCard.addEventListener('click', () => showSubProducts(product));
        productListContainer.appendChild(productCard);
    });
}

/**
 * Maps product names to a suitable Font Awesome icon.
 */
function getProductIcon(name) {
    switch (name) {
        case "Spices": return "seed";
        case "Pulses": return "leaf";
        case "Grains and Cereal": return "wheat-awn";
        case "Dry Fruits": return "cannabis"; // Best fit for 'nuts/dry'
        case "Dehydrated Products": return "sun";
        case "Fruits": return "apple-whole";
        case "Vegetables": return "pepper-hot";
        case "Herbs": return "spa";
        case "INCENSE STICK": return "smog";
        case "IMITATION JEWELRY": return "ring";
        default: return "box-open";
    }
}

/**
 * Shows the sub-products list for a selected main product.
 */
function showSubProducts(product) {
    document.getElementById('main-product-list').classList.add('hidden');
    const subSection = document.getElementById('sub-product-section');
    subSection.classList.remove('hidden');
    document.getElementById('sub-product-title').textContent = `${product.name} Sub-Products`;

    const subListContainer = document.getElementById('sub-product-list');
    subListContainer.innerHTML = '';

    if (product.sub_products && product.sub_products.length > 0) {
        product.sub_products.forEach(subProduct => {
            const subProductCard = document.createElement('div');
            subProductCard.className = 'bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-purple-500 transition duration-300 cursor-pointer transform hover:scale-[1.03] group';
            subProductCard.innerHTML = `
                <img src="${subProduct.image}" alt="${subProduct.sub_name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/1e293b/fff?text=${subProduct.sub_name.replace(/\s/g, '+')}'" class="w-full h-32 object-cover transition duration-500 group-hover:opacity-80">
                <div class="p-4">
                    <h5 class="text-lg font-bold text-white group-hover:text-purple-500">${subProduct.sub_name}</h5>
                    <p class="text-sm text-slate-400 mt-1">${subProduct.spec.substring(0, 30)}...</p>
                    <button class="mt-3 text-xs font-semibold text-accent-color hover:underline">View Details <i class="fas fa-arrow-right ml-1"></i></button>
                </div>
            `;
            subProductCard.addEventListener('click', () => showProductDetails(subProduct));
            subListContainer.appendChild(subProductCard);
        });
    } else {
        subListContainer.innerHTML = '<p class="text-slate-400 text-center col-span-full">No detailed sub-products listed for this category yet.</p>';
    }
}

/**
 * Shows the main product list and hides the sub-product view.
 */
function showMainProducts() {
    document.getElementById('sub-product-section').classList.add('hidden');
    document.getElementById('main-product-list').classList.remove('hidden');
}

/**
 * Shows a pop-up with detailed information for a sub-product.
 */
function showProductDetails(subProduct) {
    document.getElementById('modal-product-name').textContent = subProduct.sub_name;
    document.getElementById('modal-product-image').src = subProduct.image;
    document.getElementById('modal-product-specification').textContent = subProduct.spec;
    document.getElementById('modal-product-ingredients').textContent = subProduct.ingredients;
    document.getElementById('modal-product-uses').textContent = subProduct.uses;
    openModal('product-detail-modal');
}

/**
 * Opens a specified modal.
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = document.getElementById(modalId.replace('-modal', '-content'));
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

/**
 * Closes a specified modal.
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = document.getElementById(modalId.replace('-modal', '-content'));
    modalContent.classList.add('scale-95', 'opacity-0');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

/**
 * Handles the form submission using EmailJS.
 */
async function handleQuotationSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const button = document.getElementById('send-quotation-btn');
    const originalText = button.innerHTML;
    const requiredFields = ['first_name', 'last_name', 'contact_number', 'email', 'product_name'];
    let isValid = true;

    requiredFields.forEach(name => {
        const input = form.elements[name];
        if (!input || !input.value) {
            isValid = false;
            // Simple inline validation feedback
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!document.getElementById('agree-terms').checked) {
        isValid = false;
    }

    if (!isValid) {
        console.error("Please fill all required fields and agree to the terms.");
        return;
    }

    // Disable button and show loading state
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

    try {
        const templateParams = {
            // Collect form data
            full_name: `${form.first_name.value} ${form.last_name.value}`,
            company: form.company_name.value || 'N/A',
            website: form.website.value || 'N/A',
            contact: `${form.country_code.value}${form.contact_number.value}`,
            email: form.email.value,
            product: form.product_name.value,
            hs_code: form.hs_code.value,
            requirement: form.requirement.value,
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('SUCCESS!', response.status, response.text);
        openThankYouModal();

        // Reset form after successful submission
        form.reset();
        document.getElementById('product-name').dispatchEvent(new Event('change')); // Reset auto-filled fields

    } catch (error) {
        console.error('FAILED...', error);
        // Display error message
        alert('Quotation submission failed. Please try again later or contact us directly via email.');
    } finally {
        // Restore button state
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

/**
 * Opens the Thank You modal with auto-closing timer.
 */
function openThankYouModal() {
    openModal('thank-you-modal');
    const timerElement = document.getElementById('countdown-timer');
    let countdown = 10;
    timerElement.textContent = `Closing in ${countdown} seconds...`;

    const interval = setInterval(() => {
        countdown--;
        timerElement.textContent = `Closing in ${countdown} seconds...`;
        if (countdown <= 0) {
            clearInterval(interval);
            closeModal('thank-you-modal');
        }
    }, 1000);
}

// ======================================================
// Initialization and Global Listeners
// ======================================================

window.onload = () => {
    // Initialize all components
    router();
    initQuotationForm();
    initProductsPage();
};

// Client-side routing listener
window.onhashchange = router;

// F12/Inspect Disable (Note: This is easily bypassed and generally not effective, but included as per request)
document.onkeydown = function(e) {
    // Disable F12
    if (e.key === "F12" || e.keyCode === 123) {
        return false;
    }
    // Disable Ctrl+Shift+I, J, C, U (for common developer tools shortcuts)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67 || e.keyCode === 85)) {
        return false;
    }
};

// Disable right-click context menu (to block inspect element)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});