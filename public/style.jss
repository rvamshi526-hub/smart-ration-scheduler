:root {
    --tg-gold: #ffb703;
    --tg-emerald: #023e8a;
    --card-dark: #1e293b;
    --text-light: #f8fafc;
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Arial, sans-serif;
    background-color: #0f172a;
    color: #e2e8f0;
}

/* Landing Page Layer with stylized Telangana Vector Silhouette representation background */
.welcome-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), 
                url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80') center center no-repeat;
    background-size: cover;
    position: fixed;
    z-index: 100;
    transition: all 0.5s ease-in-out;
}

.welcome-card {
    text-align: center;
    background: rgba(30, 41, 59, 0.7);
    padding: 40px 60px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
}

.welcome-card h1 {
    font-size: 38px;
    color: var(--tg-gold);
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.main-cta-btn {
    background: linear-gradient(45deg, #0284c7, #0369a1);
    color: white;
    border: none;
    padding: 14px 35px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 30px;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(2, 132, 199, 0.4);
    transition: transform 0.2s;
}

.main-cta-btn:hover {
    transform: scale(1.05);
}

/* Core Dashboard Layout */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

header h2 {
    color: var(--tg-gold);
    font-size: 28px;
}

.flow-step {
    margin-bottom: 30px;
    background: #1e293b;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #334155;
}

.step-title {
    display: block;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 15px;
}

/* Rectangle District Cards with embedded background textures */
.district-flex-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.rectangle-dist-card {
    position: relative;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #334155;
    transition: all 0.3s ease;
}

.card-bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.4) grayscale(20%);
    transition: all 0.3s ease;
}

.rectangle-dist-card:hover .card-bg-overlay {
    filter: brightness(0.6) grayscale(0%);
    transform: scale(1.03);
}

.rectangle-dist-card.selected-active {
    border-color: var(--tg-gold);
    box-shadow: 0 0 15px rgba(255, 183, 3, 0.3);
}

.card-content {
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    box-sizing: border-box;
}

.card-content h3 {
    margin: 0 0 4px 0;
    font-size: 20px;
    color: #fff;
}

.card-content p {
    margin: 0;
    font-size: 12px;
    color: #cbd5e1;
}

/* Styled Form Select Dropdowns */
select {
    width: 100%;
    padding: 12px;
    background: #0f172a;
    color: #f1f5f9;
    border: 1.5px solid #475569;
    border-radius: 6px;
    font-size: 15px;
    outline: none;
}

select:focus {
    border-color: var(--tg-gold);
}

/* Time slots grid styling */
.slots-flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.time-slot-pill {
    background: transparent;
    border: 1.5px solid var(--tg-gold);
    color: var(--tg-gold);
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
}

.time-slot-pill:hover {
    background: var(--tg-gold);
    color: #0f172a;
}

.hidden {
    display: none !important;
}