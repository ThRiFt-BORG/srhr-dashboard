// EACHRights SRHR Portal — All Data
// Edit this file to update content. Non-developers: search for your county and change values.

window.SITE = {
  name: "EACHRights SRHR Advocacy Portal",
  tagline: "Taking on the Legal and Policy Advocacy Challenge: Promoting Synergies Among SRHR Social Movements in Kenya",
  org: "East African Centre for Human Rights (EACHRights)",
  partner: "Amplify Change",
  project_period: "2024–2027",
  last_updated: "June 2026"
};

window.NATIONAL_POLICIES = [
  { id:"np-01", name:"Constitution of Kenya — Article 43(1)(a)", year:2010, status:"Adopted", impl_pct:65, category:"Constitutional", gap:"County-level implementation inconsistent", doc_url:"" },
  { id:"np-02", name:"National Reproductive Health Policy (2022–2032)", year:2022, status:"Adopted", impl_pct:60, category:"Reproductive Health", gap:"Inadequate resource allocation; limited HCW training", doc_url:"" },
  { id:"np-03", name:"National Family Planning Policy", year:2012, status:"Adopted", impl_pct:55, category:"Family Planning", gap:"Supply chain challenges; cultural/religious barriers", doc_url:"" },
  { id:"np-04", name:"National ASRHR Policy", year:2015, status:"Adopted", impl_pct:38, category:"Adolescent Health", gap:"Low youth-friendly facility coverage; high teen pregnancy", doc_url:"" },
  { id:"np-05", name:"HIV Prevention and Control Act", year:2014, status:"Adopted", impl_pct:57, category:"HIV/AIDS", gap:"Stigma; limited SRHR-HIV integration", doc_url:"" },
  { id:"np-06", name:"National Gender and Development Policy", year:2019, status:"Partially Implemented", impl_pct:32, category:"Gender", gap:"Inadequate gender-responsive budgeting", doc_url:"" },
  { id:"np-07", name:"National Guidelines for Comprehensive Sexuality Education", year:2018, status:"Adopted", impl_pct:30, category:"Education", gap:"Inconsistent integration in schools", doc_url:"" },
  { id:"np-08", name:"National Policy on Prevention and Response to GBV", year:2014, status:"Adopted", impl_pct:45, category:"GBV", gap:"Fragmented SGBV response systems; under-resourced", doc_url:"" }
];

