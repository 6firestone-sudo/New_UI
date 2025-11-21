// ======================================================
// Global Constants and Data Setup
// ======================================================

// EmailJS Credentials
const EMAILJS_PUBLIC_KEY = '0CV0N42qYc1Rp59R8';
const EMAILJS_SERVICE_ID = 'HMVWORLD_service';
const EMAILJS_TEMPLATE_ID = 'Contactus';

emailjs.init(EMAILJS_PUBLIC_KEY);

// --- HARDCODED DATA (To make GitHub Pages work without a backend) ---

const PRODUCTS_DATA = [
    { name: "Spices", hs_code: "0900", hs_name: "Spices, various types", description: "Aromatic and pungent vegetable substances used to flavor food.",
        sub_products: [
            { sub_name: "Black Pepper", spec: "Grade A, 550g/l minimum", ingredients: "100% Black Peppercorns", uses: "General seasoning, medicinal use.", image: "https://placehold.co/400x300/1e293b/fff?text=Black+Pepper" },
            { sub_name: "Turmeric", spec: "Curcumin 5%, Polished", ingredients: "100% Turmeric Root", uses: "Coloring agent, anti-inflammatory, culinary spice.", image: "https://placehold.co/400x300/1e293b/fff?text=Turmeric" },
            { sub_name: "Cumin", spec: "Purity 99%", ingredients: "100% Cumin Seeds", uses: "Flavoring curries and stews, digestive aid.", image: "https://placehold.co/400x300/1e293b/fff?text=Cumin" },
            { sub_name: "Cardamom", spec: "8mm Green, A Grade", ingredients: "100% Cardamom Pods", uses: "Beverages, desserts, savory dishes, mouth freshener.", image: "https://placehold.co/400x300/1e293b/fff?text=Cardamom" },
            { sub_name: "Saffron", spec: "Grade 1, Kashmiri origin", ingredients: "100% Saffron Stigmas", uses: "Coloring, flavoring, traditional medicine.", image: "https://placehold.co/400x300/1e293b/fff?text=Saffron" },
            { sub_name: "Chili", spec: "S4 variety, high heat", ingredients: "100% Dried Red Chilies", uses: "Heat and spice addition to food.", image: "https://placehold.co/400x300/1e293b/fff?text=Chili" }
        ]
    },
    { name: "Pulses", hs_code: "0713", hs_name: "Dried leguminous vegetables, shelled", description: "High-protein edible seeds of legume plants.",
        sub_products: [
            { sub_name: "Green Moong", spec: "Whole, machine cleaned", ingredients: "100% Moong Beans", uses: "Soups, stews, sprouts, curries.", image: "https://placehold.co/400x300/1e293b/fff?text=Green+Moong" },
            { sub_name: "Red Lentil", spec: "Split, without skin", ingredients: "100% Masoor Dal", uses: "Dals, purees, quick-cooking.", image: "https://placehold.co/400x300/1e293b/fff?text=Red+Lentil" },
            { sub_name: "Chickpea/Gram", spec: "Kabuli, 10mm size", ingredients: "100% Chickpeas", uses: "Hummus, curries, roasted snacks.", image: "https://placehold.co/400x300/1e293b/fff?text=Chickpea" }
        ]
    },
    { name: "Grains and Cereal", hs_code: "1006", hs_name: "Rice; Wheat and Meslin", description: "Staple food crops including rice, wheat, and millets.",
        sub_products: [
            { sub_name: "Rice (Basmati)", spec: "Extra long grain, aged 1 year", ingredients: "100% Basmati Rice", uses: "Biryani, pilaf, premium dishes.", image: "https://placehold.co/400x300/1e293b/fff?text=Rice" },
            { sub_name: "Wheat", spec: "Durum, Milling quality", ingredients: "100% Wheat Grains", uses: "Flour, bread, pasta.", image: "https://placehold.co/400x300/1e293b/fff?text=Wheat" },
            { sub_name: "Millets (Jowar)", spec: "Grade A, dried", ingredients: "100% Sorghum", uses: "Roti, porridge, health food.", image: "https://placehold.co/400x300/1e293b/fff?text=Millets" }
        ]
    },
    { name: "Dry Fruits", hs_code: "0801", hs_name: "Nuts and other edible parts of plants", description: "Dried edible fruits and nuts.",
        sub_products: [
            { sub_name: "Cashew", spec: "W320, roasted/raw", ingredients: "100% Cashews", uses: "Snacks, desserts, garnishes.", image: "https://placehold.co/400x300/1e293b/fff?text=Cashew" },
            { sub_name: "Almonds", spec: "California/Mamra variety", ingredients: "100% Almonds", uses: "Snacks, baking, milk alternative.", image: "https://placehold.co/400x300/1e293b/fff?text=Almonds" },
            { sub_name: "Dates", spec: "Seedless, Medjool variety", ingredients: "100% Dates", uses: "Sweetener, snacks, energy booster.", image: "https://placehold.co/400x300/1e293b/fff?text=Dates" }
        ]
    },
    { name: "Dehydrated Products", hs_code: "0712", hs_name: "Dried vegetables, whole, cut, sliced or broken", description: "Fruits and vegetables processed for extended shelf life.",
        sub_products: [
            { sub_name: "Dehydrated Onion Flakes", spec: "White, 8-16 mesh", ingredients: "100% Onion", uses: "Soups, instant meals, spice blends.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Onion" },
            { sub_name: "Dehydrated Garlic Powder", spec: "40-80 mesh, strong aroma", ingredients: "100% Garlic", uses: "Seasoning, rubs, marinades.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Garlic" },
            { sub_name: "Dehydrated Fruits Mix", spec: "Assorted, unsweetened", ingredients: "Mix of various fruits", uses: "Trail mix, baking, breakfast cereal.", image: "https://placehold.co/400x300/1e293b/fff?text=Dehydrated+Fruits" }
        ]
    },
    { name: "Fruits", hs_code: "0803", hs_name: "Fruits, fresh or dried", description: "Fresh and various specialty fruits.",
        sub_products: [
            { sub_name: "Banana (Grand Naine)", spec: "Green, Grade A, 4-7 hands/stem", ingredients: "100% Fresh Banana", uses: "Direct consumption, processing, export.", image: "https://placehold.co/400x300/1e293b/fff?text=Grand+Naine+Banana" },
            { sub_name: "Mango (Alphonso)", spec: "Hapus, Export quality", ingredients: "100% Fresh Mango", uses: "Direct consumption, pulp extraction.", image: "https://placehold.co/400x300/1e293b/fff?text=Alphonso+Mango" },
            { sub_name: "Pomegranate", spec: "Bhagwa variety, deep red", ingredients: "100% Fresh Pomegranate", uses: "Juice, consumption, salads.", image: "https://placehold.co/400x300/1e293b/fff?text=Pomegranate" }
        ]
    },
    { name: "Vegetables", hs_code: "0703", hs_name: "Onions, shallots, garlic, leeks, and other alliaceous vegetables", description: "Fresh seasonal and staple vegetables.",
        sub_products: [
            { sub_name: "Onion (Red)", spec: "Grade A, 50-70mm size", ingredients: "100% Red Onion", uses: "Cooking staple, export market.", image: "https://placehold.co/400x300/1e293b/fff?text=Red+Onion" },
            { sub_name: "Potato (Fresh)", spec: "Chipsona variety, round", ingredients: "100% Fresh Potato", uses: "Fries, curries, general cooking.", image: "https://placehold.co/400x300/1e293b/fff?text=Potato" },
            { sub_name: "Bell Pepper (California Wonder)", spec: "Mixed color, firm", ingredients: "100% Bell Pepper", uses: "Salads, stuffing, grilling.", image: "https://placehold.co/400x300/1e293b/fff?text=Bell+Pepper" }
        ]
    },
    { name: "Herbs", hs_code: "1211", hs_name: "Plants and parts of plants, used in pharmacy or for similar purposes", description: "Medicinal and aromatic herbs.",
        sub_products: [
            { sub_name: "Neem", spec: "Dried leaves, high purity", ingredients: "100% Neem leaves", uses: "Ayurvedic medicine, pest control.", image: "https://placehold.co/400x300/1e293b/fff?text=Neem" },
            { sub_name: "Ashwagandha", spec: "Dried roots, powder form available", ingredients: "100% Ashwagandha root", uses: "Adaptogen, stress relief, traditional medicine.", image: "https://placehold.co/400x300/1e293b/fff?text=Ashwagandha" },
            { sub_name: "Tulasi (Holy Basil)", spec: "Dried leaves and stem", ingredients: "100% Tulasi", uses: "Herbal tea, respiratory health.", image: "https://placehold.co/400x300/1e293b/fff?text=Tulasi" }
        ]
    },
    { name: "INCENSE STICK", hs_code: "3307", hs_name: "Preparations for perfuming or deodorizing rooms", description: "Aromatic materials which release fragrant smoke when burned.",
        sub_products: [
            { sub_name: "Incense Sticks", spec: "Charcoal-free, various scents", ingredients: "Bamboo, natural resins, essential oils", uses: "Meditation, religious ceremonies, air freshening.", image: "https://placehold.co/400x300/1e293b/fff?text=Incense+Sticks" },
            { sub_name: "Dhoop Cones", spec: "Cow dung base, herbal mix", ingredients: "Natural herbs, resins, cow dung", uses: "Traditional rituals, natural air purification.", image: "https://placehold.co/400x300/1e293b/fff?text=Dhoop+Cones" }
        ]
    },
    { name: "IMITATION JEWELRY", hs_code: "7117", hs_name: "Imitation jewellery", description: "Jewelry made from non-precious materials.",
        sub_products: [
            { sub_name: "Necklaces", spec: "Alloy based, antique finish", ingredients: "Brass, copper, glass beads", uses: "Fashion accessory, bulk export for retail.", image: "https://placehold.co/400x300/1e293b/fff?text=Necklaces" },
            { sub_name: "Earrings", spec: "Oxidized silver look, lightweight", ingredients: "White metal, CZ stones", uses: "Fashion accessory, wedding wear.", image: "https://placehold.co/400x300/1e293b/fff?text=Earrings" },
            { sub_name: "Bangles and Bracelets", spec: "Lacquer/Acrylic, regional designs", ingredients: "Lac, glass, acrylic, metal core", uses: "Traditional wear, cultural exports.", image: "https://placehold.co/400x300/1e293b/fff?text=Bangles" }
        ]
    }
];

