/* Temo-Learn built-in syllabus. No Firebase in here, so it always loads. */

export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));

export const COURSES = [
  {
    number: 1, id: "hydroponics", icon: "💧", category: "Growing Systems",
    title: "Hydroponics in the Kalahari: Zero-Soil Farming",
    level: "Beginner to intermediate", hours: "16–20 hours",
    summary: "Grow vegetables without soil in Botswana's heat using NFT, DWC and Dutch bucket systems.",
    description: "Learn to grow vegetables without soil using nutrient-rich water systems suited to Botswana's hot, dry conditions. You'll design and manage NFT, Deep Water Culture (DWC) and Dutch bucket systems while controlling pH, electrical conductivity (EC), root-zone temperature and water loss.",
    modules: [
      { title: "Foundations of Soilless Agriculture", points: ["Why hydroponics suits water-limited production", "Root anatomy, oxygen, water and essential nutrients", "NFT vs DWC vs Dutch bucket systems", "Crop suitability, food-safe materials and system sizing"] },
      { title: "Nutrient Chemistry and Root Health", points: ["Macro- and micronutrients", "pH, EC and nutrient availability", "Calibrating meters and mixing nutrients", "Root oxygenation, algae prevention and sanitation"] },
      { title: "Surviving the Kalahari Heat", points: ["Heat transfer into reservoirs and pipes", "Shading, insulation and protected tanks", "Pump failure, power cuts and evaporation", "Seasonal crop selection and operating schedules"] },
      { title: "Water Recycling and System Economics", points: ["Closed-loop recirculation and leak prevention", "Managing accumulated salts and solution changes", "Cleaning, maintenance and food safety", "Yield, energy cost and litres of water per kilogram"] }
    ],
    output: "A hydroponic system plan with a water budget, pH/EC monitoring sheet, heat-protection measures and estimated cost per kilogram.",
    game: "Hydro-Hero: Reservoir Rescue"
  },
  {
    number: 2, id: "permaculture", icon: "🌿", category: "Soil & Land",
    title: "Permaculture, Shade Nets & Microclimate Strategy",
    level: "Beginner to intermediate", hours: "12–16 hours",
    summary: "Shape the farm environment instead of fighting it: shade nets, windbreaks, swales and wicking beds.",
    description: "Shape the farm environment rather than fight it. The course combines permaculture principles, shade nets, living canopy, windbreaks, swales, wicking beds and passive cooling to protect crops from excessive radiation, wind and soil-water loss.",
    modules: [
      { title: "Reading the Farm's Microclimate", points: ["Solar radiation, shade patterns, wind and heat islands", "Soil-surface temperature and evaporation", "Permaculture zoning and water-source placement", "Mapping slopes, runoff and flood-prone areas"] },
      { title: "Shade Nets and Living Canopies", points: ["Understanding 30%, 50% and 80% shade ratings", "Choosing shade by crop, light and season", "Anchoring, airflow and net maintenance", "Trees, trellises and living shade"] },
      { title: "Water-Sensitive Landscape Design", points: ["Contour swales and infiltration basins", "Wicking beds and subsurface moisture", "Mulch and ground-cover selection", "Windbreaks, salinity and drainage limits"] },
      { title: "Passive Cooling and Integrated Farm Design", points: ["Natural ventilation, orientation and thermal mass", "Evaporative wet-wall cooling: benefits and water costs", "Combining shade, mulch, wind protection and storage", "Designing for heatwaves, dry spells and storms"] }
    ],
    output: "A site-specific microclimate plan with shade percentages, planting zones, water-harvesting features and monitoring points.",
    game: "Microclimate Architect: Oasis Builder"
  },
  {
    number: 3, id: "solar-irrigation", icon: "☀️", category: "Water",
    title: "Solar-Powered Irrigation & Smart Water Management",
    level: "Beginner to intermediate", hours: "14–18 hours",
    summary: "Plan off-grid irrigation with solar pumps, gravity tanks and drip lines, without over-pumping the borehole.",
    description: "Develop practical skills in off-grid irrigation, solar pump selection, tank elevation, drip systems and responsible groundwater use. You'll plan irrigation around crop requirements, available solar energy, borehole yield and water-access restrictions.",
    modules: [
      { title: "Farm Water Budgeting", points: ["Crop water demand and evapotranspiration", "Gross vs net irrigation requirements", "Drip, micro-sprinkler and surface irrigation", "Water productivity in litres per kilogram"] },
      { title: "Solar Pumping Fundamentals", points: ["Panels, controllers, batteries and direct-solar pumping", "Submersible vs surface pumps", "Flow rate, head, friction losses and pump curves", "Dust, shading, orientation and cleaning"] },
      { title: "Gravity Tanks and Efficient Distribution", points: ["Elevated storage and usable hydraulic head", "Pipe diameter, pressure and friction loss", "Dripline spacing, emitters, filters and flush valves", "Detecting leaks, clogging and uneven delivery"] },
      { title: "Aquifer Stewardship and System Resilience", points: ["Abstraction records and water-use permissions", "Pumping tests and groundwater recovery", "Sustainable yield vs pumping capacity", "Drought contingency, backup supply and lifecycle cost"] }
    ],
    output: "A solar irrigation design with pump assumptions, storage sizing, daily demand, maintenance schedule and groundwater safeguards.",
    game: "Solar Pump Master"
  },
  {
    number: 4, id: "electroculture", icon: "⚡", category: "Tech & Science",
    title: "Electroculture & Energetic Farming Lab",
    level: "Experimental science", hours: "10–14 hours",
    summary: "Test electroculture claims like a scientist: build fair experiments and report honest results.",
    description: "An evidence-based investigation of claims that copper antennas, low-voltage stimulation, magnetic water treatment or Lakhovsky-style rings improve plant growth. You'll explore plant electrical signalling and experimental design while separating plausible mechanisms from claims that lack robust agronomic evidence.",
    modules: [
      { title: "Plant Bioelectricity and the Evidence Base", points: ["Electrical signalling in plants", "Biological mechanisms vs commercial product claims", "Reading research and judging evidence quality", "Electrical safety in wet growing areas"] },
      { title: "Building a Fair Experiment", points: ["Variables, control groups, randomisation and replication", "Germination rate, root length, biomass and survival", "Sample size, bias and confounding factors", "Safe use of low-voltage demonstration equipment"] },
      { title: "Testing Antennas, Rings and Water-Treatment Claims", points: ["Copper-wire antennas and passive structures", "Lakhovsky-style rings as a historical claim", "Magnetic water treatment and proper controls", "Placebo effects, measurement error and null results"] },
      { title: "Root Growth Under Water Stress", points: ["Seedling establishment and root development", "Water stress, soil texture, salinity and temperature", "Analysing results and reporting negative findings", "Cost vs proven methods like mulching and drip irrigation"] }
    ],
    output: "A reproducible experimental plan and evidence report. No yield increase is promised before results support it.",
    game: "Electroculture Antenna Builder"
  },
  {
    number: 5, id: "soil-regeneration", icon: "🌱", category: "Soil & Land",
    title: "Climate-Smart Soil Regeneration: Sandveld Care",
    level: "Beginner friendly", hours: "14–18 hours",
    summary: "Bring sandy soil back to life with compost, vermicompost, mulch, cover crops and conditioned biochar.",
    description: "Learn to improve the water-holding capacity, biological activity and nutrient retention of sandy soils through composting, vermicomposting, mulch, cover crops and properly prepared biochar. The course emphasises locally available organic resources, safe handling and gradual improvement of degraded soil.",
    modules: [
      { title: "Understanding Sandy Soils", points: ["Texture, structure, porosity and infiltration", "Organic matter and soil organisms", "Water-holding capacity vs drainage", "Salinity, pH, nutrient deficiency and wind erosion"] },
      { title: "Compost and Vermicomposting", points: ["Carbon-rich and nitrogen-rich ingredients", "Moisture, aeration and temperature", "Worm composting and compost maturity", "Contamination risks and safe application"] },
      { title: "Biochar, Mulch, and Soil Moisture", points: ["Biochar concepts and safe production", "Conditioning biochar before use", "Mulch thickness and evaporation reduction", "Testing amendment rates instead of guessing"] },
      { title: "Cover Crops and Long-Term Regeneration", points: ["Locally suitable cover crops and green manures", "Root channels and soil aggregation", "Avoiding water competition with the main crop", "Tracking organic matter, infiltration and productivity"] }
    ],
    output: "A seasonal soil-improvement plan, amendment log and measured water-retention comparison.",
    game: "Sandveld Soil Transformer"
  },
  {
    number: 6, id: "precision-agriculture", icon: "🛰️", category: "Tech & Science",
    title: "Precision Agriculture on a Budget",
    level: "Beginner to intermediate", hours: "14–18 hours",
    summary: "Use low-cost sensors, field maps and drone imagery to find problems early and save water.",
    description: "Introduce affordable sensors, basic field mapping, irrigation monitoring and drone-based crop scouting. You'll learn to use data to find uneven irrigation, identify crop stress, prioritise field inspections and avoid wasting water or fertiliser.",
    modules: [
      { title: "Affordable Farm Sensors", points: ["Soil-moisture sensors and calibration", "Temperature, humidity, rainfall and flow measurement", "Data logging, placement and solar charging", "Sensor drift, false readings and field validation"] },
      { title: "Field Mapping and Management Zones", points: ["GPS coordinates and field boundaries", "Mapping beds, soils, water points and irrigation lines", "Sampling strategies and spatial variation", "Spreadsheet maps and simple dashboards"] },
      { title: "Drone Scouting and Crop Imagery", points: ["Flight planning, safety and aviation rules", "RGB, NDVI and thermal imagery", "Leaks, nutrient gaps, weeds and pests as competing explanations", "Limits from crop stage, soil background and cloud"] },
      { title: "Turning Data into Decisions", points: ["Thresholds, trends and basic alerts", "Irrigation scheduling from sensor readings", "Combining weather with field measurements", "Calculating avoided water, labour and costs"] }
    ],
    output: "A basic precision-farming dashboard and field inspection plan.",
    game: "Drip-by-Drip Precision Challenge"
  },
  {
    number: 7, id: "cea-container-farming", icon: "📦", category: "Growing Systems",
    title: "Controlled Environment Agriculture (CEA) & Container Farming",
    level: "Intermediate", hours: "16–20 hours",
    summary: "Grow year-round in greenhouses and container farms, and work out when it actually pays.",
    description: "Explore greenhouses, insulated growing spaces and converted shipping containers for year-round production. You'll balance light, temperature, ventilation, humidity, nutrient delivery, energy use and capital costs to decide when protected cultivation is viable in Botswana.",
    modules: [
      { title: "Choosing a Controlled Environment", points: ["Open field, shade-house, greenhouse and container farm compared", "Crop choice, production cycles and market demand", "Environmental control vs passive protection", "Capital vs operating-cost trade-offs"] },
      { title: "Heat, Insulation, and Airflow", points: ["Solar heat gain, insulation and reflective surfaces", "Ventilation sizing and fan placement", "Evaporative cooling and humidity limits", "Emergency ventilation and backup power"] },
      { title: "Lighting and Automated Growing", points: ["LED spectra, intensity and photoperiod", "Lighting efficiency and electrical demand", "Automated dosing, timers and sensors", "Alarms, manual overrides and sanitation"] },
      { title: "Energy, Water, and Commercial Viability", points: ["Solar, grid, batteries and critical loads", "Closed-loop hydroponics and wastewater", "Production forecasting and downtime risk", "Break-even analysis and cost sensitivity"] }
    ],
    output: "A CEA concept proposal with a climate-control strategy, equipment assumptions, water and energy budgets and an operating-cost estimate.",
    game: "Drone Crop Inspector (CEA adaptation)"
  },
  {
    number: 8, id: "aquaponics", icon: "🐟", category: "Growing Systems",
    title: "Aquaponics: Integrated Fish & Vegetable Farming",
    level: "Intermediate", hours: "16–20 hours",
    summary: "Raise fish and vegetables in one loop and keep the water, bacteria and plants in balance.",
    description: "Learn how fish production and soilless vegetable cultivation can run as one connected recirculating system. The course covers the nitrogen cycle, biofiltration, dissolved oxygen, feed management, water chemistry and the extra risks posed by Botswana's high temperatures.",
    modules: [
      { title: "Understanding the Integrated Ecosystem", points: ["Fish, plants, microbes and water circulation", "Ammonia from fish waste to nitrite to nitrate", "Biofilter cycling and stability", "Choosing fish and crops under local rules"] },
      { title: "Fish Health and Water Chemistry", points: ["Ammonia, nitrite, nitrate, pH and dissolved oxygen", "Stocking density and feeding rates", "Solids removal and biofilter maintenance", "Quarantine, disease prevention and welfare"] },
      { title: "Heat Management and Nutrient Balance", points: ["Heat gain in exposed tanks", "Shade, insulation, aeration and backup", "Nutrient limits of fish-derived feed", "Safe supplements and seasonal adjustments"] },
      { title: "Productivity, Water Use, and Operations", points: ["Crop and fish production planning", "Feed conversion and harvest schedules", "Water top-ups, solids and cleaning", "Food safety and economics"] }
    ],
    output: "An aquaponics operating manual with water-quality thresholds, crop plan and emergency procedures.",
    game: "Aquaponics Eco-Balancer"
  },
  {
    number: 9, id: "rainwater-harvesting", icon: "🌧️", category: "Water",
    title: "Rainwater Harvesting & Ground Recharge",
    level: "Beginner to intermediate", hours: "14–18 hours",
    summary: "Catch, store and safely manage rainfall with roofs, swales, earth dams and recharge features.",
    description: "Learn to collect, store, infiltrate and manage rainfall where rain is variable and storms can cause damaging runoff. The course combines roof harvesting, contour swales, earth dams, sand dams, greywater treatment and groundwater-recharge awareness.",
    modules: [
      { title: "Rainfall, Runoff, and Catchment Calculations", points: ["Rainfall intensity, duration and variability", "Roof and field catchments, runoff coefficients", "First-flush diversion and sediment control", "Overflow capacity and safe discharge"] },
      { title: "Contour Swales and Landscape Infiltration", points: ["Reading slopes and setting contours", "Swales, basins, bunds and check structures", "Erosion control and safe overflow routes", "When swales are inappropriate"] },
      { title: "Earth Dams, Sand Dams, and Groundwater", points: ["Surface vs subsurface storage", "Sand-dam concepts and suitable geology", "Evaporation, seepage and sedimentation", "Infiltration vs proven aquifer recharge"] },
      { title: "Greywater, Safety, and Integrated Water Planning", points: ["Separating potable and non-potable water", "Greywater filtration and permitted reuse", "Mosquito control and sanitation", "Linking harvested water to solar pumping and irrigation"] }
    ],
    output: "A water-harvesting proposal with estimated yield, storage requirements, maintenance responsibilities and safety controls.",
    game: "Sky-Catch: Rain Harvesting Architect"
  },
  {
    number: 10, id: "arid-agribusiness", icon: "🚛", category: "Business",
    title: "High-Value Arid Agribusiness & Cold-Chain Logistics",
    level: "Beginner to intermediate", hours: "16–20 hours",
    summary: "Pick the right crops, keep produce cool and fresh, and turn harvests into profit.",
    description: "Connect climate-smart production to viable business operations. You'll select crops by climate and demand, plan harvesting and post-harvest handling, manage cooling and transport, calculate costs and evaluate routes to supermarkets, hospitality businesses, lodges and local markets.",
    modules: [
      { title: "Crop Selection and Market Intelligence", points: ["Matching crops to climate, water and season", "Buyer specifications, grades and volumes", "Market research for supermarkets, lodges and wholesalers", "Planning from real demand, not optimistic guesses"] },
      { title: "Harvesting, Handling, and Cooling", points: ["Harvest maturity, sorting and grading", "Crop-specific temperature and humidity needs", "Pre-cooling, packaging and airflow", "Hygiene, traceability and solar-assisted refrigeration"] },
      { title: "Cold-Chain Transport and Distribution", points: ["Loading, crate stacking and insulated vehicles", "Route planning, distance and transit time", "Temperature logging at delivery", "Handling delays and breakdowns"] },
      { title: "Farm Economics and Business Resilience", points: ["Capital costs, operating costs and cash flow", "Gross margin, break-even volume and wastage", "Pricing, contracts and payment delays", "Water and energy cost per kilogram sold"] }
    ],
    output: "A market-ready business plan with a crop calendar, cost model, quality-control checklist and delivery contingency plan.",
    game: "Desert Farm-to-Market Logistics Tycoon"
  }
];

