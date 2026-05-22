// Novedades operativas y de comunicación.
// Este archivo alimenta el bloque "Novedades" del dashboard y puede ser leído por la API.
//
// Campos recomendados:
// - fecha: YYYY-MM-DD.
// - barrio_id: ID interno del barrio/proyecto.
// - barrio: nombre visible.
// - categoria: obra, gestion, servicios, mantenimiento, institucional, comercial.
// - titulo: título corto.
// - detalle: hecho concreto, sin interpretación.
// - visibilidad: cliente, interna, direccion.
// - apto_postventa / apto_marketing: si puede usarse para esos equipos.
// - prioridad_comunicacion: baja, media, alta.
// - formato_sugerido: historia, placa, reel, comunicado, informe.
// - copy_base_marketing: texto base editable para redes.
// - notas_internas: solo uso interno.

const NOVEDADES = [
  {
    id: "nov-2026-03-20-cde-gas",
    fecha: "2026-03-20",
    barrio_id: "CDE",
    barrio: "Clos del Este",
    categoria: "servicios",
    titulo: "Factibilidad de Gas aprobada",
    detalle: "Factibilidad de Gas aprobada por Litoral Gas.",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: true,
    prioridad_comunicacion: "media",
    formato_sugerido: ["historia", "placa"],
    copy_base_marketing: "Clos del Este suma un nuevo avance de gestión: la Factibilidad de Gas fue aprobada por Litoral Gas.",
    notas_internas: ""
  },
  {
    id: "nov-2026-03-10-vr-gas-epe",
    fecha: "2026-03-10",
    barrio_id: "VR",
    barrio: "Vitta Río",
    categoria: "servicios",
    titulo: "Factibilidad de Gas y convenio eléctrico",
    detalle: "Factibilidad de Gas aprobada por Litoral Gas. Convenio eléctrico EPE aprobado.",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: true,
    prioridad_comunicacion: "media",
    formato_sugerido: ["historia", "placa"],
    copy_base_marketing: "Vitta Río continúa sumando avances de gestión: Factibilidad de Gas aprobada y convenio eléctrico EPE aprobado.",
    notas_internas: ""
  },
  {
    id: "nov-2026-03-01-cm-electrico",
    fecha: "2026-03-01",
    barrio_id: "CM",
    barrio: "Campo Madero",
    categoria: "gestion",
    titulo: "Proyecto eléctrico en Área Técnica Santa Fe",
    detalle: "El proyecto eléctrico de obra complementaria salió de EPE Sucursal Rosario y se encuentra en Área Técnica Santa Fe.",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: false,
    prioridad_comunicacion: "alta",
    formato_sugerido: ["informe", "respuesta_postventa"],
    copy_base_marketing: "",
    notas_internas: "Comunicar con cuidado. Evitar prometer plazos."
  },
  {
    id: "nov-2026-04-cepe-legal-tributario",
    fecha: "2026-04-01",
    barrio_id: "CEPE",
    barrio: "CEPE",
    categoria: "gestion",
    titulo: "Avance legal-tributario con municipalidad",
    detalle: "Avance legal-tributario con municipalidad para posesión.",
    visibilidad: "interna",
    apto_postventa: false,
    apto_marketing: false,
    prioridad_comunicacion: "alta",
    formato_sugerido: ["informe_interno"],
    copy_base_marketing: "",
    notas_internas: "Información interna — no comunicar a clientes."
  },
  {
    id: "nov-2026-05-10-en-pavimento-pepito",
    fecha: "2026-05-10",
    barrio_id: "EN",
    barrio: "El Naranjo",
    categoria: "obra",
    titulo: "Finalización de pavimentación",
    detalle: "Se terminó de pavimentar la calle Pepito Marto desde Jorge Pecha hasta Martín Ojeda.",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: true,
    prioridad_comunicacion: "media",
    formato_sugerido: ["historia", "placa", "reel"],
    copy_base_marketing: "Seguimos avanzando en El Naranjo: finalizamos la pavimentación de la calle Pepito Marto, desde Jorge Pecha hasta Martín Ojeda.",
    notas_internas: ""
  },

  {
    id: "nov-2026-05-23-en-se-contruyo-una-estatua-de-goku",
    fecha: "2026-05-23",
    barrio_id: "EN",
    barrio: "El Naranjo",
    categoria: "obra",
    titulo: "Se contruyo una ESTATUA DE GOKU",
    detalle: "Se finalizo la consgruccion de una estatia tamaño real de Goku SSJ 4",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: true,
    prioridad_comunicacion: "alta",
    formato_sugerido: ["Historia"],
    copy_base_marketing: "",
    notas_internas: ""
  },

  {
    id: "nov-2026-05-22-cepe-se-finalizo-la-instalacion-de-starlink-en-la-zona-",
    fecha: "2026-05-22",
    barrio_id: "CEPE",
    barrio: "CEPE",
    categoria: "servicios",
    titulo: "Se finalizó la instalacion de Starlink en la zona streamer",
    detalle: "Se finalizó la instalacion de fibra optica y antenas en la denominada zona streamer del bario CEPE",
    visibilidad: "cliente",
    apto_postventa: true,
    apto_marketing: true,
    prioridad_comunicacion: "alta",
    formato_sugerido: ["Historia"],
    copy_base_marketing: "",
    notas_internas: ""
  },

  {
    "id": "nov-2026-05-24-en-prueba-de-guardado-automatico",
    "fecha": "2026-05-24",
    "barrio_id": "EN",
    "barrio": "El Naranjo",
    "categoria": "obra",
    "titulo": "Prueba de guardado automático",
    "detalle": "Esta novedad fue cargada automáticamente desde el formulario/API.",
    "visibilidad": "cliente",
    "apto_postventa": true,
    "apto_marketing": true,
    "prioridad_comunicacion": "media",
    "formato_sugerido": [
      "historia"
    ],
    "copy_base_marketing": "",
    "notas_internas": ""
  }
,
  {
    "id": "nov-2026-05-15-cepe-terminado-el-proceso-de-aprobacion-de-santa-fe-mue",
    "fecha": "2026-05-15",
    "barrio_id": "CEPE",
    "barrio": "CEPE",
    "categoria": "gestion",
    "titulo": "Terminado el proceso de aprobacion de Santa Fe mueble",
    "detalle": "Se finalizo el proceso para la construccion en los lotes",
    "visibilidad": "cliente",
    "apto_postventa": true,
    "apto_marketing": true,
    "prioridad_comunicacion": "alta",
    "formato_sugerido": [
      "Historia"
    ],
    "copy_base_marketing": "",
    "notas_internas": ""
  }
,
  {
    "id": "nov-2026-05-21-lm-se-finalizo-el-parque-papito",
    "fecha": "2026-05-21",
    "barrio_id": "LM",
    "barrio": "Los Muchachos",
    "categoria": "obra",
    "titulo": "Se finalizo el parque papito",
    "detalle": "Se finalizo el alumbrado del parque",
    "visibilidad": "cliente",
    "apto_postventa": true,
    "apto_marketing": true,
    "prioridad_comunicacion": "alta",
    "formato_sugerido": [
      "Historia"
    ],
    "copy_base_marketing": "",
    "notas_internas": ""
  }
];
