/* =====================================================================
       PROFILE: everything on the page comes from this object.
       Edit the values here; the layout updates itself.
       ===================================================================== */
    const PROFILE = {
      name: "Nishant Chauhan",
      initials: "NC",
      role: "Entry-Level Data Analyst",
      location: "Noida, Uttar Pradesh, India",
      availability: "Open to entry-level roles",
      headline: "I turn raw data into answers people can act on.",
      bio: "BCA graduate (2026) with hands-on experience in SQL, Python, Excel and Power BI through academic projects. I clean data, write SQL queries and build dashboards that turn raw data into clear insights. I am looking for an entry-level Data Analyst role.",
      email: "rajputnishant342@gmail.com",
      contactNote: "I am looking for an entry-level data analyst role. If you have an opening, or want to talk about any of my projects, send me an email or a message on LinkedIn.",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/nishant-chauhan-747356388" }
      ],

      impact: [
        { value: "BCA 2026", label: "Mahatma Jyotiba Phule Rohilkhand University" },
        { value: "3", label: "projects across SQL, Excel dashboards and a GenAI app" },
        { value: "6", label: "MySQL topics, from joins and CTEs to window functions and stored procedures" },
        { value: "Jul 2026", label: "Deloitte Data Analytics Job Simulation on Forage" }
      ],

      timeline: {
        label: "Learning path",
        points: [
          { t: 2021, label: "2021", text: "<b>Class X</b>, CBSE Board" },
          { t: 2023, label: "2023", text: "<b>Class XII</b>, CBSE Board" },
          { t: 2026, label: "2026", text: "<b>BCA</b>, Mahatma Jyotiba Phule Rohilkhand University" },
          { t: 2026.5, label: "Jul 2026", text: "<b>Deloitte Data Analytics Job Simulation</b> on Forage" }
        ]
      },

      projects: [
        {
          cat: "Excel dashboard", title: "Coca-Cola sales analysis",
          metric: "December", metricLabel: "top sales month, with New York the top state by units sold",
          summary: "An interactive Excel dashboard that shows when and where sales peak.",
          tools: ["Microsoft Excel", "PivotTables", "PivotCharts", "Slicers"],
          details: [
            ["What I built", "An interactive dashboard with PivotTables, PivotCharts, slicers and a timeline filter."],
            ["What it found", "December was the top sales month, and New York was the top state by units sold."]
          ]
        },
        {
          cat: "SQL", title: "Student database analysis",
          metric: "MySQL", metricLabel: "relational design with grouped and conditional queries",
          summary: "A relational student database, designed from scratch and queried to summarise student data.",
          tools: ["MySQL", "SQL"],
          details: [
            ["Design", "A relational student database with primary keys, auto-increment fields and structured tables."],
            ["Analysis", "Queries using GROUP BY, aggregate functions and CASE statements to summarise the student data."]
          ]
        },
        {
          cat: "GenAI", title: "AI Health Assistant",
          metric: "RAG", metricLabel: "personalised diet plans from a nutrition knowledge base",
          summary: "A Streamlit app that calculates health numbers and generates diet plans with a retrieval pipeline.",
          tools: ["Python", "Streamlit", "LangChain", "FAISS"],
          details: [
            ["What it calculates", "BMI, BMR, TDEE and daily calorie targets, in a Streamlit app."],
            ["How it generates plans", "A RAG pipeline built with LangChain and FAISS retrieves from a nutrition knowledge base to produce personalised diet plans."]
          ]
        }
      ],

      education: [
        { title: "Bachelor of Computer Applications (BCA)", org: "Mahatma Jyotiba Phule Rohilkhand University", dates: "2026", note: "" },
        { title: "Class XII", org: "CBSE Board", dates: "2023", note: "" },
        { title: "Class X", org: "CBSE Board", dates: "2021", note: "" }
      ],
      certs: [
        { title: "Data Analytics Job Simulation", org: "Deloitte, on Forage", dates: "July 2026", note: "Virtual job simulation in data analytics." }
      ],

      skillGroups: [
        { name: "Languages", items: ["Python", "SQL", "Java (basic)", "HTML", "CSS", "JavaScript"] },
        { name: "Database (MySQL)", items: ["Joins", "Subqueries", "CTEs", "Window functions", "Views", "Stored procedures"] },
        { name: "Data analysis", items: ["Pandas", "NumPy", "Matplotlib", "Data cleaning", "EDA", "Statistical analysis"] },
        { name: "BI and Excel", items: ["Power BI", "PivotTables", "Slicers", "XLOOKUP", "Dashboards"] },
        { name: "GenAI", items: ["LangChain", "FAISS", "RAG pipelines", "HuggingFace", "LLM API integration"] },
        { name: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] }
      ]
    };

    /* =====================================================================
       Rendering
       ===================================================================== */
    const P = PROFILE;
    const $ = (s, r = document) => r.querySelector(s);
    const SECTIONS = [["top", "Overview"], ["work", "Projects"], ["skills", "Skills"], ["qualifications", "Qualifications"], ["contact", "Contact"]];
    const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* --- static bits --- */
    $("#badge").textContent = P.initials;
    $("#brandName").textContent = P.name;
    $("#brandRole").textContent = P.role;
    $("#status").textContent = P.availability;
    $("#heroEyebrow").textContent = `${P.role} · ${P.location}`;
    $("#footPlace").textContent = P.location;
    const [first, ...rest] = P.name.split(" ");
    $("#heroName").innerHTML = `${first}<br>${rest.join(" ")}`;
    $("#heroLede").textContent = P.headline;
    $("#heroBio").textContent = P.bio;
    $("#contactNote").textContent = P.contactNote;
    $("#mail").textContent = P.email;
    $("#mailLink").href = "mailto:" + P.email;
    $("#foot").textContent = `© ${new Date().getFullYear()} ${P.name}`;
    document.querySelectorAll("#workEyebrow").forEach(e => e.textContent = `Work · ${P.projects.length} projects`);

    $("#nav").innerHTML = SECTIONS.map(([id, label]) => `<li><a href="#${id}" data-jump="${id}">${label}</a></li>`).join("");
    const linkHTML = P.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
    $("#railLinks").innerHTML = linkHTML;
    $("#contactLinks").innerHTML = linkHTML;

    $("#impact").innerHTML = P.impact.map(i => `<li><strong>${i.value}</strong><span>${i.label}</span></li>`).join("");
    $("#milestones").innerHTML = P.timeline.points.map((m, i) => `<li><span class="num">${i + 1}</span><span>${m.label} · ${m.text}</span></li>`).join("");

    /* --- projects --- */
    const cats = ["All", ...new Set(P.projects.map(p => p.cat))];
    let activeCat = "All";
    function renderProjects() {
      const list = P.projects.filter(p => activeCat === "All" || p.cat === activeCat);
      $("#projects").innerHTML = list.map(p => `
    <details class="proj">
      <summary>
        <div class="proj-metric"><span class="proj-year">${p.cat}</span><strong>${p.metric}</strong><span class="l">${p.metricLabel}</span></div>
        <div class="proj-main"><h3>${p.title}</h3><p>${p.summary}</p><ul class="tags">${p.tools.map(t => `<li>${t}</li>`).join("")}</ul></div>
        <span class="proj-toggle" aria-hidden="true"></span>
      </summary>
      <div class="proj-body">${p.details.map(d => `<div><h4>${d[0]}</h4><p>${d[1]}</p></div>`).join("")}</div>
    </details>`).join("");
      if (P.projects.length > 4) {
        $("#filters").innerHTML = cats.map(c => `<button class="chip-btn" type="button" data-cat="${c}" aria-pressed="${c === activeCat}">${c}</button>`).join("") +
          `<span class="count">Showing ${list.length} of ${P.projects.length}</span>`;
      } else { $("#filters").hidden = true; }
    }
    $("#filters").addEventListener("click", e => {
      const b = e.target.closest("[data-cat]"); if (!b) return;
      activeCat = b.dataset.cat; renderProjects();
    });
    renderProjects();

    /* --- qualifications and skills --- */
    const itemHTML = i => `<div class="item"><span class="when">${i.dates}</span><h3>${i.title}</h3><p>${i.org}</p>${i.note ? `<p>${i.note}</p>` : ""}</div>`;
    $("#edu").innerHTML = P.education.map(itemHTML).join("");
    $("#certs").innerHTML = P.certs.map(itemHTML).join("");
    $("#skillList").innerHTML = P.skillGroups.map(g => `<div class="skill-cat"><h4>${g.name}</h4><ul class="chips">${g.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("");

    /* =====================================================================
       Timeline (hand-drawn SVG, coloured only through theme tokens)
       ===================================================================== */
    function mount(el, draw) {
      let lastW = -1;
      const run = () => { const w = Math.round(el.clientWidth); if (w === lastW || w < 10) return; lastW = w; draw(el, w); };
      run();
      if ("ResizeObserver" in window) new ResizeObserver(run).observe(el);
      else addEventListener("resize", run);
    }
    function drawTimeline(el, W) {
      const H = 84, m = { l: 20, r: 20 }, y0 = 2021, y1 = 2026.85, base = 34;
      const pts = P.timeline.points;
      const X = t => m.l + (t - y0) / (y1 - y0) * (W - m.l - m.r);
      let s = `<line class="axis" x1="${X(y0)}" x2="${X(y1)}" y1="${base}" y2="${base}"/>`;
      for (let y = 2021; y <= 2026; y++) {
        s += `<line class="grid-l" x1="${X(y)}" x2="${X(y)}" y1="${base - 7}" y2="${base + 7}"/><text class="ax" x="${X(y)}" y="${base + 30}" text-anchor="middle">${y}</text>`;
      }
      s += `<line class="ln-c" x1="${X(pts[0].t)}" x2="${X(pts[pts.length - 1].t)}" y1="${base}" y2="${base}"/>`;
      pts.forEach((p, i) => {
        s += `<circle class="mk" cx="${X(p.t)}" cy="${base}" r="11"/><text class="mk-t" x="${X(p.t)}" y="${base + 4}" text-anchor="middle">${i + 1}</text>`;
      });
      el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">${s}</svg>`;
    }
    $("#careerTitle").textContent = P.timeline.label;
    $("#careerChart").setAttribute("aria-label", `Timeline from ${pts0().label} to ${ptsN().label}: ${P.timeline.points.map(p => p.label).join(", ")}.`);
    function pts0() { return P.timeline.points[0]; }
    function ptsN() { return P.timeline.points[P.timeline.points.length - 1]; }
    mount($("#careerChart"), drawTimeline);

    /* =====================================================================
       Behaviour: smooth jumps, active nav, copy, theme
       ===================================================================== */
    document.addEventListener("click", e => {
      const a = e.target.closest("[data-jump]"); if (!a) return;
      e.preventDefault();
      const el = document.getElementById(a.dataset.jump);
      if (el) el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    });
    const navLinks = [...document.querySelectorAll("#nav a")];
    function setActive(id) { navLinks.forEach(a => a.setAttribute("aria-current", String(a.dataset.jump === id))); }
    setActive("top");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) setActive(en.target.id); }), { rootMargin: "-35% 0px -60% 0px" });
      SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    }

    $("#copyBtn").addEventListener("click", async () => {
      const b = $("#copyBtn");
      try { await navigator.clipboard.writeText(P.email); b.textContent = "Copied"; }
      catch (err) {
        const r = document.createRange(); r.selectNodeContents($("#mail"));
        const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); b.textContent = "Press Ctrl+C to copy";
      }
      setTimeout(() => { b.textContent = "Copy address"; }, 2200);
    });

    (function theme() {
      const root = document.documentElement;
      try { const s = localStorage.getItem("portfolio-theme"); if (s === "dark" || s === "light") root.setAttribute("data-theme", s); } catch (e) { }
      const eff = () => root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      $("#themeBtn").addEventListener("click", () => {
        const next = eff() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("portfolio-theme", next); } catch (e) { }
      });
    })();
