const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rich data structure with custom landscape/landmark cover backgrounds
const mockData = {
    districts: [
        {
            id: "dist-01",
            name: "Hyderabad",
            bgImage: "https://images.unsplash.com/photo-1605305141974-9f448c5b6167?auto=format&fit=crop&w=600&q=80", // Charminar landscape
            historicPlace: "Charminar",
            mandals: [
                {
                    id: "man-101",
                    name: "Charminar Mandal",
                    villages: [
                        {
                            id: "vil-201",
                            name: "Laad Bazaar Colony",
                            shops: [
                                { id: "shop-301", name: "FPS Shop No. 15 (Dealer: R. Reddy)", slots: ["08:30 AM", "10:30 AM", "03:00 PM"] },
                                { id: "shop-302", name: "FPS Shop No. 18 (Dealer: M. A. Khan)", slots: ["09:00 AM", "11:30 AM", "04:30 PM"] }
                            ]
                        },
                        {
                            id: "vil-202",
                            name: "Nayapul Sector",
                            shops: [
                                { id: "shop-303", name: "FPS Shop No. 42 (Dealer: S. Sharma)", slots: ["08:00 AM", "01:00 PM"] }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "dist-02",
            name: "Warangal",
            bgImage: "https://images.unsplash.com/photo-1624314140321-df19ea0bf39a?auto=format&fit=crop&w=600&q=80", // Warangal Fort/Gate
            historicPlace: "Thousand Pillar Temple",
            mandals: [
                {
                    id: "man-102",
                    name: "Hanamkonda Mandal",
                    villages: [
                        {
                            id: "vil-203",
                            name: "Palampet Revenue Village",
                            shops: [
                                { id: "shop-305", name: "FPS Rural Center 101", slots: ["07:30 AM", "02:30 PM"] },
                                { id: "shop-306", name: "FPS Rural Center 102", slots: ["09:30 AM", "04:00 PM"] }
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
    console.log(`Production UI Portal alive at http://localhost:${PORT}`);
});