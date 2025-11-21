// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// --- DATA STORAGE (IN MEMORY) ---
// This replaces MongoDB for now so you can run it immediately.

// 1. Full Country List
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
    { name: "UK", code: "+44" }, { name: "USA", code: "+1" }, { name: "Vietnam",
