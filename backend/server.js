// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection (Ensure you have MongoDB installed locally or use MongoDB Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/hmvworld', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

// --- SCHEMAS ---

const ProductSchema = new mongoose.Schema({
    name: String,
    hs_code: String,
    hs_name: String,
    description: String,
    sub_products: [{
        sub_name: String,
        spec: String,
        ingredients: String,
        uses: String,
        image: String
    }]
});

const ReviewSchema = new mongoose.Schema({
    client_name: String,
    company: String,
    comment: String,
    rating: Number
});

const Product = mongoose.model('Product', ProductSchema);
const Review = mongoose.model('Review', ReviewSchema);

// --- DATA: FULL COUNTRY LIST ---
// (Shortened for brevity, but this structure supports all)
const ALL_COUNTRY_CODES = [
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
    // You can add the rest of the world here
];

// --- API ROUTES ---

// 1. Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Add Product (For Admin)
app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. Get Country Codes
app.get('/api/countries', (req, res) => {
    res.json(ALL_COUNTRY_CODES);
});

// 4. Get Reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 5. Add Review
app.post('/api/reviews', async (req, res) => {
    const review = new Review(req.body);
    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});