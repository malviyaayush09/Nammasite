(function () {
  const whatsappPrimary = "917230010700";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const categories = {
    salon: {
      label: "Salon & spa",
      line: "Services, timings, location, WhatsApp booking and Google Maps—composed for local customers.",
      nav: ["Services", "Gallery", "Book"],
      url: "bloomsalon.in",
      status: "Booking ready",
      heading: ["Services first.", "Atmosphere second."],
      body: "Treatment menu, timings, space photography, location, WhatsApp booking and a gallery that feels clean on small screens.",
      list: ["Services", "Timings", "Gallery", "WhatsApp booking"]
    },
    gym: {
      label: "Gym & fitness",
      line: "Memberships, trainers, class timings and a direct trial-booking path—built with energy and clarity.",
      nav: ["Plans", "Classes", "Trial"],
      url: "onegenfitness.in",
      status: "Trial path ready",
      heading: ["Energy first.", "Schedule close behind."],
      body: "Membership options, class schedule, trainer notes, real transformation photos when available, maps and a clear trial action.",
      list: ["Memberships", "Classes", "Trainers", "Book a trial"]
    },
    food: {
      label: "Restaurant",
      line: "Signature dishes, opening hours, directions and a fast reservation or WhatsApp order path.",
      nav: ["Menu", "Visit", "Reserve"],
      url: "savouryseashell.in",
      status: "Menu ready",
      heading: ["The menu leads.", "The visit follows."],
      body: "Signature dishes, food photography, opening hours, directions, reservation or order action—framed for quick mobile decisions.",
      list: ["Menu", "Dishes", "Opening hours", "Reserve"]
    },
    clinic: {
      label: "Clinic & wellness",
      line: "Treatments, practitioner details, consultation hours, location and a responsible appointment path.",
      nav: ["Care", "Doctors", "Visit"],
      url: "greenleafclinic.in",
      status: "Appointment ready",
      heading: ["Calm proof.", "Clear appointment."],
      body: "Treatments, doctor or practitioner profile, consultation hours, map and appointment action without exaggerated medical claims.",
      list: ["Treatments", "Practitioners", "Hours", "Appointment"]
    },
    retail: {
      label: "Retail & boutique",
      line: "Product categories, store photos, timings, location and simple WhatsApp enquiries.",
      nav: ["Products", "Visit", "Enquire"],
      url: "thelocaledit.in",
      status: "Enquiry ready",
      heading: ["Make products browsable.", "Make the store reachable."],
      body: "Product categories, selected items you provide, store details, WhatsApp enquiries and seasonal updates with room to breathe.",
      list: ["Categories", "Products", "Store visit", "Enquire"]
    },
    studio: {
      label: "Studio & services",
      line: "Portfolio work, process, service area, founder note and a confident enquiry route.",
      nav: ["Work", "Process", "Enquire"],
      url: "northsidestudio.in",
      status: "Portfolio ready",
      heading: ["Show the work.", "Then show the method."],
      body: "Portfolio pieces, process, service areas, founder note and before-and-after or project photography when it exists.",
      list: ["Portfolio", "Process", "Service area", "Enquire"]
    }
  };

  const projects = [
    {
      name: "OneGen Fitness",
      type: "Gym & fitness · RT Nagar",
      image: "assets/img/onegen-hero.jpg",
      alt: "OneGen Fitness website screenshot",
      url: "https://onegenfitness.in"
    },
    {
      name: "Savoury Sea Shell",
      type: "Coastal kitchen · BTM Layout",
      image: "assets/img/savoury-hero.jpg",
      alt: "Savoury Sea Shell website screenshot",
      url: "https://demo.nammasite.co.in/savoury-sea-shell/"
    },
    {
      name: "Niramaya Yoga Kuteeram",
      type: "Yoga · Basavanagudi",
      image: "assets/img/niramaya-hero.jpg",
      alt: "Niramaya Yoga Kuteeram website screenshot",
      url: "https://demo.nammasite.co.in/niramaya-yoga/"
    },
    {
      name: "Solar Electronics",
      type: "Electronics · SP Road",
      image: "assets/img/solar-hero.jpg",
      alt: "Solar Electronics website screenshot",
      url: "https://demo.nammasite.co.in/solar-electronics/"
    }
  ];

  const intents = {
    first: {
      label: "Focused foundation",
      plan: "Starter",
      heading: "Put trust and contact details in one clear place.",
      body: "Lead with services, real photos, timings, location, WhatsApp and Google Maps.",
      list: ["Services", "Real photos", "WhatsApp", "Maps"]
    },
    premium: {
      label: "Expanded presence",
      plan: "Pro",
      heading: "Give the business enough room to feel established.",
      body: "Separate Services, About, Gallery or Portfolio, and Contact so customers can inspect the business before they enquire.",
      list: ["Multiple pages", "Gallery", "Contact form", "Basic SEO"]
    },
    local: {
      label: "Action-first direction",
      plan: "Starter or Pro",
      heading: "Make the next local action impossible to miss.",
      body: "Organise services, timings, location, WhatsApp and Maps around the moment a nearby customer decides to contact or visit.",
      list: ["Clear services", "Timings", "WhatsApp", "Directions"]
    }
  };

  const tools = {
    mobile: {
      label: "Selected ingredient · All plans",
      title: "Mobile-first layout",
      body: "The phone composition is designed deliberately so headings, images and contact actions remain easy to use."
    },
    whatsapp: {
      label: "Selected ingredient · All plans",
      title: "WhatsApp action",
      body: "A direct WhatsApp path sits where a visitor naturally decides to ask, book or enquire."
    },
    maps: {
      label: "Selected ingredient · All plans",
      title: "Google Maps",
      body: "Location and directions stay close to contact details so nearby customers can confirm and visit quickly."
    },
    photos: {
      label: "Selected ingredient · All plans",
      title: "Real business photography",
      body: "Real spaces, products, work and people carry the proof whenever authentic photography is available."
    },
    domain: {
      label: "Selected ingredient · All plans",
      title: "Domain and hosting",
      body: "The current public offer includes a free .in domain and hosting, keeping the launch path simple."
    },
    seo: {
      label: "Selected ingredient · Pro",
      title: "Basic SEO",
      body: "Pro includes basic search setup so page titles and service language are structured for clearer discovery."
    },
    gallery: {
      label: "Selected ingredient · Pro",
      title: "Gallery or portfolio",
      body: "Pro adds dedicated room for real project, product, food, treatment or space photography."
    },
    form: {
      label: "Selected ingredient · Pro",
      title: "Contact form",
      body: "Pro includes a contact form for visitors who prefer a structured enquiry instead of WhatsApp."
    }
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function cleanName(value) {
    return value.trim().replace(/\s+/g, " ");
  }

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22) || "yourbusiness";
  }

  function openWhatsapp(name, source) {
    const cleaned = cleanName(name);
    const message = cleaned
      ? `Hi! My business is "${cleaned}". I'd like to see a free sample website.`
      : "Hi! I'd like to see a free sample website for my business.";
    const sourceText = source ? ` Source: ${source}.` : "";
    window.open(`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent(message + sourceText)}`, "_blank", "noopener");
  }

  function requireBusinessName(input, error) {
    const value = cleanName(input.value);
    if (value) {
      input.removeAttribute("aria-invalid");
      error.textContent = "";
      return value;
    }
    input.setAttribute("aria-invalid", "true");
    error.textContent = "Enter your business name to start the WhatsApp sample request.";
    input.focus();
    return "";
  }

  function setTheme(element, key) {
    Object.keys(categories).forEach((name) => element.classList.remove(`theme-${name}`));
    element.classList.add(`theme-${key}`);
  }

  function animateRefresh(element) {
    if (!element || reducedMotion.matches) return;
    element.classList.remove("is-refreshing");
    void element.offsetWidth;
    element.classList.add("is-refreshing");
    window.setTimeout(() => element.classList.remove("is-refreshing"), 760);
  }

  function initTheme() {
    const root = document.documentElement;
    const toggle = document.querySelector("[data-theme-toggle]");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!toggle) return;

    function apply(theme, persist, animate) {
      if (animate && !reducedMotion.matches) {
        root.classList.add("is-theme-switching");
        window.setTimeout(() => root.classList.remove("is-theme-switching"), 520);
      }
      if (theme === "dark") root.dataset.theme = "dark";
      else delete root.dataset.theme;
      const dark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      const copy = toggle.querySelector(".theme-toggle-copy");
      if (copy) copy.textContent = dark ? "Light mode" : "Dark mode";
      if (meta) meta.setAttribute("content", dark ? "#111716" : "#f2f0ea");
      if (persist) {
        try { localStorage.setItem("nammasite-theme", theme); } catch (error) { /* Storage is optional. */ }
      }
    }

    apply(root.dataset.theme === "dark" ? "dark" : "light", false, false);
    toggle.addEventListener("click", () => {
      apply(root.dataset.theme === "dark" ? "light" : "dark", true, true);
    });
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = byId("site-nav");
    if (!toggle || !nav) return;

    function closeNav() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }

    toggle.addEventListener("click", () => {
      const next = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(next));
      nav.classList.toggle("is-open", next);
      document.body.classList.toggle("nav-open", next);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  function initScenes() {
    const scenes = Array.from(document.querySelectorAll("[data-scene]"));
    const rail = document.querySelector("[data-chapter-rail]");
    const links = Array.from(document.querySelectorAll("[data-chapter]"));
    if (!scenes.length) return;

    const visible = new Map();

    function activate(scene) {
      const index = scenes.indexOf(scene);
      scenes.forEach((item) => item.classList.toggle("is-current", item === scene));
      links.forEach((link) => {
        const active = link.dataset.chapter === scene.id;
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
      if (rail) rail.style.setProperty("--progress", String(index / Math.max(1, scenes.length - 1)));
    }

    activate(scenes[0]);
    if (!reducedMotion.matches) document.documentElement.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
        else visible.delete(entry.target);
      });
      let selected = null;
      let ratio = -1;
      visible.forEach((value, scene) => {
        if (value > ratio) {
          selected = scene;
          ratio = value;
        }
      });
      if (selected) activate(selected);
    }, { threshold: [0.18, 0.35, 0.55, 0.72] });

    scenes.forEach((scene) => observer.observe(scene));
  }

  function initProofBuilder() {
    const form = byId("proof-builder");
    const input = byId("business-name");
    const error = byId("business-error");
    const preview = document.querySelector("[data-preview-surface]");
    const previewName = byId("preview-name");
    const previewUrl = byId("preview-url");
    const previewLabel = byId("preview-label");
    const previewLine = byId("preview-line");
    const actionRow = document.querySelector(".preview-actions");
    const options = Array.from(document.querySelectorAll(".trade-option"));
    if (!form || !input || !error || !preview) return;

    let active = "salon";
    let inputTimer = 0;

    function render(animate) {
      const category = categories[active];
      const name = cleanName(input.value) || "Bloom Salon";
      previewName.textContent = name;
      previewUrl.textContent = `${slugify(name)}.in`;
      previewLabel.textContent = category.label;
      previewLine.textContent = category.line;
      actionRow.replaceChildren(...category.nav.map((label) => {
        const span = document.createElement("span");
        span.textContent = label;
        return span;
      }));
      setTheme(preview, active);
      if (animate) animateRefresh(preview);
    }

    input.addEventListener("input", () => {
      render(false);
      window.clearTimeout(inputTimer);
      inputTimer = window.setTimeout(() => animateRefresh(preview), 220);
      if (input.value.trim()) {
        input.removeAttribute("aria-invalid");
        error.textContent = "";
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        active = option.dataset.category || "salon";
        options.forEach((item) => {
          const selected = item === option;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });
        render(true);
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = requireBusinessName(input, error);
      if (name) openWhatsapp(name, "hero proof builder");
    });
  }

  function initIntentRouter() {
    const consoleElement = document.querySelector("[data-intent-console]");
    const buttons = Array.from(document.querySelectorAll("[data-intent]"));
    const label = byId("intent-label");
    const plan = byId("intent-plan");
    const heading = byId("intent-heading");
    const body = byId("intent-body");
    const list = byId("intent-list");
    if (!consoleElement || !buttons.length) return;

    function show(key, selected) {
      const intent = intents[key];
      if (!intent) return;
      label.textContent = intent.label;
      plan.textContent = intent.plan;
      heading.textContent = intent.heading;
      body.textContent = intent.body;
      list.replaceChildren(...intent.list.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      }));
      buttons.forEach((button) => {
        const active = button === selected;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      animateRefresh(consoleElement);
    }

    buttons.forEach((button) => button.addEventListener("click", () => show(button.dataset.intent || "first", button)));
  }

  function initToolkit() {
    const stage = document.querySelector("[data-toolkit-stage]");
    const buttons = Array.from(document.querySelectorAll("[data-tool]"));
    const label = byId("tool-label");
    const title = byId("tool-title");
    const body = byId("tool-body");
    const core = document.querySelector(".tool-core");
    if (!stage || !buttons.length || !core) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const tool = tools[button.dataset.tool || "mobile"];
        label.textContent = tool.label;
        title.textContent = tool.title;
        body.textContent = tool.body;
        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        if (!reducedMotion.matches) {
          core.classList.remove("is-switching");
          void core.offsetWidth;
          core.classList.add("is-switching");
          window.setTimeout(() => core.classList.remove("is-switching"), 520);
        }
      });
    });
  }

  function initProjector() {
    const projector = document.querySelector("[data-projector]");
    const image = byId("project-image");
    const count = byId("project-count");
    const type = byId("project-type");
    const name = byId("project-name");
    const link = byId("project-link");
    const selectors = Array.from(document.querySelectorAll("[data-project]"));
    const previous = document.querySelector("[data-project-prev]");
    const next = document.querySelector("[data-project-next]");
    if (!projector || !image || !previous || !next) return;

    let active = 0;
    let locked = false;

    function update(index, direction) {
      const normalized = (index + projects.length) % projects.length;
      if (locked || normalized === active) return;
      const render = () => {
        const project = projects[normalized];
        active = normalized;
        image.src = project.image;
        image.alt = project.alt;
        count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
        type.textContent = project.type;
        name.textContent = project.name;
        link.href = project.url;
        selectors.forEach((selector, selectorIndex) => {
          const selected = selectorIndex === active;
          selector.classList.toggle("is-active", selected);
          selector.setAttribute("aria-pressed", String(selected));
        });
      };

      if (reducedMotion.matches) {
        render();
        return;
      }

      locked = true;
      const className = direction < 0 ? "is-switching-back" : "is-switching-forward";
      projector.classList.add(className);
      window.setTimeout(render, 250);
      window.setTimeout(() => {
        projector.classList.remove(className);
        locked = false;
      }, 620);
    }

    previous.addEventListener("click", () => update(active - 1, -1));
    next.addEventListener("click", () => update(active + 1, 1));
    selectors.forEach((selector, index) => selector.addEventListener("click", () => update(index, index < active ? -1 : 1)));
  }

  function initFaqConsole() {
    const buttons = Array.from(document.querySelectorAll("[data-faq-answer]"));
    const answer = byId("faq-answer");
    if (!buttons.length || !answer) return;
    const label = answer.querySelector("span");
    const copy = answer.querySelector("p");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        label.textContent = `Answer ${String(index + 1).padStart(2, "0")}`;
        copy.textContent = button.dataset.faqAnswer || "";
      });
    });
  }

  function initForms() {
    [
      { form: byId("cta-form"), input: byId("cta-business"), error: byId("cta-error"), source: "final CTA" },
      { form: byId("dialog-form"), input: byId("dialog-business"), error: byId("dialog-error"), source: "quick answers dialog" }
    ].forEach((entry) => {
      if (!entry.form || !entry.input || !entry.error) return;
      entry.form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = requireBusinessName(entry.input, entry.error);
        if (name) openWhatsapp(name, entry.source);
      });
      entry.input.addEventListener("input", () => {
        if (entry.input.value.trim()) {
          entry.input.removeAttribute("aria-invalid");
          entry.error.textContent = "";
        }
      });
    });
  }

  function initDialog() {
    const dialog = byId("quick-dialog");
    const launchers = Array.from(document.querySelectorAll(".quick-launcher, [data-open-questions]"));
    const close = document.querySelector(".dialog-close");
    const answer = byId("quick-answer");
    if (!dialog || !launchers.length || !close || !answer) return;

    let returnFocus = launchers[0];
    function openDialog(launcher) {
      returnFocus = launcher;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      document.body.classList.add("dialog-open");
    }

    launchers.forEach((launcher) => launcher.addEventListener("click", () => openDialog(launcher)));
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      returnFocus.focus();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        answer.textContent = button.dataset.answer || "";
      });
    });
  }

  initTheme();
  initNav();
  initScenes();
  initProofBuilder();
  initIntentRouter();
  initToolkit();
  initProjector();
  initFaqConsole();
  initForms();
  initDialog();
})();
