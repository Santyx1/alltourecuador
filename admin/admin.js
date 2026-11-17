/* ==========================================
   Admin — All Tour Ecuador (PHP backend)
   ========================================== */

const API_TOURS   = 'save-tours.php';
const API_EMPRESA = 'save-empresa.php';
const TOKEN       = 'CAMBIA_ESTE_TOKEN'; // ⚠️ Pon el MISMO en save-tours.php
const TOURS_JSON  = 'tours.json';        // en la raíz
const EMPRESA_JSON= 'empresa.json';      // en la raíz

const $ = (s) => document.querySelector(s);

let tours = [];
let empresa = {};

/* ---------- TOAST ---------- */
function toast(msg, type = 'success') {
    const el = $('#toast');
    el.textContent = msg;
    el.className = 'toast show ' + type;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (el.className = 'toast'), 3000);
}

/* ---------- HELPERS ---------- */
function linesToArray(str) {
    return str.split('\n').map(s => s.trim()).filter(Boolean);
}
function arrayToLines(arr, key = 'es') {
    return (arr || []).map(i => typeof i === 'string' ? i : (i[key] || i.es || '')).join('\n');
}
function arrayToMultilang(arr) {
    return (arr || []).map(i => typeof i === 'string'
        ? { es: i, en: i, fr: i }
        : { es: i.es || '', en: i.en || '', fr: i.fr || '' });
}
function itinerarioToLines(arr) {
    return (arr || []).map(i => `${i.hora} | ${i.texto?.es || ''}`).join('\n');
}
function linesToItinerario(str) {
    return linesToArray(str).map(line => {
        const idx = line.indexOf('|');
        const hora = idx >= 0 ? line.slice(0, idx).trim() : line.trim();
        const texto = idx >= 0 ? line.slice(idx + 1).trim() : '';
        return { hora, texto: { es: texto, en: texto, fr: texto } };
    });
}

