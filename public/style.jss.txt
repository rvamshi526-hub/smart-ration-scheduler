:root {
    --primary: #00769e; /* Safe Civic Blue */
    --primary-light: #e6f4f8;
    --bg: #f8fafc;
    --card-bg: #ffffff;
    --text: #1e293b;
    --border: #cbd5e1;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 750px;
    margin: 40px auto;
    background: var(--card-bg);
    padding: 35px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

h1 {
    margin-top: 0;
    color: var(--primary);
    font-size: 26px;
    font-weight: 700;
}

.subtitle {
    color: #64748b;
    margin-bottom: 35px;
    font-size: 15px;
}

.section {
    margin-bottom: 25px;
}

.field-label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #475569;
}

select {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    background-color: #fff;
    color: var(--text);
}

select:focus {
    border-color: var(--primary);
}

.district-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.district-card {
    border: 2px solid var(--border);
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    background: #fff;
    transition: all 0.2s ease-in-out;
}

.district-card:hover {
    border-color: #94a3b8;
    transform: translateY(-1px);
}

.district-card.active {
    border-color: var(--primary);
    background-color: var(--primary-light);
}

.district-card h3 {
    margin: 0 0 6px 0;
    font-size: 18px;
    color: #0f172a;
}

.district-card p {
    margin: 0;
    font-size: 13px;
    color: #475569;
    line-height: 1.4;
}

.slots-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.slot-btn {
    border: 1.5px solid var(--primary);
    color: var(--primary);
    background: #fff;
    padding: 12px 22px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease;
}

.slot-btn:hover {
    background: var(--primary);
    color: #fff;
}

.hidden {
    display: none !important;
}