const state = {
  role: "admin",
  view: "dashboard",
  selectedWo: "WO-221",
};

const copy = {
  dashboard: {
    title: "Dashboard fábrica",
    subtitle: "Datos DEMO · De la orden del distribuidor a la instalación — una sola fuente de verdad.",
  },
  customers: {
    title: "Clientes finales",
    subtitle: "Residencias y proyectos · datos de demostración para la presentación a Camilo.",
  },
  distributors: {
    title: "Distribuidores / diseñadores",
    subtitle: "Cuentas B2B con portal propio, saldo y órdenes abiertas (DEMO).",
  },
  portal: {
    title: "Portal distribuidores",
    subtitle: "Cuentas B2B: subir órdenes, ver estatus y reducir llamadas a oficina.",
  },
  orders: {
    title: "Órdenes de venta",
    subtitle: "Estimados y Sales Orders de ejemplo · listos para producción y QuickBooks.",
  },
  workorders: {
    title: "Work Orders",
    subtitle: "Deducciones de corte calculadas al instante para la planta.",
  },
  labels: {
    title: "Labels de producción",
    subtitle: "Etiquetas con branding CMC, medidas de corte y PO del distribuidor.",
  },
  schedule: {
    title: "Agenda de instalaciones",
    subtitle: "Técnicos DEMO asignados · Palm Beach, Broward y Miami-Dade.",
  },
  quickbooks: {
    title: "QuickBooks Online",
    subtitle: "Integración fácil: CMC Ops opera; QuickBooks sigue siendo tu contabilidad.",
  },
  reports: {
    title: "Reportes",
    subtitle: "KPIs de demostración · seguimiento comercial y de planta.",
  },
};

const navByRole = {
  admin: [
    "dashboard",
    "customers",
    "distributors",
    "portal",
    "orders",
    "workorders",
    "labels",
    "schedule",
    "quickbooks",
    "reports",
  ],
  distributor: ["portal", "orders", "schedule"],
  production: ["workorders", "labels", "orders"],
};

const navLabels = {
  dashboard: "Dashboard",
  customers: "Clientes",
  distributors: "Distribuidores",
  portal: "Portal B2B",
  orders: "Órdenes",
  workorders: "Work Orders",
  labels: "Labels",
  schedule: "Instalaciones",
  quickbooks: "QuickBooks",
  reports: "Reportes",
};

const roleNames = {
  admin: "CMC Admin / Oficina",
  distributor: "Distribuidor · Casa Bella",
  production: "Producción · Planta BR",
};

/** ——— DEMO DATA ——— */
const demoCustomers = [
  { id: "C-2041", name: "Jennifer Walsh", city: "Boca Raton", type: "Residencial", phone: "(561) 555-0142", jobs: 2, status: "Activo" },
  { id: "C-2042", name: "Ocean Club Condo HOA", city: "Delray Beach", type: "Proyecto", phone: "(561) 555-0198", jobs: 1, status: "En curso" },
  { id: "C-2043", name: "Marcus & Ana Ruiz", city: "Weston", type: "Residencial", phone: "(954) 555-0110", jobs: 3, status: "Activo" },
  { id: "C-2044", name: "BrightPath Offices", city: "Fort Lauderdale", type: "Comercial", phone: "(954) 555-0177", jobs: 1, status: "Cotizando" },
  { id: "C-2045", name: "The Palm Residence", city: "Palm Beach Gardens", type: "Residencial", phone: "(561) 555-0166", jobs: 4, status: "Activo" },
  { id: "C-2046", name: "Sunrise Medical Suite", city: "Sunrise", type: "Comercial", phone: "(954) 555-0133", jobs: 2, status: "Activo" },
];