/* Live (teacher-published) courses first, then any built-in ones not already covered. */
export function mergeCourses(live = []) {
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const taken = new Set(live.map((c) => norm(c.title)));
  return [...live, ...COURSES.filter((c) => !taken.has(norm(c.title)))];
}

function detailsHTML(c, cta) {
  const meta = [c.level, c.hours, c.modules && c.modules.length ? `${c.modules.length} modules` : ""]
    .filter(Boolean)
    .map((m) => `<span class="meta-chip">${esc(m)}</span>`)
    .join("");

  const modules = c.modules && c.modules.length
    ? `<ol class="module-list">${c.modules.map((m, i) => `
        <li>
          <span class="module-num">${i + 1}</span>
          <div>
            <h4>${esc(m.title)}</h4>
            <ul>${(m.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
        </li>`).join("")}</ol>`
    : `<p class="module-locked">🔒 The module list unlocks when you sign in.</p>`;

  const output = c.output
    ? `<div class="detail-box"><h4>🎯 You'll build</h4><p>${esc(c.output)}</p></div>` : "";
  const game = c.game
    ? `<div class="detail-box"><h4>🎮 Matching game</h4><p>${esc(c.game)}</p></div>` : "";

  return `
    <div class="course-details" id="d-${esc(c.id)}">
      <div class="details-inner">
        <div class="details-grid">
          <div class="details-main">
            <div class="meta-row">${meta}</div>
            <h4>About this course</h4>
            <p>${esc(c.description || c.summary)}</p>
            ${output}${game}
            <div class="details-cta">${cta}</div>
          </div>
          <div class="details-modules">
            <h4>Modules</h4>
            ${modules}
          </div>
        </div>
      </div>
    </div>`;
}

export function cardHTML(c, { expandable = false, cta = "" } = {}) {
  const hasImg = typeof c.thumbnail === "string" && c.thumbnail.startsWith("data:image/");
  const thumb = hasImg
    ? `<img src="${esc(c.thumbnail)}" alt="">`
    : `<span class="course-icon">${esc(c.icon || "📜")}</span>`;
  const num = c.number ? `<span class="course-num">Course ${esc(c.number)}</span>` : "";
  const headAttrs = expandable
    ? ` role="button" tabindex="0" aria-expanded="false" aria-controls="d-${esc(c.id)}"` : "";

  return `
    <article class="course-card" data-id="${esc(c.id)}"${expandable ? "" : ' tabindex="0"'}>
      <div class="course-head"${headAttrs}>
        <div class="course-thumb">${thumb}<span class="hud-chip">${esc(c.category)}</span></div>
        <div class="course-body">
          ${num}
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.summary)}</p>
          <div class="course-foot">
            <span class="lock">🔒 Sign in for full lessons</span>
            <span class="more">${expandable ? "Open syllabus" : "Preview →"}</span>
          </div>
        </div>
      </div>
      ${expandable ? detailsHTML(c, cta) : ""}
    </article>`;
}