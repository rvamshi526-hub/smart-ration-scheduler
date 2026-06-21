let locationData = [];
let selectedDistrict = null;
let selectedMandal = null;
let selectedVillage = null;

const districtContainer = document.getElementById('district-container');
const mandalSection = document.getElementById('mandal-section');
const mandalSelect = document.getElementById('mandal-select');
const villageSection = document.getElementById('village-section');
const villageSelect = document.getElementById('village-select');
const shopSection = document.getElementById('shop-section');
const shopSelect = document.getElementById('shop-select');
const slotsSection = document.getElementById('slots-section');
const slotsContainer = document.getElementById('slots-container');

async function init() {
    try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        locationData = data.districts;
        renderDistricts();
    } catch (error) {
        console.error("Error connecting to localized setup infrastructure:", error);
    }
}

function renderDistricts() {
    districtContainer.innerHTML = '';
    locationData.forEach(dist => {
        const card = document.createElement('div');
        card.className = 'district-card';
        card.innerHTML = `
            <h3>${dist.name} District</h3>
            <p><strong>Historic Milestone:</strong> ${dist.historicPlace}</p>
        `;
        card.addEventListener('click', () => selectDistrict(dist, card));
        districtContainer.appendChild(card);
    });
}

function selectDistrict(dist, cardElement) {
    document.querySelectorAll('.district-card').forEach(el => el.classList.remove('active'));
    cardElement.classList.add('active');
    
    selectedDistrict = dist;
    resetFlow(['mandal', 'village', 'shop', 'slots']);

    mandalSelect.innerHTML = '<option value="">-- Choose Mandal --</option>';
    dist.mandals.forEach(mandal => {
        const opt = document.createElement('option');
        opt.value = mandal.id;
        opt.textContent = mandal.name;
        mandalSelect.appendChild(opt);
    });
    mandalSection.classList.remove('hidden');
}

mandalSelect.addEventListener('change', (e) => {
    const mandalId = e.target.value;
    if (!mandalId) {
        resetFlow(['village', 'shop', 'slots']);
        return;
    }
    
    selectedMandal = selectedDistrict.mandals.find(m => m.id === mandalId);
    resetFlow(['village', 'shop', 'slots']);

    villageSelect.innerHTML = '<option value="">-- Choose Location --</option>';
    selectedMandal.villages.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.id;
        opt.textContent = v.name;
        villageSelect.appendChild(opt);
    });
    villageSection.classList.remove('hidden');
});

villageSelect.addEventListener('change', (e) => {
    const villageId = e.target.value;
    if (!villageId) {
        resetFlow(['shop', 'slots']);
        return;
    }

    selectedVillage = selectedMandal.villages.find(v => v.id === villageId);
    resetFlow(['shop', 'slots']);

    shopSelect.innerHTML = '<option value="">-- Choose Fair Price Shop --</option>';
    selectedVillage.shops.forEach(shop => {
        const opt = document.createElement('option');
        opt.value = shop.id;
        opt.textContent = shop.name;
        shopSelect.appendChild(opt);
    });
    shopSection.classList.remove('hidden');
});

shopSelect.addEventListener('change', (e) => {
    const shopId = e.target.value;
    if (!shopId) {
        resetFlow(['slots']);
        return;
    }

    const selectedShop = selectedVillage.shops.find(s => s.id === shopId);
    slotsContainer.innerHTML = '';
    
    selectedShop.slots.forEach(slot => {
        const btn = document.createElement('button');
        btn.className = 'slot-btn';
        btn.textContent = slot;
        btn.onclick = () => alert(`Ration Time-Slot Confirmed!\nLocation: ${selectedShop.name}\nWindow: ${slot}\nPlease carry your original Ration Card & biometric details.`);
        slotsContainer.appendChild(btn);
    });
    slotsSection.classList.remove('hidden');
});

function resetFlow(targets) {
    if (targets.includes('mandal')) mandalSection.classList.add('hidden');
    if (targets.includes('village')) villageSection.classList.add('hidden');
    if (targets.includes('shop')) shopSection.classList.add('hidden');
    if (targets.includes('slots')) slotsSection.classList.add('hidden');
}

init();