const demoDistributors = [
  { id: "D-101", name: "Casa Bella Interiors", contact: "Laura Méndez", city: "Boca Raton", openOrders: 3, balance: "$4,280", portal: "Activo" },
  { id: "D-102", name: "Ocean View Design", contact: "Chris Patel", city: "Delray Beach", openOrders: 1, balance: "$0", portal: "Activo" },
  { id: "D-103", name: "Palm Shade Co.", contact: "Sofía Rivas", city: "West Palm Beach", openOrders: 2, balance: "$1,950", portal: "Activo" },
  { id: "D-104", name: "Luxe Window Studio", contact: "Daniel Torres", city: "Miami", openOrders: 0, balance: "$620", portal: "Invitado" },
  { id: "D-105", name: "Coastal Drapery", contact: "Helen Brooks", city: "Fort Lauderdale", openOrders: 1, balance: "$1,120", portal: "Activo" },
];

const sampleOrders = [
  { id: "SO-1184", origin: "Portal", customer: "Casa Bella Interiors", endClient: "Jennifer Walsh", product: "Zebra Blinds", lines: 3, total: "$2,840", status: "production", qb: "Pendiente", po: "CB-1048" },
  { id: "SO-1183", origin: "Oficina", customer: "Ocean View Design", endClient: "Ocean Club Condo", product: "Roller Translucent", lines: 2, total: "$1,120", status: "ready", qb: "Synced", po: "OV-331" },
  { id: "SO-1182", origin: "Portal", customer: "Palm Shade Co.", endClient: "Marcus & Ana Ruiz", product: "Honeycomb", lines: 5, total: "$4,560", status: "received", qb: "Pendiente", po: "PS-778" },
  { id: "SO-1181", origin: "Portal", customer: "Coastal Drapery", endClient: "BrightPath Offices", product: "Motorized Blackout", lines: 6, total: "$6,900", status: "installed", qb: "Synced", po: "CD-220" },
  { id: "SO-1180", origin: "Oficina", customer: "Casa Bella Interiors", endClient: "The Palm Residence", product: "Plantation Shutters", lines: 4, total: "$5,400", status: "ready", qb: "Synced", po: "CB-1039" },
  { id: "EST-902", origin: "Estimado", customer: "Luxe Window Studio", endClient: "Private residence · Coral Gables", product: "Zebra + Roller", lines: 4, total: "$3,200", status: "draft", qb: "—", po: "—" },
  { id: "EST-901", origin: "Estimado", customer: "Palm Shade Co.", endClient: "Sunrise Medical Suite", product: "Vertical Blinds", lines: 8, total: "$2,150", status: "draft", qb: "—", po: "—" },
];

const sampleWorkOrders = [
  { id: "WO-221", so: "SO-1184", product: "Zebra Blinds", room: "Living · W2", width: 72.5, height: 84, dedW: 0.25, dedH: 0.5, mount: "Inside", control: "Right", status: "production", distributor: "Casa Bella Interiors", po: "CB-1048" },
  { id: "WO-220", so: "SO-1183", product: "Roller Translucent", room: "Lobby · E1", width: 48, height: 60, dedW: 0, dedH: 0.25, mount: "Outside", control: "Left", status: "ready", distributor: "Ocean View Design", po: "OV-331" },
  { id: "WO-219", so: "SO-1182", product: "Honeycomb", room: "Master · N3", width: 36.125, height: 72, dedW: 0.125, dedH: 0.5, mount: "Inside", control: "Right", status: "production", distributor: "Palm Shade Co.", po: "PS-778" },
  { id: "WO-218", so: "SO-1180", product: "Plantation Shutters", room: "Dining · W1", width: 60, height: 80, dedW: 0, dedH: 0, mount: "Inside", control: "N/A", status: "ready", distributor: "Casa Bella Interiors", po: "CB-1039" },
  { id: "WO-217", so: "SO-1181", product: "Motorized Blackout", room: "Suite A", width: 96, height: 90, dedW: 0.25, dedH: 0.5, mount: "Inside", control: "Motor", status: "installed", distributor: "Coastal Drapery", po: "CD-220" },
];

const scheduleEvents = [
  { day: 0, text: "WO-220 pickup · Sunrise", tech: "Carlos" },
  { day: 1, text: "Medición · Walsh / Boca", tech: "Luis" },
  { day: 2, text: "SO-1183 install · Delray", tech: "Carlos" },
  { day: 3, text: "WO-221 lista · Casa Bella", tech: "Planta" },
  { day: 4, text: "Instalación · Palm Gardens", tech: "Luis" },
  { day: 5, text: "By appointment", tech: "—" },
];

