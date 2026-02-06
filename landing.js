/* --- 1. THE DATA (JSON) --- */
const pageData = {
    "brand": {
      "name": "RevSignal",
      "primary_color": "#4f46e5",
      "accent_color": "#10b981"
    },
    "hero": {
      "badge": "New: CRM 2.0 Integration 🚀",
      "headline": "Decode XYZ's B2B Traffic into Revenue",
      "subheadline": "Identify the companies visiting XYZ site, understand their intent, and sync actionable leads directly to your CRM.",
      "cta_primary": "Start XYZ Trial",
      "cta_secondary": "View Demo",
      "trust_text": "TRUSTED BY 1,000+ GROWTH TEAMS"
    },
    "features_tabs": [
      {
        "id": "tab1",
        "title": "Real-Time ID",
        "heading": "See Who's browsing",
        "description": "Reveal company names, industries, and employee counts from anonymous IP addresses instantly.",
        "image": "https://i.ibb.co/Fq7brKzS/see-who-browsing.jpg" 
      },
      {
        "id": "tab2",
        "title": "Intent Scoring",
        "heading": "Prioritize Hot Leads",
        "description": "Our AI analyzes time-on-page and scroll depth to score visiting companies by purchase intent.",
        "image": "https://i.ibb.co/nNcPqq5y/Intent-Scoring.jpg"
      },
      {
        "id": "tab3",
        "title": "Auto Outreach",
        "heading": "Trigger Instant Actions",
        "description": "Automatically send high-intent accounts to Slack, HubSpot, or Salesforce the moment they visit.",
        "image": "https://i.ibb.co/FkpBsRK5/Auto-Outreach.jpg"
      }
    ],
    "personas": {
        "heading": "Built for modern GTM teams",
        "groups": [
          {
            "title": "For XYZ Sales Leaders",
            "benefits": [
              { "title": "Fill your pipeline", "text": "Stop waiting for form fills. Reach out to prospects who are already researching you." },
              { "title": "Contextual conversations", "text": "Know exactly what pages they read before you pick up the phone." }
            ]
          },
          {
            "title": "For XYZ Demand Gen",
            "benefits": [
              { "title": "Retarget with precision", "text": "Create custom audiences on LinkedIn based on specific page visits." },
              { "title": "Prove ROI", "text": "Attribute closed deals back to the specific blog posts that started the journey." }
            ]
          }
        ]
    }
  };
  
/* --- 2. LOGIC TO INJECT DATA & HANDLE TABS --- */
  
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Inject Brand & Hero Data ---
    document.getElementById('brand-name').innerText = pageData.brand.name;
    document.getElementById('hero-badge').innerText = pageData.hero.badge;
    document.getElementById('hero-headline').innerText = pageData.hero.headline;
    document.getElementById('hero-sub').innerText = pageData.hero.subheadline;
    document.getElementById('cta-primary').innerText = pageData.hero.cta_primary;
    document.getElementById('cta-secondary').innerText = pageData.hero.cta_secondary;
    document.getElementById('trust-text').innerText = pageData.hero.trust_text;
    document.getElementById('persona-heading').innerText = pageData.personas.heading;

    // --- Build Tabs Dynamically ---
    const tabMenu = document.getElementById('tab-menu-container');
    const tabContent = document.getElementById('tab-content-container');

    pageData.features_tabs.forEach((tab, index) => {
        // 1. Create Tab Button
        const btn = document.createElement('div');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = tab.title;
        btn.onclick = (e) => switchTab(e, tab.id);
        tabMenu.appendChild(btn);

        // 2. Create Tab Content
        const contentDiv = document.createElement('div');
        contentDiv.id = tab.id;
        contentDiv.className = `tab-content ${index === 0 ? 'active' : ''}`;
        
        contentDiv.innerHTML = `
            <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                <div>
                    <h2>${tab.heading}</h2>
                    <p class="tab-content-text">${tab.description}</p>
                    <a href="#" class="btn btn-primary" style="background:white; color:var(--primary); border:none;">Learn more</a>
                </div>
                <img src="${tab.image}" alt="${tab.heading}" class="tab-img">
            </div>
        `;
        tabContent.appendChild(contentDiv);
    });

    // --- Build Personas Dynamically ---
    const personaGrid = document.getElementById('persona-grid');
    pageData.personas.groups.forEach(group => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Generate HTML for benefits
        let benefitsHtml = '';
        group.benefits.forEach(b => {
            benefitsHtml += `
                <div class="benefit-item">
                    <h4>${b.title}</h4>
                    <p>${b.text}</p>
                </div>
            `;
        });

        card.innerHTML = `<h3>${group.title}</h3>${benefitsHtml}`;
        personaGrid.appendChild(card);
    });
});

// --- Tab Switching Logic ---
function switchTab(evt, tabId) {
    // Hide all content
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    
    // Deactivate all buttons
    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    // Activate selected
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}