/* ---------- CARGA ---------- */
async function cargarTours() {
    try {
        const res = await fetch(`${TOURS_JSON}?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error();
        tours = await res.json();
    } catch {
        tours = [];
    }
    renderTabla();
    renderStats();
}

async function cargarEmpresa() {
    try {
        const res = await fetch(`${EMPRESA_JSON}?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error();
        empresa = await res.json();
    } catch {
        empresa = {};
    }
    renderEmpresa();
}

/* ---------- GUARDAR ---------- */
async function guardarTours() {
    try {
        const res = await fetch(API_TOURS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Admin-Token': TOKEN
            },
            body: JSON.stringify(tours)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error al guardar');
        toast(`✅ ${tours.length} tours guardados en tours.json`);
        return true;
    } catch (err) {
        console.error(err);
        toast('❌ ' + err.message, 'error');
        return false;
    }
}

async function guardarEmpresa() {
    try {
        const res = await fetch(API_EMPRESA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Admin-Token': TOKEN
            },
            body: JSON.stringify(empresa)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error al guardar');
        toast('✅ Empresa guardada en empresa.json');
        return true;
    } catch (err) {
        console.error(err);
        toast('❌ ' + err.message, 'error');
        return false;
    }
}

/* ---------- STATS ---------- */
function renderStats() {
    const total = tours.length;
    const dest = tours.filter(t => t.destacado).length;
    const min = tours.length ? Math.min(...tours.map(t => +t.precio)) : 0;
    const max = tours.length ? Math.max(...tours.map(t => +t.precio)) : 0;
    $('#stats').innerHTML = `
        <div class="stat"><strong>${total}</strong><span>Tours</span></div>
        <div class="stat"><strong>${dest}</strong><span>Destacados</span></div>
        <div class="stat"><strong>$${min}</strong><span>Mín.</span></div>
        <div class="stat"><strong>$${max}</strong><span>Máx.</span></div>
    `;
}

/* ---------- TABLA ---------- */
function renderTabla() {
    const tbody = $('#tbody');
    if (!tours.length) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:30px;color:#5A7A94;">No hay tours.</td></tr>`;
        return;
    }
    tbody.innerHTML = tours.map(t => `
        <tr>
            <td>${t.id}</td>
            <td>${t.imagen ? `<img src="${t.imagen}" alt="">` : '—'}</td>
            <td><strong>${t.titulo?.es || '—'}</strong></td>
            <td>$${Number(t.precio).toFixed(2)}</td>
            <td>${t.duracion || '—'}</td>
            <td>${t.nivel || '—'}</td>
            <td><span class="badge ${t.destacado ? 'badge-yes' : 'badge-no'}">${t.destacado ? 'Sí' : 'No'}</span></td>
            <td class="actions-cell">
                <button class="icon-btn" data-edit="${t.id}" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="icon-btn danger" data-del="${t.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');

    tbody.querySelectorAll('[data-edit]').forEach(b =>
        b.addEventListener('click', () => abrirModal(+b.dataset.edit)));
    tbody.querySelectorAll('[data-del]').forEach(b =>
        b.addEventListener('click', () => eliminarTour(+b.dataset.del)));
}

/* ---------- ELIMINAR ---------- */
async function eliminarTour(id) {
    if (!confirm('¿Eliminar este tour?')) return;
    tours = tours.filter(t => t.id !== id);
    if (await guardarTours()) {
        renderTabla();
        renderStats();
    }
}

/* ---------- MODAL ---------- */
function abrirModal(id = null) {
    $('#modal').classList.add('open');
    $('#tourForm').reset();
    $('#tId').value = '';

    if (id) {
        const t = tours.find(x => x.id === id);
        if (!t) return;
        $('#modalTitle').textContent = 'Editar tour';
        $('#tId').value = t.id;
        $('#tSlug').value = t.slug || '';
        $('#tPrecio').value = t.precio;
        $('#tDuracion').value = t.duracion;
        $('#tNivel').value = t.nivel;
        $('#tMinPax').value = t.minPax;
        $('#tDestino').value = (t.destino || []).join(', ');
        $('#tTipo').value = (t.tipo || []).join(', ');
        $('#tImagen').value = t.imagen || '';
        $('#tImagenAlt').value = t.imagenAlt || '';
        $('#tDestacado').checked = !!t.destacado;
        $('#tTituloEs').value = t.titulo?.es || '';
        $('#tTituloEn').value = t.titulo?.en || '';
        $('#tTituloFr').value = t.titulo?.fr || '';
        $('#tResumenEs').value = t.resumen?.es || '';
        $('#tResumenEn').value = t.resumen?.en || '';
        $('#tResumenFr').value = t.resumen?.fr || '';
        $('#tDescripcionEs').value = t.descripcion?.es || '';
        $('#tDescripcionEn').value = t.descripcion?.en || '';
        $('#tDescripcionFr').value = t.descripcion?.fr || '';
        $('#tCalloutEs').value = t.callout?.es || '';
        $('#tCalloutEn').value = t.callout?.en || '';
        $('#tCalloutFr').value = t.callout?.fr || '';
        $('#tIncluye').value = arrayToLines(t.incluye, 'es');
        $('#tNoIncluye').value = arrayToLines(t.noIncluye, 'es');
        $('#tItinerario').value = itinerarioToLines(t.itinerario);
    } else {
        $('#modalTitle').textContent = 'Nuevo tour';
        $('#tMinPax').value = 4;
        $('#tDestacado').checked = false;
    }
}

function cerrarModal() {
    $('#modal').classList.remove('open');
}

/* ---------- SUBMIT TOUR ---------- */
$('#tourForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = $('#tId').value ? +$('#tId').value : null;

    const nuevo = {
        id: id || (tours.length ? Math.max(...tours.map(t => t.id)) + 1 : 1),
        slug: $('#tSlug').value.trim(),
        precio: +$('#tPrecio').value,
        duracion: $('#tDuracion').value,
        nivel: $('#tNivel').value,
        minPax: +$('#tMinPax').value,
        destino: $('#tDestino').value.split(',').map(s => s.trim()).filter(Boolean),
        tipo: $('#tTipo').value.split(',').map(s => s.trim()).filter(Boolean),
        imagen: $('#tImagen').value.trim(),
        imagenAlt: $('#tImagenAlt').value.trim(),
        destacado: $('#tDestacado').checked,
        titulo: { es: $('#tTituloEs').value, en: $('#tTituloEn').value, fr: $('#tTituloFr').value },
        resumen: { es: $('#tResumenEs').value, en: $('#tResumenEn').value, fr: $('#tResumenFr').value },
        descripcion: { es: $('#tDescripcionEs').value, en: $('#tDescripcionEn').value, fr: $('#tDescripcionFr').value },
        callout: { es: $('#tCalloutEs').value, en: $('#tCalloutEn').value, fr: $('#tCalloutFr').value },
        incluye: arrayToMultilang(linesToArray($('#tIncluye').value)),
        noIncluye: arrayToMultilang(linesToArray($('#tNoIncluye').value)),
        itinerario: linesToItinerario($('#tItinerario').value)
    };

    // Conservar ficha si existía (no la editamos en el form)
    if (id) {
        const old = tours.find(t => t.id === id);
        if (old && old.ficha) nuevo.ficha = old.ficha;
    }

    if (id) {
        tours = tours.map(t => t.id === id ? nuevo : t);
    } else {
        tours.push(nuevo);
    }

    if (await guardarTours()) {
        cerrarModal();
        renderTabla();
        renderStats();
    }
});

/* ---------- EMPRESA FORM ---------- */
function renderEmpresa() {
    const form = $('#empresaForm');
    const campos = [
        ['nombre', 'Nombre'],
        ['slogan', 'Slogan'],
        ['descripcion', 'Descripción'],
        ['telefono', 'Teléfono'],
        ['email', 'Email'],
        ['direccion', 'Dirección'],
        ['whatsapp', 'WhatsApp URL'],
        ['facebook', 'Facebook URL'],
        ['instagram', 'Instagram URL'],
        ['tiktok', 'TikTok URL'],
        ['youtube', 'YouTube URL'],
        ['hashtag', 'Hashtag'],
        ['copyright', 'Copyright'],
        ['privacidad', 'Política de privacidad'],
        ['terminos', 'Términos y condiciones'],
        ['whatsappFloat', 'WhatsApp flotante URL']
    ];
    form.innerHTML = campos.map(([key, label]) => `
        <div class="group">
            <label>${label}</label>
            <input type="text" data-empresa-key="${key}" value="${(empresa[key] || '').replace(/"/g, '&quot;')}" />
        </div>
    `).join('');
}

$('#btnSaveEmpresa').addEventListener('click', async () => {
    document.querySelectorAll('[data-empresa-key]').forEach(inp => {
        empresa[inp.dataset.empresaKey] = inp.value;
    });
    await guardarEmpresa();
});

/* ---------- EVENTOS ---------- */
$('#btnNew').addEventListener('click', () => abrirModal());
$('#btnReload').addEventListener('click', () => { cargarTours(); toast('🔄 Recargado desde el servidor'); });
$('#modalClose').addEventListener('click', cerrarModal);
$('#modalOverlay').addEventListener('click', cerrarModal);
$('#btnCancel').addEventListener('click', cerrarModal);

/* ---------- NAVEGACIÓN ---------- */
document.querySelectorAll('[data-view]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('[data-view]').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        $('#view-' + a.dataset.view).classList.add('active');
    });
});

/* ---------- ARRANQUE ---------- */
document.addEventListener('DOMContentLoaded', async () => {
    await cargarTours();
    await cargarEmpresa();
});