const technicians = [
  { name: "Carlos Mendoza", zone: "Palm Beach", jobsToday: 2, status: "En ruta" },
  { name: "Luis Ortega", zone: "Broward", jobsToday: 1, status: "Disponible" },
  { name: "Ana Pérez", zone: "Miami-Dade", jobsToday: 0, status: "Off hoy" },
];

function $(sel) {
  return document.querySelector(sel);
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2800);
}

function labelStatus(s) {
  return (
    {
      received: "Recibida",
      production: "Producción",
      ready: "Lista",
      installed: "Instalada",
      draft: "Estimado",
      synced: "Synced",
      Activo: "Activo",
      "En curso": "En curso",
      Cotizando: "Cotizando",
      Invitado: "Invitado",
    }[s] || s
  );
}

function cutSize(wo) {
  const w = (wo.width - wo.dedW).toFixed(3);
  const h = (wo.height - wo.dedH).toFixed(3);
  return { w, h, label: `${w}×${h}` };
}

function renderDashboardStats() {
  const open = sampleOrders.filter((o) => !["installed", "draft"].includes(o.status)).length;
  const prod = sampleWorkOrders.filter((w) => w.status === "production").length;
  const ready = sampleWorkOrders.filter((w) => w.status === "ready").length;
  const installs = scheduleEvents.filter((e) => e.text.toLowerCase().includes("install") || e.day === 2).length;
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("statOpen", open);
  set("statProd", prod);
  set("statReady", ready);
  set("statInstall", Math.max(installs, 3));
}

function renderCustomers() {
  const tbody = $("#customersTable");
  if (!tbody) return;
  tbody.innerHTML = demoCustomers
    .map(
      (c) => `<tr>
        <td>${c.id}</td>
        <td><strong>${c.name}</strong></td>
        <td>${c.city}</td>
        <td>${c.type}</td>
        <td>${c.phone}</td>
        <td>${c.jobs}</td>
        <td><span class="status ${c.status === "Cotizando" ? "draft" : "ready"}">${c.status}</span></td>
      </tr>`
    )
    .join("");
}

function renderDistributors() {
  const tbody = $("#distributorsTable");
  if (!tbody) return;
  tbody.innerHTML = demoDistributors
    .map(
      (d) => `<tr class="clickable" data-go="portal">
        <td>${d.id}</td>
        <td><strong>${d.name}</strong><div class="stat-note">${d.contact}</div></td>
        <td>${d.city}</td>
        <td>${d.openOrders}</td>
        <td>${d.balance}</td>
        <td><span class="status ${d.portal === "Activo" ? "synced" : "draft"}">${d.portal}</span></td>
      </tr>`
    )
    .join("");
}

function renderOrders() {
  const live = $("#liveOrders");
  const table = $("#ordersTable");
  if (live) {
    live.innerHTML = sampleOrders
      .filter((o) => o.status !== "draft")
      .slice(0, 5)
      .map(
        (o) => `<tr class="clickable" data-go="workorders">
          <td>${o.id}</td>
          <td>${o.customer}<div class="stat-note">${o.endClient}</div></td>
          <td>${o.product}</td>
          <td><span class="status ${o.status}">${labelStatus(o.status)}</span></td>
          <td>${o.qb === "Synced" ? '<span class="status synced">Synced</span>' : o.qb}</td>
        </tr>`
      )
      .join("");
  }
  if (table) {
    table.innerHTML = sampleOrders
      .map(
        (o) => `<tr>
          <td>${o.id}</td>
          <td>${o.origin}</td>
          <td>${o.customer}<div class="stat-note">${o.endClient}</div></td>
          <td>${o.product}</td>
          <td>${o.lines}</td>
          <td>${o.total}</td>
          <td><span class="status ${o.status}">${labelStatus(o.status)}</span></td>
          <td>${o.qb === "Synced" ? '<span class="status synced">Synced</span>' : o.qb}</td>
          <td><button class="btn btn-secondary" data-go="${o.status === "draft" ? "orders" : "workorders"}" type="button">${o.status === "draft" ? "Convertir" : "Abrir WO"}</button></td>
        </tr>`
      )
      .join("");
  }
}

