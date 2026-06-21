const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data specialized for PDS / Smart Ration Flow
const mockData = {
    districts: [
        {
            id: "dist-01",
            name: "Hyderabad",
            historicPlace: "Charminar - Historic 16th-century central hub of the old city grid.",
            mandals: [
                {
                    id: "man-101",
                    name: "Charminar Mandal",
                    villages: [
                        {
                            id: "vil-201",
                            name: "Laad Bazaar Colony",
                            shops: [
                                { id: "shop-301", name: "FPS Shop No. 15 (Dealer: R. Reddy)", slots: ["08:30 AM - Rice/Wheat", "10:30 AM - General Distribution", "03:00 PM - Sugar/Oil"] },
                                { id: "shop-302", name: "FPS Shop No. 18 (Dealer: M. A. Khan)", slots: ["09:00 AM - Priority Cards", "11:30 AM - Regular Quota", "04:30 PM - Evening Batch"] }
                            ]
                        },
                        {
                            id: "vil-202",
                            name: "Nayapul Sector",
                            shops: [
                                { id: "shop-303", name: "FPS Shop No. 42 (Dealer: S. Sharma)", slots: ["08:00 AM - Early Bird", "01:00 PM - Afternoon Slot"] },
                                { id: "shop-304", name: "FPS Shop No. 45 (Dealer: G. Kaur)", slots: ["10:00 AM - Fast Track", "03:30 PM - General Delivery"] }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "dist-02",
            name: "Warangal",
            historicPlace: "Thousand Pillar Temple - Landmark architectural marvel of the Kakatiya legacy.",
            mandals: [
                {
                    id: "man-102",
                    name: "Hanamkonda Mandal",
                    villages: [
                        {
                            id: "vil-203",
                            name: "Palampet Revenue Village",
                            shops: [
                                { id: "shop-305", name: "FPS Rural Center 101", slots: ["07:30 AM - Morning Batch", "02:30 PM - Post-Lunch Quota"] },
                                { id: "shop-306", name: "FPS Rural Center 102", slots: ["09:30 AM - Commodity Collect", "04:00 PM - Final Hour Open"] }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

app.get('/api/locations', (req, res) => {
    res.json(mockData);
});

app.listen(PORT, () => {
    console.log(`Smart Ration Server running live at http://localhost:${PORT}`);
});