window.COUNTIES = [
  {
    id: "homa-bay",
    name: "Homa Bay",
    region: "Nyanza",
    color: "#c0392b",
    population: 1419662,
    lat: -0.5167, lng: 34.4500,
    hero_stat: { label: "Teen Pregnancy Rate", value: "23%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "Maternal Mortality", value: "516/100k", benchmark: "355 national avg", status: "above" },
      { label: "Under-5 Mortality", value: "61/1,000", benchmark: "41 national avg", status: "above" },
      { label: "SRHR Budget FY24/25", value: "KShs 117.4M", benchmark: "5.1% of health budget", status: "neutral" },
      { label: "Active CSOs", value: "~25", benchmark: "", status: "neutral" }
    ],
    overview: "Homa Bay County in the Nyanza region faces significant SRHR challenges, including the highest maternal mortality rate among the four target counties. With 9 sub-counties and 40 wards, the county has ~25 active CSOs working on SRHR advocacy. A dedicated county SRHR policy framework remains the top advocacy priority.",
    sub_counties: 9, wards: 40,
    women_reproductive_age: 336792,
    policies: [
      { id:"hb-p01", name:"Homa Bay County Reproductive Health Bill (2025)", year:2025, status:"In Progress", impl_pct:0, actors:["Ministry of Health / CHMT","Gender TWG","CSOs"], gap:"Delayed finalization", advocacy:"Lobby for enactment", doc_url:"" },
      { id:"hb-p02", name:"County Reproductive Health Policy", year:2025, status:"In Progress", impl_pct:5, actors:["CHMT","CSOs"], gap:"Draft stage — limited stakeholder input", advocacy:"Accelerate stakeholder consultations", doc_url:"" },
      { id:"hb-p03", name:"County SGBV Bill", year:2025, status:"In Progress", impl_pct:0, actors:["County Assembly","CSOs","Gender Office"], gap:"Bill awaiting tabling", advocacy:"Engage county assembly members", doc_url:"" },
      { id:"hb-p04", name:"SGBV Policy (2023)", year:2023, status:"Adopted", impl_pct:55, actors:["Gender Office","CSOs"], gap:"Enforcement weak at sub-county level", advocacy:"Strengthen enforcement mechanisms", doc_url:"" },
      { id:"hb-p05", name:"County Health Services Act (2020)", year:2020, status:"Adopted", impl_pct:60, actors:["CDH","CHMT"], gap:"SRHR components under-resourced", advocacy:"Advocate for dedicated SRHR budget line", doc_url:"" }
    ],
    advocacy_issues: [
      { id:"hb-a01", problem:"Lack of dedicated County SRHR policy framework", priority:1, timeline:"2 Years", lead_org:"GVRC", member_orgs:["KELIN","NAYA","HOCEN","World Vision"], status:"Not Started", indicator:"Number of Bills and Policies enacted" },
      { id:"hb-a02", problem:"High teenage pregnancy and dropout rate", priority:2, timeline:"3 Years", lead_org:"HOCEN", member_orgs:["NAYA","CYAN Kenya"], status:"In Progress", indicator:"School re-entry policy adopted" },
      { id:"hb-a03", problem:"Inadequate comprehensive sexuality education in schools", priority:3, timeline:"2 Years", lead_org:"NAYA", member_orgs:["KELIN","HOCEN"], status:"Not Started", indicator:"CSE integrated in county curriculum" },
      { id:"hb-a04", problem:"Limited adolescent contraception access", priority:4, timeline:"2 Years", lead_org:"CSA", member_orgs:["HOYMAS","NAYA"], status:"Not Started", indicator:"Youth-friendly clinics meeting standards" },
      { id:"hb-a05", problem:"Insufficient SRHR budget allocation", priority:5, timeline:"1 Year", lead_org:"KELIN", member_orgs:["CSA","GVRC"], status:"Not Started", indicator:"SRHR budget increased by 20%" }
    ],
    stakeholders: {
      government: ["County Department of Health","County Gender Office","CHMT","County Assembly Health Committee"],
      csos: ["GVRC","CSA","CYAN Kenya","KELIN","NAYA","HOCEN","HOYMAS"],
      development_partners: ["UNICEF","UNFPA","USAID"],
      community: ["Religious coordinating bodies","Youth advisory councils"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:98.8 },
      { fy:"2023/24", allocation_m:109.7 },
      { fy:"2024/25", allocation_m:117.4 }
    ],
    cso_strengths: ["Community mobilization","HIV-focused networking","Local context knowledge"],
    cso_gaps: ["Policy analysis","Budget tracking","Documentation","Strategic litigation"],
    coordination: ["CHMT quarterly meetings","HIV Technical Working Group","RMNCAH committee"],
    updates: [
      { id:"hb-u01", date:"2026-06-01", title:"County SRHR Policy Technical Review Meeting", body:"Stakeholders convened to review the draft Homa Bay County Reproductive Health Bill. Technical review stage ongoing with inputs from CSOs and CHMT.", source:"EACHRights Field Team", tags:["policy","reproductive-health"] },
      { id:"hb-u02", date:"2026-04-15", title:"SGBV Awareness Campaign — Homa Bay Town", body:"A joint campaign by GVRC and NAYA reached over 2,000 community members across 5 sub-counties with SGBV prevention messaging.", source:"GVRC", tags:["sgbv","community"] }
    ]
  },
  {
    id: "migori",
    name: "Migori",
    region: "Nyanza",
    color: "#8e44ad",
    population: 1116436,
    lat: -1.0634, lng: 34.4731,
    hero_stat: { label: "Teen Pregnancy Rate", value: "24%", national_avg: "14.7%", direction: "above" },
    key_stats: [
      { label: "HIV Prevalence", value: "14.3%", benchmark: "5.6% national avg", status: "above" },
      { label: "FGM Rate (girls 15–19)", value: "28%", benchmark: "National concern", status: "above" },
      { label: "Active CSOs", value: "~18", benchmark: "", status: "neutral" },
      { label: "Teen Pregnancy Rate", value: "24%", benchmark: "14.7% national avg", status: "above" }
    ],
    overview: "Migori County has the highest teen pregnancy rate among the four counties and a notably high HIV prevalence at 14.3% against the national average of 5.6%. FGM affects 28% of girls aged 15–19. The Reproductive Health Bill remains stalled, making legislative advocacy the top priority for EACHRights and partner CSOs.",
    sub_counties: 8, wards: 40,
    women_reproductive_age: 271000,
    policies: [
      { id:"mg-p01", name:"GBV Policy (2026 Draft)", year:2026, status:"Draft", impl_pct:0, actors:["Gender Office","CSOs"], gap:"Awaiting approval", advocacy:"Push for County Executive approval", doc_url:"" },
      { id:"mg-p02", name:"SGBV Policy (2019)", year:2019, status:"Adopted", impl_pct:50, actors:["Gender Office","Police","CSOs"], gap:"Limited enforcement; low awareness", advocacy:"Strengthen enforcement & reporting", doc_url:"" },
      { id:"mg-p03", name:"Gender Policy (2021–2025)", year:2021, status:"Adopted", impl_pct:55, actors:["County Gender Office"], gap:"Budget allocation insufficient", advocacy:"Advocate for increased allocation", doc_url:"" },
      { id:"mg-p04", name:"County HIV Strategic Plan", year:2020, status:"Adopted", impl_pct:60, actors:["CHMT","Development Partners"], gap:"SRHR linkages weak", advocacy:"Integrate SRHR-HIV services", doc_url:"" },
      { id:"mg-p05", name:"CIDP SRHR Components (2023–2027)", year:2023, status:"Adopted", impl_pct:40, actors:["County Government"], gap:"Implementation lagging", advocacy:"Quarterly monitoring reviews", doc_url:"" },
      { id:"mg-p06", name:"Reproductive Health Bill", year:2025, status:"Stalled", impl_pct:0, actors:["County Assembly","CSOs"], gap:"Political barriers; limited lobbying", advocacy:"Intensify legislator engagement", doc_url:"" }
    ],
    advocacy_issues: [
      { id:"mg-a01", problem:"Stalled Reproductive Health Bill", priority:1, timeline:"1 Year", lead_org:"KELIN", member_orgs:["FIDA Kenya","NAYA","Youth for a Sustainable World"], status:"In Progress", indicator:"RH Bill passed by County Assembly" },
      { id:"mg-a02", problem:"Inadequate youth-friendly SRHR funding", priority:2, timeline:"2 Years", lead_org:"NAYA", member_orgs:["YSW","CSOs"], status:"Not Started", indicator:"Dedicated youth SRHR budget line created" },
      { id:"mg-a03", problem:"Lack of CSE integration in schools", priority:3, timeline:"2 Years", lead_org:"HOCEN Migori Chapter", member_orgs:["NAYA"], status:"Not Started", indicator:"CSE integrated in schools" },
      { id:"mg-a04", problem:"High FGM prevalence among girls 15–19", priority:4, timeline:"3 Years", lead_org:"AMID", member_orgs:["Ripple Effect","CSOs"], status:"Not Started", indicator:"FGM prevalence reduced by 20%" },
      { id:"mg-a05", problem:"Insufficient menstrual health programs", priority:5, timeline:"2 Years", lead_org:"CYAN Kenya", member_orgs:["NAYA"], status:"Not Started", indicator:"MHM policy adopted" }
    ],
    stakeholders: {
      government: ["County Department of Health","County Gender Office","County Assembly","CHMT"],
      csos: ["KELIN","FIDA Kenya","NAYA","YSW","AMID","Ripple Effect","CYAN Kenya"],
      development_partners: ["UNFPA","USAID","WHO"],
      community: ["Council of Elders","Youth groups","Faith communities"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:85.2 },
      { fy:"2023/24", allocation_m:91.5 },
      { fy:"2024/25", allocation_m:99.8 }
    ],
    cso_strengths: ["Strong community networks","FGM elimination advocacy","HIV programming experience"],
    cso_gaps: ["Legislative advocacy","Budget analysis","Monitoring & evaluation","Coalition building"],
    coordination: ["HIV/AIDS Coordinating Committee","SGBV Technical Working Group","CSO Forum"],
    updates: [
      { id:"mg-u01", date:"2026-05-20", title:"Reproductive Health Bill Lobbying Campaign", body:"EACHRights and KELIN convened a legislative engagement session with 12 MCAs to push for tabling of the stalled Reproductive Health Bill.", source:"EACHRights Field Team", tags:["policy","bill","legislature"] },
      { id:"mg-u02", date:"2026-03-08", title:"International Women's Day SGBV Forum", body:"Joint forum held in Migori town on IWD, attended by 150 stakeholders, focused on operationalizing the 2019 SGBV Policy.", source:"KELIN Migori", tags:["sgbv","forum"] }
    ]
  },
  {
    id: "kilifi",
    name: "Kilifi",
    region: "Coast",
    color: "#2980b9",
    population: 1453787,
    lat: -3.5107, lng: 39.8499,
    hero_stat: { label: "Teen Pregnancy Rate", value: "21%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "RMNCAH Act Implementation", value: "30–35%", benchmark: "Target: 80%", status: "below" },
      { label: "Youth-Friendly Facilities", value: "35%", benchmark: "Meeting standards", status: "below" },
      { label: "SGBV Policy", value: "0%", benchmark: "Not yet operational", status: "critical" },
      { label: "Active CSOs", value: "~20", benchmark: "", status: "neutral" }
    ],
    overview: "Kilifi County on the Coast region has a recently enacted RMNCAH Act (2025) but with only 30–35% implementation. Critically, an SGBV Policy (2020) exists but remains unsigned by the Governor and thus non-operational. Advocacy focuses on operationalizing existing policies and strengthening youth-friendly services.",
    sub_counties: 7, wards: 35,
    women_reproductive_age: 358000,
    policies: [
      { id:"kf-p01", name:"Kilifi County RMNCAH Act (2025)", year:2025, status:"Enacted", impl_pct:33, actors:["CDH","CHMT","CSOs"], gap:"Low implementation; funding shortfall", advocacy:"Develop county implementation plan with budget", doc_url:"" },
      { id:"kf-p02", name:"County SGBV Policy (2020)", year:2020, status:"Not Operational", impl_pct:0, actors:["County Executive","Gender Office"], gap:"Awaiting Governor's signature", advocacy:"Lobby Governor's office to sign immediately", doc_url:"" },
      { id:"kf-p03", name:"Menstrual Health Management (MHM) Policy", year:2024, status:"Draft", impl_pct:0, actors:["CDH","Education Dept.","CSOs"], gap:"Not yet adopted", advocacy:"Fast-track adoption process", doc_url:"" }
    ],
    advocacy_issues: [
      { id:"kf-a01", problem:"SGBV Policy operational gap (unsigned by Governor)", priority:1, timeline:"6 Months", lead_org:"CREAW", member_orgs:["KELIN","FIDA Kenya","Kilifi Youth Network"], status:"In Progress", indicator:"Governor signs SGBV Policy 2020" },
      { id:"kf-a02", problem:"Low RMNCAH Act implementation (30–35%)", priority:2, timeline:"2 Years", lead_org:"PATH Kenya", member_orgs:["CHMT","CSOs"], status:"In Progress", indicator:"Implementation rises to 70%" },
      { id:"kf-a03", problem:"Inadequate youth-friendly resources and facilities", priority:3, timeline:"2 Years", lead_org:"Kilifi Youth Network", member_orgs:["NAYA","UNFPA"], status:"Not Started", indicator:"65% of facilities meet youth-friendly standards" },
      { id:"kf-a04", problem:"No county Menstrual Health Management policy", priority:4, timeline:"1 Year", lead_org:"AMKENI Women", member_orgs:["CSOs","Schools"], status:"Not Started", indicator:"MHM Policy adopted" },
      { id:"kf-a05", problem:"Limited adolescent SRHR guidelines at facility level", priority:5, timeline:"2 Years", lead_org:"CHMT","member_orgs":["PATH Kenya"], status:"Not Started", indicator:"County adolescent SRHR guidelines published" }
    ],
    stakeholders: {
      government: ["CDH","CHMT","County Gender Office","County Assembly","Governor's Office"],
      csos: ["CREAW","PATH Kenya","Kilifi Youth Network","AMKENI Women","KELIN","FIDA Kenya"],
      development_partners: ["UNFPA","UNICEF","WHO"],
      community: ["Beach Management Units","Youth groups","Women's groups"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:101.0 },
      { fy:"2023/24", allocation_m:108.5 },
      { fy:"2024/25", allocation_m:115.2 }
    ],
    cso_strengths: ["Coastal community networks","Youth engagement","Maternal health programming"],
    cso_gaps: ["Strategic litigation","Budget advocacy","Policy documentation","Media engagement"],
    coordination: ["CHMT monthly meetings","SGBV Task Force (inactive)","CSO Network Kilifi"],
    updates: [
      { id:"kf-u01", date:"2026-06-10", title:"Governor Signature Campaign for SGBV Policy", body:"A coalition of 8 CSOs submitted a formal petition to the Governor's office demanding signature of the 2020 SGBV Policy. Follow-up meeting scheduled for July 2026.", source:"CREAW Kilifi", tags:["sgbv","policy","governor"] },
      { id:"kf-u02", date:"2026-05-05", title:"RMNCAH Act Implementation Review Workshop", body:"County stakeholders reviewed progress on RMNCAH Act implementation. Current rate stands at 33%. Key bottleneck identified as inadequate HCW capacity.", source:"PATH Kenya", tags:["rmncah","implementation"] }
    ]
  },
  {
    id: "kwale",
    name: "Kwale",
    region: "Coast",
    color: "#27ae60",
    population: 866820,
    lat: -4.1731, lng: 39.4525,
    hero_stat: { label: "Teen Pregnancy Rate", value: "22%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "County SRHR Policy", value: "None", benchmark: "Relies on national only", status: "critical" },
      { label: "SGBV Act Implementation", value: "30–40%", benchmark: "Target: 80%", status: "below" },
      { label: "Active CSOs", value: "~15", benchmark: "Fewest of 4 counties", status: "neutral" },
      { label: "Religious Influence", value: "High", benchmark: "Council of Imams", status: "neutral" }
    ],
    overview: "Kwale County has the fewest active CSOs (~15) and no dedicated county SRHR policy — relying solely on national frameworks. The predominantly Muslim context means the Council of Imams holds significant influence over SRHR discourse. The SGBV Act 2023/2024 shows 30–40% implementation, and a Gender & Social Inclusion Policy remains at 0% with no adoption date confirmed.",
    sub_counties: 4, wards: 20,
    women_reproductive_age: 210000,
    policies: [
      { id:"kw-p01", name:"Kwale County SGBV Act (2023/2024)", year:2023, status:"Enacted", impl_pct:35, actors:["County Government","Police","CSOs"], gap:"Enforcement weak; limited resources", advocacy:"Lobby for implementation budget", doc_url:"" },
      { id:"kw-p02", name:"Gender & Social Inclusion Policy", year:2025, status:"Draft", impl_pct:0, actors:["County Gender Office","CSOs"], gap:"Not yet adopted", advocacy:"Engage County Executive for fast-track adoption", doc_url:"" }
    ],
    advocacy_issues: [
      { id:"kw-a01", problem:"No dedicated county SRHR policy", priority:1, timeline:"2 Years", lead_org:"PATH Kenya", member_orgs:["KELIN","USAID","Local CSOs"], status:"Not Started", indicator:"County SRHR Policy developed and adopted" },
      { id:"kw-a02", problem:"Inadequate maternal health resources at facility level", priority:2, timeline:"2 Years", lead_org:"CHMT","member_orgs":["UNFPA","CSOs"], status:"Not Started", indicator:"Maternal mortality reduced by 15%" },
      { id:"kw-a03", problem:"Harmful cultural practices including FGM and early marriage", priority:3, timeline:"3 Years", lead_org:"Kwale Women Network", member_orgs:["Council of Imams","CSOs"], status:"In Progress", indicator:"FGM prevalence reduced; early marriage cases down" },
      { id:"kw-a04", problem:"Limited school re-entry policy for teen mothers", priority:4, timeline:"1 Year", lead_org:"KELIN","member_orgs":["Education Dept.","CSOs"], status:"Not Started", indicator:"County school re-entry policy adopted" },
      { id:"kw-a05", problem:"Inadequate youth-friendly SRHR services", priority:5, timeline:"2 Years", lead_org:"NAYA Kwale", member_orgs:["UNFPA","CHMT"], status:"Not Started", indicator:"Youth-friendly facilities increased to 60%" }
    ],
    stakeholders: {
      government: ["County Department of Health","County Gender Office","CHMT","County Assembly"],
      csos: ["PATH Kenya","KELIN","NAYA Kwale","Kwale Women Network"],
      development_partners: ["UNFPA","USAID","UNICEF"],
      community: ["Council of Imams","Women's groups","Youth networks"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:62.1 },
      { fy:"2023/24", allocation_m:68.4 },
      { fy:"2024/25", allocation_m:74.6 }
    ],
    cso_strengths: ["Religious leader engagement","Community trust","Local knowledge"],
    cso_gaps: ["Policy advocacy","Budget tracking","Strategic litigation","CSO networking"],
    coordination: ["CHMT meetings","SGBV Task Force","Interfaith SRHR Dialogue Platform"],
    updates: [
      { id:"kw-u01", date:"2026-06-15", title:"Interfaith SRHR Dialogue — Kwale Town", body:"First-ever interfaith dialogue on SRHR involving the Council of Imams and Christian leaders. Agreement reached to co-develop community SRHR messaging.", source:"Kwale Women Network", tags:["interfaith","sgbv","community"] },
      { id:"kw-u02", date:"2026-04-20", title:"County SRHR Policy Development Workshop", body:"Stakeholder workshop to launch the SRHR policy development process. 22 organizations participated. Technical committee formed to draft the policy by Q4 2026.", source:"EACHRights Field Team", tags:["policy","workshop"] }
    ]
  }
];

