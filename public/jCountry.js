// jCountry.js
(function () {
  'use strict';

  // ─────────────────── Country Data ───────────────────
  const ALL_COUNTRIES = [
    { code2: "AF", code3: "AFG", name: "Afghanistan" },
    { code2: "AL", code3: "ALB", name: "Albania" },
    { code2: "DZ", code3: "DZA", name: "Algeria" },
    { code2: "AD", code3: "AND", name: "Andorra" },
    { code2: "AO", code3: "AGO", name: "Angola" },
    { code2: "AG", code3: "ATG", name: "Antigua and Barbuda" },
    { code2: "AR", code3: "ARG", name: "Argentina" },
    { code2: "AM", code3: "ARM", name: "Armenia" },
    { code2: "AU", code3: "AUS", name: "Australia" },
    { code2: "AT", code3: "AUT", name: "Austria" },
    { code2: "AZ", code3: "AZE", name: "Azerbaijan" },
    { code2: "BS", code3: "BHS", name: "Bahamas" },
    { code2: "BH", code3: "BHR", name: "Bahrain" },
    { code2: "BD", code3: "BGD", name: "Bangladesh" },
    { code2: "BB", code3: "BRB", name: "Barbados" },
    { code2: "BY", code3: "BLR", name: "Belarus" },
    { code2: "BE", code3: "BEL", name: "Belgium" },
    { code2: "BZ", code3: "BLZ", name: "Belize" },
    { code2: "BJ", code3: "BEN", name: "Benin" },
    { code2: "BT", code3: "BTN", name: "Bhutan" },
    { code2: "BO", code3: "BOL", name: "Bolivia" },
    { code2: "BA", code3: "BIH", name: "Bosnia and Herzegovina" },
    { code2: "BW", code3: "BWA", name: "Botswana" },
    { code2: "BR", code3: "BRA", name: "Brazil" },
    { code2: "BN", code3: "BRN", name: "Brunei" },
    { code2: "BG", code3: "BGR", name: "Bulgaria" },
    { code2: "BF", code3: "BFA", name: "Burkina Faso" },
    { code2: "BI", code3: "BDI", name: "Burundi" },
    { code2: "CV", code3: "CPV", name: "Cabo Verde" },
    { code2: "KH", code3: "KHM", name: "Cambodia" },
    { code2: "CM", code3: "CMR", name: "Cameroon" },
    { code2: "CA", code3: "CAN", name: "Canada" },
    { code2: "CF", code3: "CAF", name: "Central African Republic" },
    { code2: "TD", code3: "TCD", name: "Chad" },
    { code2: "CL", code3: "CHL", name: "Chile" },
    { code2: "CN", code3: "CHN", name: "China" },
    { code2: "CO", code3: "COL", name: "Colombia" },
    { code2: "KM", code3: "COM", name: "Comoros" },
    { code2: "CG", code3: "COG", name: "Congo" },
    { code2: "CR", code3: "CRI", name: "Costa Rica" },
    { code2: "CI", code3: "CIV", name: "Côte d'Ivoire" },
    { code2: "HR", code3: "HRV", name: "Croatia" },
    { code2: "CU", code3: "CUB", name: "Cuba" },
    { code2: "CY", code3: "CYP", name: "Cyprus" },
    { code2: "CZ", code3: "CZE", name: "Czech Republic" },
    { code2: "CD", code3: "COD", name: "Democratic Republic of the Congo" },
    { code2: "DK", code3: "DNK", name: "Denmark" },
    { code2: "DJ", code3: "DJI", name: "Djibouti" },
    { code2: "DM", code3: "DMA", name: "Dominica" },
    { code2: "DO", code3: "DOM", name: "Dominican Republic" },
    { code2: "EC", code3: "ECU", name: "Ecuador" },
    { code2: "EG", code3: "EGY", name: "Egypt" },
    { code2: "SV", code3: "SLV", name: "El Salvador" },
    { code2: "GQ", code3: "GNQ", name: "Equatorial Guinea" },
    { code2: "ER", code3: "ERI", name: "Eritrea" },
    { code2: "EE", code3: "EST", name: "Estonia" },
    { code2: "SZ", code3: "SWZ", name: "Eswatini" },
    { code2: "ET", code3: "ETH", name: "Ethiopia" },
    { code2: "FJ", code3: "FJI", name: "Fiji" },
    { code2: "FI", code3: "FIN", name: "Finland" },
    { code2: "FR", code3: "FRA", name: "France" },
    { code2: "GA", code3: "GAB", name: "Gabon" },
    { code2: "GM", code3: "GMB", name: "Gambia" },
    { code2: "GE", code3: "GEO", name: "Georgia" },
    { code2: "DE", code3: "DEU", name: "Germany" },
    { code2: "GH", code3: "GHA", name: "Ghana" },
    { code2: "GR", code3: "GRC", name: "Greece" },
    { code2: "GD", code3: "GRD", name: "Grenada" },
    { code2: "GT", code3: "GTM", name: "Guatemala" },
    { code2: "GN", code3: "GIN", name: "Guinea" },
    { code2: "GW", code3: "GNB", name: "Guinea-Bissau" },
    { code2: "GY", code3: "GUY", name: "Guyana" },
    { code2: "HT", code3: "HTI", name: "Haiti" },
    { code2: "HN", code3: "HND", name: "Honduras" },
    { code2: "HU", code3: "HUN", name: "Hungary" },
    { code2: "IS", code3: "ISL", name: "Iceland" },
    { code2: "IN", code3: "IND", name: "India" },
    { code2: "ID", code3: "IDN", name: "Indonesia" },
    { code2: "IR", code3: "IRN", name: "Iran" },
    { code2: "IQ", code3: "IRQ", name: "Iraq" },
    { code2: "IE", code3: "IRL", name: "Ireland" },
    { code2: "IL", code3: "ISR", name: "Israel" },
    { code2: "IT", code3: "ITA", name: "Italy" },
    { code2: "JM", code3: "JAM", name: "Jamaica" },
    { code2: "JP", code3: "JPN", name: "Japan" },
    { code2: "JO", code3: "JOR", name: "Jordan" },
    { code2: "KZ", code3: "KAZ", name: "Kazakhstan" },
    { code2: "KE", code3: "KEN", name: "Kenya" },
    { code2: "KI", code3: "KIR", name: "Kiribati" },
    { code2: "KW", code3: "KWT", name: "Kuwait" },
    { code2: "KG", code3: "KGZ", name: "Kyrgyzstan" },
    { code2: "LA", code3: "LAO", name: "Laos" },
    { code2: "LV", code3: "LVA", name: "Latvia" },
    { code2: "LB", code3: "LBN", name: "Lebanon" },
    { code2: "LS", code3: "LSO", name: "Lesotho" },
    { code2: "LR", code3: "LBR", name: "Liberia" },
    { code2: "LY", code3: "LBY", name: "Libya" },
    { code2: "LI", code3: "LIE", name: "Liechtenstein" },
    { code2: "LT", code3: "LTU", name: "Lithuania" },
    { code2: "LU", code3: "LUX", name: "Luxembourg" },
    { code2: "MG", code3: "MDG", name: "Madagascar" },
    { code2: "MW", code3: "MWI", name: "Malawi" },
    { code2: "MY", code3: "MYS", name: "Malaysia" },
    { code2: "MV", code3: "MDV", name: "Maldives" },
    { code2: "ML", code3: "MLI", name: "Mali" },
    { code2: "MT", code3: "MLT", name: "Malta" },
    { code2: "MH", code3: "MHL", name: "Marshall Islands" },
    { code2: "MR", code3: "MRT", name: "Mauritania" },
    { code2: "MU", code3: "MUS", name: "Mauritius" },
    { code2: "MX", code3: "MEX", name: "Mexico" },
    { code2: "FM", code3: "FSM", name: "Micronesia" },
    { code2: "MD", code3: "MDA", name: "Moldova" },
    { code2: "MC", code3: "MCO", name: "Monaco" },
    { code2: "MN", code3: "MNG", name: "Mongolia" },
    { code2: "ME", code3: "MNE", name: "Montenegro" },
    { code2: "MA", code3: "MAR", name: "Morocco" },
    { code2: "MZ", code3: "MOZ", name: "Mozambique" },
    { code2: "MM", code3: "MMR", name: "Myanmar" },
    { code2: "NA", code3: "NAM", name: "Namibia" },
    { code2: "NR", code3: "NRU", name: "Nauru" },
    { code2: "NP", code3: "NPL", name: "Nepal" },
    { code2: "NL", code3: "NLD", name: "Netherlands" },
    { code2: "NZ", code3: "NZL", name: "New Zealand" },
    { code2: "NI", code3: "NIC", name: "Nicaragua" },
    { code2: "NE", code3: "NER", name: "Niger" },
    { code2: "NG", code3: "NGA", name: "Nigeria" },
    { code2: "KP", code3: "PRK", name: "North Korea" },
    { code2: "MK", code3: "MKD", name: "North Macedonia" },
    { code2: "NO", code3: "NOR", name: "Norway" },
    { code2: "OM", code3: "OMN", name: "Oman" },
    { code2: "PK", code3: "PAK", name: "Pakistan" },
    { code2: "PW", code3: "PLW", name: "Palau" },
    { code2: "PS", code3: "PSE", name: "Palestine" },
    { code2: "PA", code3: "PAN", name: "Panama" },
    { code2: "PG", code3: "PNG", name: "Papua New Guinea" },
    { code2: "PY", code3: "PRY", name: "Paraguay" },
    { code2: "PE", code3: "PER", name: "Peru" },
    { code2: "PH", code3: "PHL", name: "Philippines" },
    { code2: "PL", code3: "POL", name: "Poland" },
    { code2: "PT", code3: "PRT", name: "Portugal" },
    { code2: "QA", code3: "QAT", name: "Qatar" },
    { code2: "RO", code3: "ROU", name: "Romania" },
    { code2: "RU", code3: "RUS", name: "Russia" },
    { code2: "RW", code3: "RWA", name: "Rwanda" },
    { code2: "KN", code3: "KNA", name: "Saint Kitts and Nevis" },
    { code2: "LC", code3: "LCA", name: "Saint Lucia" },
    { code2: "VC", code3: "VCT", name: "Saint Vincent and the Grenadines" },
    { code2: "WS", code3: "WSM", name: "Samoa" },
    { code2: "SM", code3: "SMR", name: "San Marino" },
    { code2: "ST", code3: "STP", name: "São Tomé and Príncipe" },
    { code2: "SA", code3: "SAU", name: "Saudi Arabia" },
    { code2: "SN", code3: "SEN", name: "Senegal" },
    { code2: "RS", code3: "SRB", name: "Serbia" },
    { code2: "SC", code3: "SYC", name: "Seychelles" },
    { code2: "SL", code3: "SLE", name: "Sierra Leone" },
    { code2: "SG", code3: "SGP", name: "Singapore" },
    { code2: "SK", code3: "SVK", name: "Slovakia" },
    { code2: "SI", code3: "SVN", name: "Slovenia" },
    { code2: "SB", code3: "SLB", name: "Solomon Islands" },
    { code2: "SO", code3: "SOM", name: "Somalia" },
    { code2: "ZA", code3: "ZAF", name: "South Africa" },
    { code2: "KR", code3: "KOR", name: "South Korea" },
    { code2: "SS", code3: "SSD", name: "South Sudan" },
    { code2: "ES", code3: "ESP", name: "Spain" },
    { code2: "LK", code3: "LKA", name: "Sri Lanka" },
    { code2: "SD", code3: "SDN", name: "Sudan" },
    { code2: "SR", code3: "SUR", name: "Suriname" },
    { code2: "SE", code3: "SWE", name: "Sweden" },
    { code2: "CH", code3: "CHE", name: "Switzerland" },
    { code2: "SY", code3: "SYR", name: "Syria" },
    { code2: "TW", code3: "TWN", name: "Taiwan" },
    { code2: "TJ", code3: "TJK", name: "Tajikistan" },
    { code2: "TZ", code3: "TZA", name: "Tanzania" },
    { code2: "TH", code3: "THA", name: "Thailand" },
    { code2: "TL", code3: "TLS", name: "Timor-Leste" },
    { code2: "TG", code3: "TGO", name: "Togo" },
    { code2: "TO", code3: "TON", name: "Tonga" },
    { code2: "TT", code3: "TTO", name: "Trinidad and Tobago" },
    { code2: "TN", code3: "TUN", name: "Tunisia" },
    { code2: "TR", code3: "TUR", name: "Turkey" },
    { code2: "TM", code3: "TKM", name: "Turkmenistan" },
    { code2: "TV", code3: "TUV", name: "Tuvalu" },
    { code2: "UG", code3: "UGA", name: "Uganda" },
    { code2: "UA", code3: "UKR", name: "Ukraine" },
    { code2: "AE", code3: "ARE", name: "United Arab Emirates" },
    { code2: "GB", code3: "GBR", name: "United Kingdom" },
    { code2: "US", code3: "USA", name: "United States" },
    { code2: "UY", code3: "URY", name: "Uruguay" },
    { code2: "UZ", code3: "UZB", name: "Uzbekistan" },
    { code2: "VU", code3: "VUT", name: "Vanuatu" },
    { code2: "VA", code3: "VAT", name: "Vatican City" },
    { code2: "VE", code3: "VEN", name: "Venezuela" },
    { code2: "VN", code3: "VNM", name: "Vietnam" },
    { code2: "YE", code3: "YEM", name: "Yemen" },
    { code2: "ZM", code3: "ZMB", name: "Zambia" },
    { code2: "ZW", code3: "ZWE", name: "Zimbabwe" }
  ];

  // ─── Only these countries have flag pages on ozoutback.com.au ───
  const PASSED_COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Australia",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Djibouti",
    "Eritrea",
    "Ethiopia",
    "Grenada",
    "Haiti",
    "Italy",
    "Kenya",
    "Lesotho",
    "Malawi",
    "Malta",
    "Mauritius",
    "Micronesia",
    "Moldova",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "Norway",
    "Pakistan",
    "Samoa",
    "San Marino",
    "South Africa",
    "Suriname",
    "Timor-Leste",
    "Turkey",
    "Uzbekistan"
  ];

  // ─────────────────── CSS Injection ───────────────────
  function injectStyles() {
    if (document.getElementById('jcountry-styles')) return;
    const style = document.createElement('style');
    style.id = 'jcountry-styles';
    style.textContent = `
      .jCountry-container {
        position: relative !important;
        font-family: system-ui, -apple-system, sans-serif !important;
      }
      .jCountry-button {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        width: 100% !important;
        padding: 2px 4px !important;
        background: #fff !important;
        border: 1px solid #d1d5db !important;
        border-radius: 6px !important;
        font-size: 12px !important;
        cursor: pointer !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
        transition: box-shadow 0.15s ease, border-color 0.15s ease !important;
        color: #1f2937 !important;
        outline: none !important;
        box-sizing: border-box !important;
      }
      .jCountry-button:focus {
        box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3) !important;
        border-color: #6366f1 !important;
      }
      .jCountry-button:hover {
        border-color: #9ca3af !important;
      }
      .jCountry-button-content {
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        overflow: hidden !important;
        white-space: nowrap !important;
      }
      .jCountry-flag {
        font-size: 1.1em !important;
        line-height: 1 !important;
      }
      .jCountry-code {
        font-weight: 500 !important;
        color: #374151 !important;
        font-size: inherit !important;
      }
      .jCountry-arrow {
        display: inline-block !important;
        transition: transform 0.2s ease !important;
        font-size: 10px !important;
        color: #6b7280 !important;
        margin-left: 4px !important;
      }
      .jCountry-arrow.open {
        transform: rotate(180deg) !important;
      }
      .jCountry-panel {
        position: absolute !important;
        top: calc(100% + 4px) !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 999 !important;
        background: #fff !important;
        border: 1px solid #d1d5db !important;
        border-radius: 6px !important;
        box-shadow: 0 8px 12px -3px rgba(0,0,0,0.1), 0 3px 5px -2px rgba(0,0,0,0.05) !important;
        display: none !important;
        flex-direction: column !important;
        max-height: 220px !important;
      }
      .jCountry-panel.open {
        display: flex !important;
      }
      .jCountry-list {
        list-style: none !important;
        margin: 0 !important;
        padding: 2px !important;
        overflow-y: auto !important;
        max-height: 200px !important;
        scrollbar-width: thin !important;
        scrollbar-color: #cbd5e1 transparent !important;
      }
      .jCountry-list::-webkit-scrollbar {
        width: 4px !important;
      }
      .jCountry-list::-webkit-scrollbar-track {
        background: transparent !important;
      }
      .jCountry-list::-webkit-scrollbar-thumb {
        background: #cbd5e1 !important;
        border-radius: 10px !important;
      }
      .jCountry-option {
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        padding: 5px 8px !important;
        font-size: 12px !important;
        cursor: pointer !important;
        border-radius: 4px !important;
        transition: background 0.15s ease !important;
        color: #1f2937 !important;
      }
      .jCountry-option:hover {
        background: #f3f4f6 !important;
      }
      .jCountry-option.selected {
        background: #e0e7ff !important;
        font-weight: 600 !important;
      }
      .jCountry-option .jCountry-flag {
        font-size: 1em !important;
      }
      .jCountry-option .jCountry-name {
        margin-left: auto !important;
        font-size: 0.8em !important;
        color: #6b7280 !important;
        display: none !important;
      }
      @media (min-width: 500px) {
        .jCountry-option .jCountry-name {
          display: inline !important;
        }
      }
      @media (prefers-color-scheme: dark) {
        .jCountry-button {
          background: #1f2937 !important;
          border-color: #4b5563 !important;
          color: #e5e7eb !important;
        }
        .jCountry-button:hover {
          border-color: #9ca3af !important;
        }
        .jCountry-code {
          color: #e5e7eb !important;
        }
        .jCountry-panel {
          background: #1f2937 !important;
          border-color: #4b5563 !important;
        }
        .jCountry-list::-webkit-scrollbar-thumb {
          background: #4b5563 !important;
        }
        .jCountry-option {
          color: #e5e7eb !important;
        }
        .jCountry-option:hover {
          background: #374151 !important;
        }
        .jCountry-option.selected {
          background: #312e81 !important;
          color: #e0e7ff !important;
        }
        .jCountry-option .jCountry-name {
          color: #9ca3af !important;
        }
        .jCountry-arrow {
          color: #d1d5db !important;
        }
        .jCountry - button: disabled {
  opacity: 0.5!important;
  cursor: not - allowed!important;
  background: #f3f4f6!important;
}
.dark.jCountry - button: disabled {
    background: #374151 !important;
}
      }
    `;
    document.head.appendChild(style);
  }

  // ─────────────────── Utility ───────────────────
  function codeToFlag(code2) {
    return String.fromCodePoint(...[...code2.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));
  }

  // ─────────────────── Component Class ───────────────────
  class JCountryDropdown {
    constructor(container, options = {}) {
      this.container = container;
      this.selectedCountry = options.default || '';
      this.filtered = options.filtered === true; // default false
      this.onChange = options.onChange || (() => {});
      injectStyles();
      this.build();
    }

    // Returns the active country list based on filtered flag
    _getCountryList() {
      if (this.filtered) {
        return ALL_COUNTRIES.filter(c => PASSED_COUNTRIES.includes(c.name));
      }
      return ALL_COUNTRIES;
    }

    build() {
      this.container.innerHTML = `
        <button class="jCountry-button" type="button">
          <span class="jCountry-button-content">
            <span class="jCountry-flag" id="jCountryFlag"></span>
            <span class="jCountry-code" id="jCountryCode"></span>
          </span>
          <span class="jCountry-arrow" id="jCountryArrow">▼</span>
        </button>
        <div class="jCountry-panel" id="jCountryPanel">
          <ul class="jCountry-list" id="jCountryList"></ul>
        </div>
      `;

      this.button = this.container.querySelector('.jCountry-button');
      this.panel = this.container.querySelector('#jCountryPanel');
      this.arrow = this.container.querySelector('#jCountryArrow');
      this.list = this.container.querySelector('#jCountryList');
      this.flagEl = this.container.querySelector('#jCountryFlag');
      this.codeEl = this.container.querySelector('#jCountryCode');

      this.renderList();
      this.updateButton();
      this.events();
    }

    updateButton() {
      const list = this._getCountryList();
      const country = list.find(c => c.name === this.selectedCountry);
      if (country) {
        this.flagEl.textContent = codeToFlag(country.code2);
        this.codeEl.textContent = country.code3;
      } else {
        this.flagEl.textContent = '';
        this.codeEl.textContent = 'Select country';
      }
    }

    renderList() {
      const list = this._getCountryList();
      this.list.innerHTML = list.map(c => `
        <li class="jCountry-option${c.name === this.selectedCountry ? ' selected' : ''}" data-country="${c.name}">
          <span class="jCountry-flag">${codeToFlag(c.code2)}</span>
          <span class="jCountry-code">${c.code3}</span>
          <span class="jCountry-name">${c.name}</span>
        </li>
      `).join('');
    }

    events() {
      this.button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.panel.classList.toggle('open');
        this.arrow.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!this.container.contains(e.target)) {
          this.panel.classList.remove('open');
          this.arrow.classList.remove('open');
        }
      });

      this.list.addEventListener('click', (e) => {
        const li = e.target.closest('.jCountry-option');
        if (!li) return;
        const countryName = li.dataset.country;
        this.selectedCountry = countryName;
        this.updateButton();
        this.renderList();
        this.panel.classList.remove('open');
        this.arrow.classList.remove('open');
        this.onChange(countryName);
      });

      this.panel.addEventListener('click', (e) => e.stopPropagation());
    }

    getValue() {
      return this.selectedCountry;
    }

    setValue(countryName) {
      this.selectedCountry = countryName;
      this.updateButton();
      this.renderList();
    }
    
    disable() {
  this.button.disabled = true;
  this.button.style.opacity = '0.5';
  this.button.style.cursor = 'not-allowed';
}

enable() {
  this.button.disabled = false;
  this.button.style.opacity = '1';
  this.button.style.cursor = 'pointer';
}

    // Enable or disable filtered mode after init
    setFiltered(flag) {
      this.filtered = flag;
      this.renderList();
      this.updateButton();
    }
  }

  // ─────────────────── Auto‑init (optional) ───────────────────
  function initAuto() {
    const containers = document.querySelectorAll('[data-jcountry="auto"]');
    containers.forEach(container => {
      const filtered = container.getAttribute('data-jcountry-filtered') === 'true';
      new JCountryDropdown(container, { filtered });
    });
  }

  // Expose globally
  window.JCountryDropdown = JCountryDropdown;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuto);
  } else {
    initAuto();
  }
})();