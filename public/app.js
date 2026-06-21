let coreData = [];
let targetDistrict = null;
let targetMandal = null;
let targetVillage = null;

// Structural elements hooks
const homeScreen = document.getElementById('home-screen');
const enterBtn = document.getElementById('enter-btn');
const mainApp = document.getElementById('main-application');
const districtGrid = document.getElementById('district-grid-container');

const mandalBox = document.getElementById('mandal-box');
const mandalSelect = document.getElementById('mandal-select');
const villageBox = document.getElementById('village-box');
const villageSelect = document.getElementById('village-select');
const shopBox = document.getElementById('shop-box');
const shopSelect = document.getElementById('shop-select');
const slotsBox = document.getElementById('slots-box');
const slotsFlex = document.getElementById('slots-flex');

// Entry triggers routing view transition
enterBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
});

async function loadPortalData() {
    try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        coreData = data.districts;
        buildDistrictGrid();
    } catch (err) {
        console.error("Failed loading data tree configuration:", err);
    }
}

function buildDistrictGrid() {
    districtGrid.innerHTML = '';
    coreData.forEach(dist => {
        const rectCard = document.createElement('div');
        rectCard.className = 'rectangle-dist-card';
        
        rectCard.innerHTML = `
            <div class="card-bg-overlay" style="background-image: url('${dist.bgImage}')"></div>
            <div class="card-content">
                <h3>${dist.name}</h3>
                <p>📍 ${dist.historicPlace}</p>
            </div>
        `;
        
        rectCard.addEventListener('click', () => handleDistrictSelection(dist, rectCard));
        districtGrid.appendChild(rectCard);
    });
}

function handleDistrictSelection(dist, element) {
    document.querySelectorAll('.rectangle-dist-card').forEach(c => c.classList.remove('selected-active'));
    element.classList.add('selected-active');
    
    targetDistrict = dist;
    wipeCascadeSteps(['mandal', 'village', 'shop', 'slots']);

    mandalSelect.innerHTML = '<option value="">-- Choose Mandal --</option>';
    dist.mandals.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = m.name;
        mandalSelect.appendChild(opt);
    });
    mandalBox.classList.remove('hidden');
}

mandalSelect.addEventListener('change', (e) => {
    const mId = e.target.value;
    if (!mId) { wipeCascadeSteps(['village', 'shop', 'slots']); return; }
    
    targetMandal = targetDistrict.mandals.find(m => m.id === mId);
    wipeCascadeSteps(['village', 'shop', 'slots']);

    villageSelect.innerHTML = '<option value="">-- Choose Village --</option>';
    targetMandal.villages.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.id;
        opt.textContent = v.name;
        villageSelect.appendChild(opt);
    });
    villageBox.classList.remove('hidden');
});

villageSelect.addEventListener('change', (e) => {
    const vId = e.target.value;
    if (!vId) { wipeCascadeSteps(['shop', 'slots']); return; }

    targetVillage = targetMandal.villages.find(v => v.id === vId);
    wipeCascadeSteps(['shop', 'slots']);

    shopSelect.innerHTML = '<option value="">-- Choose Shop Dealer --</option>';
    targetVillage.shops.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        shopSelect.appendChild(opt);
    });
    shopBox.classList.remove('hidden');
});

shopSelect.addEventListener('change', (e) => {
    const sId = e.target.value;
    if (!sId) { wipeCascadeSteps(['slots']); return; }

    const targetShop = targetVillage.shops.find(s => s.id === sId);
    slotsFlex.innerHTML = '';
    
    targetShop.slots.forEach(slot => {
        const pill = document.createElement('button');
        pill.className = 'time-slot-pill';
        pill.textContent = slot;
        pill.onclick = () => alert(`Ration Pickup Confirmed!\nStore: ${targetShop.name}\nTime-Window: ${slot}`);
        slotsFlex.appendChild(pill);
    });
    slotsBox.classList.remove('hidden');
});

function wipeCascadeSteps(levels) {
    if (levels.includes('mandal')) mandalBox.classList.add('hidden');
    if (levels.includes('village')) villageBox.classList.add('hidden');
    if (levels.includes('shop')) shopBox.classList.add('hidden');
    if (levels.includes('slots')) slotsBox.classList.add('hidden');
}

loadPortalData();