function renderWorkOrders() {
  const tbody = $("#woTable");
  if (tbody) {
    tbody.innerHTML = sampleWorkOrders
      .map((wo) => {
        const cut = cutSize(wo);
        return `<tr class="clickable" data-wo="${wo.id}">
          <td>${wo.id}</td>
          <td>${wo.so}</td>
          <td>${wo.product}<div class="stat-note">${wo.room}</div></td>
          <td>${cut.label}</td>
          <td><span class="status ${wo.status}">${labelStatus(wo.status)}</span></td>
        </tr>`;
      })
      .join("");
  }
  selectWorkOrder(state.selectedWo);
}

function selectWorkOrder(id) {
  const wo = sampleWorkOrders.find((w) => w.id === id) || sampleWorkOrders[0];
  state.selectedWo = wo.id;
  const cut = cutSize(wo);
  const set = (sid, val) => {
    const el = document.getElementById(sid);
    if (el) el.textContent = val;
  };
  set("woTitle", `Work Order ${wo.id}`);
  set("woMeta", `Generado desde ${wo.so} · ${wo.product} · ${wo.room}`);
  set("woMeasure", `${wo.width.toFixed(3)} × ${wo.height.toFixed(3)} in`);
  set("woRule", `${wo.product.split(" ")[0]} · ${wo.mount.toLowerCase()} · −${wo.dedW.toFixed(3)} / −${wo.dedH.toFixed(3)}`);
  set("woCutW", cut.w);
  set("woCutH", cut.h);
  set("labelWo", `${wo.id} · ${wo.so}`);
  set("labelDist", `${wo.distributor} · ${wo.po}`);
  set("labelProduct", `${wo.product} · ${wo.room}`);
  set("labelCut", `${cut.w} × ${cut.h} in`);
  set("labelControl", `Control: ${wo.control} · ${wo.mount} mount`);
}

function renderTechnicians() {
  const tbody = $("#techTable");
  if (!tbody) return;
  tbody.innerHTML = technicians
    .map(
      (t) => `<tr>
        <td><strong>${t.name}</strong></td>
        <td>${t.zone}</td>
        <td>${t.jobsToday}</td>
        <td><span class="status ${t.status.includes("Disponible") ? "ready" : t.status.includes("ruta") ? "production" : "draft"}">${t.status}</span></td>
      </tr>`
    )
    .join("");
}

function renderNav() {
  const nav = $("#nav");
  const items = navByRole[state.role];
  nav.innerHTML = items
    .map(
      (id) =>
        `<button type="button" data-view="${id}" class="${state.view === id ? "active" : ""}">${navLabels[id]}</button>`
    )
    .join("");
  $("#roleLabel").textContent = roleNames[state.role];
}

function showView(view) {
  const allowed = navByRole[state.role];
  if (!allowed.includes(view)) view = allowed[0];
  state.view = view;
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const el = document.getElementById(`view-${view}`);
  if (el) el.classList.add("active");
  $("#viewTitle").textContent = copy[view].title;
  $("#viewSubtitle").textContent = copy[view].subtitle;
  renderNav();
}

function renderCalendar() {
  const days = ["Lun 3", "Mar 4", "Mié 5", "Jue 6", "Vie 7", "Sáb 8", "Dom 9"];
  const byDay = {};
  scheduleEvents.forEach((e) => {
    byDay[e.day] = e;
  });
  $("#calendar").innerHTML = days
    .map((d, i) => {
      const ev = byDay[i];
      return `<div class="day"><strong>${d}</strong>${
        ev ? `<div class="event">${ev.text}</div><div class="stat-note" style="margin-top:4px;">${ev.tech}</div>` : ""
      }</div>`;
    })
    .join("");
}

function enterApp() {
  $("#login").style.display = "none";
  $("#app").classList.add("active");
  const start =
    state.role === "distributor" ? "portal" : state.role === "production" ? "workorders" : "dashboard";
  showView(start);
  toast(`Demo como ${roleNames[state.role]} · datos de ejemplo`);
}