const COUNTRY_CODES = [
    { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
    { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" }, { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" }, { name: "Belgium", code: "+32" }, { name: "Brazil", code: "+55" },
    { name: "Canada", code: "+1" }, { name: "China", code: "+86" }, { name: "Denmark", code: "+45" },
    { name: "Egypt", code: "+20" }, { name: "France", code: "+33" }, { name: "Germany", code: "+49" },
    { name: "Hong Kong", code: "+852" }, { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" },
    { name: "Iran", code: "+98" }, { name: "Iraq", code: "+964" }, { name: "Ireland", code: "+353" },
    { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" }, { name: "Japan", code: "+81" },
    { name: "Kuwait", code: "+965" }, { name: "Malaysia", code: "+60" }, { name: "Mexico", code: "+52" },
    { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" }, { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" }, { name: "Philippines", code: "+63" },
    { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" }, { name: "Qatar", code: "+974" },
    { name: "Russia", code: "+7" }, { name: "Saudi Arabia", code: "+966" }, { name: "Singapore", code: "+65" },
    { name: "South Africa", code: "+27" }, { name: "South Korea", code: "+82" }, { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" }, { name: "Sweden", code: "+46" }, { name: "Switzerland", code: "+41" },
    { name: "Thailand", code: "+66" }, { name: "Turkey", code: "+90" }, { name: "UAE", code: "+971" },
    { name: "UK", code: "+44" }, { name: "USA", code: "+1" }, { name: "Vietnam", code: "+84" },
    { name: "Yemen", code: "+967" }
];

const REVIEWS_DATA = [
    { client_name: "John Doe", company: "Global Imports Ltd", comment: "Excellent quality spices and timely delivery.", rating: 5 },
    { client_name: "Sarah Smith", company: "Organic Foods UK", comment: "The best turmeric we have sourced in years. Highly recommended!", rating: 5 }
];

// ======================================================
// Document Manipulation & Utility Functions
// ======================================================

/**
 * Client-side Router
 */
function router() {
    const hash = window.location.hash || '#home';
    const pageId = hash.substring(1);
    const views = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');

    views.forEach(view => view.classList.add('hidden'));

    const currentPage = document.getElementById(pageId);
    if (currentPage) {
        currentPage.classList.remove('hidden');
        window.scrollTo(0, 0);
        if (pageId === 'products') {
            showMainProducts();
        }
    } else {
        document.getElementById('home').classList.remove('hidden');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

/**
 * Initializes the Quotation form
 */
function initQuotationForm() {
    const productDropdown = document.getElementById('product-name');
    const codeDropdown = document.querySelector('select[name="country_code"]');
    
    productDropdown.innerHTML = '<option value="">Select Product Name*</option>';
    codeDropdown.innerHTML = '';

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
        if (country.code === '+91' && country.name === "India") {
            option.selected = true;
        }
        codeDropdown.appendChild(option);
    });

    // 3. Setup Auto-Fill Logic
    productDropdown.onchange = () => {
        const selectedProductName = productDropdown.value;
        const product = PRODUCTS_DATA.find(p => p.name === selectedProductName);
        if (product) {
            document.getElementById('hs-code').value = product.hs_code;
            document.getElementById('hs-name').value = product.hs_name;
            document.getElementById('product-description').value = product.description;
        } else {
            document.getElementById('hs-code').value = '';
            document.getElementById('hs-name').value = '';
            document.getElementById('product-description').value = '';
        }
    };

    // 4. Character Counter
    const requirementTextarea = document.querySelector('textarea[name="requirement"]');
    const charCountSpan = document.getElementById('char-count');
    if(requirementTextarea) {
        requirementTextarea.oninput = () => {
            charCountSpan.textContent = requirementTextarea.maxLength - requirementTextarea.value.length;
        };
    }

    // 5. Form Submission
    const qForm = document.getElementById('quotation-form');
    if(qForm) {
        const newForm = qForm.cloneNode(true);
        qForm.parentNode.replaceChild(newForm, qForm);
        newForm.addEventListener('submit', handleQuotationSubmit);
    }

    // 6. Modal Openers
    const termsBtn = document.getElementById('open-terms-modal');
    if(termsBtn) {
        termsBtn.onclick = (e) => {
            e.preventDefault();
            openModal('terms-modal');
        }
    }
}

/**
 * Initializes the Products page
 */
function initProductsPage() {
    const productListContainer = document.getElementById('main-product-list');
    productListContainer.innerHTML = '';

    if(PRODUCTS_DATA.length === 0) {
        productListContainer.innerHTML = '<p class="text-white text-center col-span-full">Loading products...</p>';
        return;
    }

    PRODUCTS_DATA.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'p-6 bg-slate-800 rounded-xl shadow-xl border border-slate-700 hover:border-accent-color transition duration-300 cursor-pointer text-center group';
        
        const subCount = product.sub_products ? product.sub_products.length : 0;

        productCard.innerHTML = `
            <div class="text-6xl mb-4 text-accent-color transition duration-300 group-hover:scale-110">
                <i class="fas fa-${getProductIcon(product.name)}"></i>
            </div>
            <h4 class="text-xl font-bold text-white group-hover:text-accent-color transition duration-300">${product.name}</h4>
            <p class="text-sm text-slate-400 mt-1">${subCount} varieties</p>
        `;
        productCard.addEventListener('click', () => showSubProducts(product));
        productListContainer.appendChild(productCard);
    });
}

/**
 * Renders Reviews
 */
function renderReviews() {
    const reviewContainer = document.querySelector('#about .border-dashed');
    // Remove "Coming Soon" text
    
    if (REVIEWS_DATA.length === 0) return;

    let html = `<h3 class="text-3xl font-bold mb-6 text-white">What Our Clients Say</h3>
                <div class="grid md:grid-cols-2 gap-6 text-left">`;
    
    REVIEWS_DATA.forEach(r => {
        html += `
            <div class="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
                <div class="flex text-yellow-400 mb-2">
                    ${'<i class="fas fa-star"></i>'.repeat(r.rating)}
                </div>
                <p class="text-slate-300 italic mb-4">"${r.comment}"</p>
                <h4 class="text-white font-bold text-lg">${r.client_name}</h4>
                <p class="text-accent-color text-sm">${r.company || ''}</p>
            </div>
        `;
    });

    html += `</div>`;
    reviewContainer.innerHTML = html;
    reviewContainer.classList.remove('text-center');
}

/**
 * Maps product names to Font Awesome icons.
 * UPDATED: Spices now uses 'mortar-pestle'
 */
function getProductIcon(name) {
    const n = name.toLowerCase();
    if(n.includes("spice")) return "mortar-pestle"; // Fixed Icon
    if(n.includes("pulse")) return "leaf";
    if(n.includes("grain") || n.includes("cereal") || n.includes("rice")) return "wheat-awn";
    if(n.includes("dry fruit") || n.includes("nut")) return "cookie"; 
    if(n.includes("dehydrated")) return "sun";
    if(n.includes("fruit")) return "apple-whole";
    if(n.includes("vegetable") || n.includes("onion")) return "carrot"; 
    if(n.includes("herb")) return "spa";
    if(n.includes("incense")) return "fire";
    if(n.includes("jewelry") || n.includes("gold")) return "gem";
    return "box-open";
}

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
                    <p class="text-sm text-slate-400 mt-1">${subProduct.spec ? subProduct.spec.substring(0, 30) : ''}...</p>
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

function showMainProducts() {
    document.getElementById('sub-product-section').classList.add('hidden');
    document.getElementById('main-product-list').classList.remove('hidden');
}

function showProductDetails(subProduct) {
    document.getElementById('modal-product-name').textContent = subProduct.sub_name;
    document.getElementById('modal-product-image').src = subProduct.image;
    document.getElementById('modal-product-specification').textContent = subProduct.spec || 'N/A';
    document.getElementById('modal-product-ingredients').textContent = subProduct.ingredients || 'N/A';
    document.getElementById('modal-product-uses').textContent = subProduct.uses || 'N/A';
    openModal('product-detail-modal');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = document.getElementById(modalId.replace('-modal', '-content'));
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = document.getElementById(modalId.replace('-modal', '-content'));
    modalContent.classList.add('scale-95', 'opacity-0');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

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
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!document.getElementById('agree-terms').checked) {
        isValid = false;
        alert("Please agree to the terms.");
    }

    if (!isValid) return;

    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

    try {
        const templateParams = {
            full_name: `${form.first_name.value} ${form.last_name.value}`,
            company: form.company_name.value || 'N/A',
            website: form.website.value || 'N/A',
            contact: `${form.country_code.value}${form.contact_number.value}`,
            email: form.email.value,
            product: form.product_name.value,
            hs_code: form.hs_code.value,
            requirement: form.requirement.value,
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

        openThankYouModal();
        form.reset();
        document.getElementById('product-name').dispatchEvent(new Event('change'));

    } catch (error) {
        console.error('FAILED...', error);
        alert('Quotation submission failed. Please try again later.');
    } finally {
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

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
    router();
    initQuotationForm();
    initProductsPage();
    renderReviews();
};

window.onhashchange = router;

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
