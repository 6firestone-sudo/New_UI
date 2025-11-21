// ======================================================
// Global Constants and Data Setup
// ======================================================

const API_BASE_URL = 'http://localhost:5000/api'; // Pointing to your new backend

// EmailJS Credentials (Keep your existing ones)
const EMAILJS_PUBLIC_KEY = '0CV0N42qYc1Rp59R8';
const EMAILJS_SERVICE_ID = 'HMVWORLD_service';
const EMAILJS_TEMPLATE_ID = 'Contactus';

emailjs.init(EMAILJS_PUBLIC_KEY);

// Global variables to store fetched data
let PRODUCTS_DATA = [];
let COUNTRY_CODES = [];

// ======================================================
// Data Fetching Functions
// ======================================================

async function fetchData() {
    try {
        // 1. Fetch Products
        const productRes = await fetch(`${API_BASE_URL}/products`);
        PRODUCTS_DATA = await productRes.json();
        
        // 2. Fetch Country Codes
        const countryRes = await fetch(`${API_BASE_URL}/countries`);
        COUNTRY_CODES = await countryRes.json();

        // 3. Fetch Reviews (and render them immediately)
        const reviewRes = await fetch(`${API_BASE_URL}/reviews`);
        const reviews = await reviewRes.json();
        renderReviews(reviews);

        // Re-initialize components that depend on data
        initQuotationForm();
        initProductsPage();

    } catch (error) {
        console.error("Error connecting to backend:", error);
        // Fallback or Alert user that server is offline
        document.getElementById('main-product-list').innerHTML = '<p class="text-red-500">Unable to load products. Please ensure backend is running.</p>';
    }
}

function renderReviews(reviews) {
    const reviewContainer = document.querySelector('#about .border-dashed');
    
    if (reviews.length === 0) {
        // Keep default text if no reviews
        return;
    }

    let html = `<h3 class="text-3xl font-bold mb-6 text-white">What Our Clients Say</h3>
                <div class="grid md:grid-cols-2 gap-6 text-left">`;
    
    reviews.forEach(r => {
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
    reviewContainer.classList.remove('text-center'); // Adjust alignment for grid
}


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
    
    // Clear existing options to avoid duplicates on re-init
    productDropdown.innerHTML = '<option value="">Select Product Name*</option>';
    codeDropdown.innerHTML = '';

    // 1. Populate Product Dropdown
    if(PRODUCTS_DATA.length > 0) {
        PRODUCTS_DATA.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productDropdown.appendChild(option);
        });
    }

    // 2. Populate Country Code Dropdown
    if(COUNTRY_CODES.length > 0) {
        COUNTRY_CODES.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.name} (${country.code})`;
            if (country.code === '+91' && country.name === "India") {
                option.selected = true;
            }
            codeDropdown.appendChild(option);
        });
    }

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
        // Remove old listener to prevent duplicates
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
        
        // Using a function to get total varieties count
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
 * Maps product names to Font Awesome icons.
 * UPDATED: Spices now uses 'mortar-pestle'
 */
function getProductIcon(name) {
    const n = name.toLowerCase();
    if(n.includes("spice")) return "mortar-pestle"; // Fixed Icon
    if(n.includes("pulse")) return "leaf";
    if(n.includes("grain") || n.includes("cereal") || n.includes("rice")) return "wheat-awn";
    if(n.includes("dry fruit") || n.includes("nut")) return "cookie"; // 'cookie' or 'circle' often used if specific nut missing
    if(n.includes("dehydrated")) return "sun";
    if(n.includes("fruit")) return "apple-whole";
    if(n.includes("vegetable") || n.includes("onion")) return "carrot"; // 'carrot' is standard
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
    // Fetch data first, then initialize forms/pages
    fetchData();
};

window.onhashchange = router;

// Context menu disable
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