document.querySelectorAll("#roleGrid .role").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#roleGrid .role").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    state.role = btn.dataset.role;
  });
});

$("#enterDemo").addEventListener("click", enterApp);

document.body.addEventListener("click", (e) => {
  const woRow = e.target.closest("[data-wo]");
  if (woRow) {
    selectWorkOrder(woRow.dataset.wo);
    showView("workorders");
    return;
  }
  const go = e.target.closest("[data-go]");
  if (go) {
    e.preventDefault();
    showView(go.dataset.go);
  }
  const viewBtn = e.target.closest("[data-view]");
  if (viewBtn) showView(viewBtn.dataset.view);
});

$("#portalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const po = $("#poInput").value || `CB-${Math.floor(Math.random() * 900 + 100)}`;
  const product = $("#productInput").value;
  const width = Number($("#widthInput").value);
  const height = Number($("#heightInput").value);
  const room = $("#roomInput").value;
  const newId = `SO-${1186 + sampleOrders.filter((o) => o.id.startsWith("SO")).length}`;
  const woId = `WO-${222 + sampleWorkOrders.length}`;
  sampleOrders.unshift({
    id: newId,
    origin: "Portal",
    customer: "Casa Bella Interiors",
    endClient: "Jennifer Walsh",
    product,
    lines: 1,
    total: "$980",
    status: "received",
    qb: "Pendiente",
    po,
  });
  sampleWorkOrders.unshift({
    id: woId,
    so: newId,
    product,
    room,
    width,
    height,
    dedW: 0.25,
    dedH: 0.5,
    mount: "Inside",
    control: "Right",
    status: "received",
    distributor: "Casa Bella Interiors",
    po,
  });
  sampleWorkOrders[0].status = "production";
  renderAll();
  toast(`Orden DEMO ${po} → ${newId} / ${woId} en producción`);
  const pending = document.querySelectorAll("#portalTimeline .timeline-item.pending");
  if (pending[0]) pending[0].classList.remove("pending");
  showView("orders");
});

$("#convertEstimate")?.addEventListener("click", () => {
  const est = sampleOrders.find((o) => o.status === "draft");
  if (est) {
    const old = est.id;
    est.id = `SO-${1100 + Math.floor(Math.random() * 80)}`;
    est.origin = "Estimado";
    est.status = "received";
    est.qb = "Pendiente";
    est.po = `PO-${Math.floor(Math.random() * 900 + 100)}`;
    renderAll();
    toast(`${old} convertido a ${est.id}`);
  } else {
    toast("No hay estimados DEMO pendientes");
  }
});

$("#markReady")?.addEventListener("click", () => {
  const wo = sampleWorkOrders.find((w) => w.id === state.selectedWo);
  if (wo) wo.status = "ready";
  const so = sampleOrders.find((o) => o.id === wo?.so);
  if (so) so.status = "ready";
  renderAll();
  toast(`${state.selectedWo} Lista · portal del distribuidor actualizado`);
  showView("portal");
  document.querySelectorAll("#portalTimeline .timeline-item.pending").forEach((el, idx) => {
    if (idx === 0) el.classList.remove("pending");
  });
});

$("#printLabel")?.addEventListener("click", () => toast(`Label ${state.selectedWo} enviado a impresora de planta (DEMO)`));

$("#syncQb")?.addEventListener("click", () => {
  const pending = sampleOrders.find((o) => o.qb === "Pendiente");
  if (pending) {
    pending.qb = "Synced";
    toast(`${pending.id} sincronizada con QuickBooks Online`);
  } else {
    toast("Todas las órdenes DEMO ya están en QuickBooks");
  }
  renderAll();
  $("#syncBadge").textContent = "Sync OK · hace unos segundos";
});

$("#openMapping")?.addEventListener("click", () => toast("Mapeo listo para revisión con tu contadora"));

function renderAll() {
  renderDashboardStats();
  renderCustomers();
  renderDistributors();
  renderOrders();
  renderWorkOrders();
  renderTechnicians();
  renderCalendar();
}

renderAll();