// ── GOOGLE SHEETS LIVE DATA LOADER ──
// Called automatically on page load if Google Sheets is configured in Admin Panel
window.loadGoogleSheetsData = async function() {
  const conf = JSON.parse(localStorage.getItem('gs_config') || '{}');
  if (!conf.connected || !conf.policies) return;

  try {
    // Load policy overrides from Google Sheet
    const res = await fetch(conf.policies);
    const text = await res.text();
    const rows = text.trim().split('\n').slice(1); // skip header
    rows.forEach(row => {
      const [county_id, policy_id, status, impl_pct, gap, doc_url] = row.split(',').map(s => s.trim().replace(/^"|"$/g,''));
      if (!county_id || !policy_id) return;
      const stored = JSON.parse(localStorage.getItem('admin_' + county_id) || '{}');
      if (!stored.policies) stored.policies = [];
      const existing = stored.policies.find(p => p.id === policy_id);
      const update = { id: policy_id, status, impl_pct: parseInt(impl_pct) || 0, gap: gap || '', doc_url: doc_url || '' };
      if (existing) Object.assign(existing, update);
      else stored.policies.push(update);
      localStorage.setItem('admin_' + county_id, JSON.stringify(stored));
    });

    // Load updates from Google Sheet if configured
    if (conf.updates) {
      const res2 = await fetch(conf.updates);
      const text2 = await res2.text();
      const rows2 = text2.trim().split('\n').slice(1);
      rows2.forEach(row => {
        const [county_id, date, title, body, source, tags] = row.split(',').map(s => s.trim().replace(/^"|"$/g,''));
        if (!county_id || !title) return;
        const key = 'updates_' + county_id;
        const stored = JSON.parse(localStorage.getItem(key) || '[]');
        const id = `gs-${county_id}-${date}-${title.slice(0,10).replace(/\s/g,'')}`;
        if (!stored.find(u => u.id === id)) {
          stored.unshift({ id, date, title, body, source, tags: tags ? tags.split(';') : [] });
          localStorage.setItem(key, JSON.stringify(stored));
        }
      });
    }
    console.log('Google Sheets data loaded successfully');
  } catch(e) {
    console.warn('Google Sheets load failed:', e.message);
  }
};

// Auto-load on page init
window.loadGoogleSheetsData();
