// Datos extraídos del dashboard original.
// No modificar el nombre de la constante: la página y la API dependen de él.

const MODELOS = [
  {id:"TODOS",proj:"TODOS",sit:"Consulta general de estado",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre [PROYECTO].

Actualmente el proyecto está en [INSTANCIA]. El expediente Nº [EXP] sigue activo en [ORGANISMO].

El próximo paso es [ACCIÓN], que depende de [RESPONSABLE].

Apenás tengamos resolución formal, te avisamos de inmediato.`,
   nota:"Completar con datos de la pantalla Gestión. Siempre incluir expediente.",kwds:"estado expediente"},

  {id:"TODOS",proj:"TODOS",sit:"Explicación de demoras — marco normativo",niv:"1-2",canal:"WhatsApp / Reunión",
   texto:`Desde octubre 2024, la provincia de Santa Fe exige que todos los certificados hídricos y ambientales estén aprobados antes de avanzar con obras. Antes era paralelo; hoy es secuencial y obligatorio. Afecta a todos los desarrollos de Santa Fe.

Nuestro equipo hace seguimiento permanente de cada expediente.`,
   nota:"Argumento base universal. No decir 'la provincia se demoró' — usar 'el circuito provincial requiere'.",kwds:"normativa demora"},

  {id:"TODOS",proj:"TODOS",sit:"Ante mención de estafa / abandono",niv:"3",canal:"WhatsApp",
   texto:`Entendemos la preocupación. Grupo Roma no ha tenido ninguna revocación de certificados ni paralización definitiva. Todos nuestros proyectos tienen aprobaciones vigentes.

Si querés revisar el estado con documentación sobre la mesa, te proponemos coordinar una reunión.`,
   nota:"No repetir 'estafa'. Redirigir a reunión. Nunca dejar sin respuesta.",kwds:"estafa abandono"},

  {id:"TODOS",proj:"TODOS",sit:"Ante amenaza de acción legal",niv:"3",canal:"WhatsApp",
   texto:`Tu planteo requiere una instancia formal que no podemos resolver correctamente por mensajes. Te proponemos coordinar una reunión con el equipo de legales para revisar el contrato y las alternativas de manera ordenada.`,
   nota:"No admitir incumplimiento. No dar info contractual por WhatsApp. Escalar a legales.",kwds:"legal abogado"},

  {id:"TODOS",proj:"TODOS",sit:"Ante pedido de devolución",niv:"4",canal:"Reunión",
   texto:`La devolución requiere revisar las condiciones contractuales con el equipo de legales. No es algo que resolvamos correctamente por mensajes.

También podemos evaluar el traslado a un proyecto más avanzado si eso se ajusta mejor a tu situación actual.`,
   nota:"Nunca prometer devolución. Abrir canje como salida constructiva. Escalar a Luca.",kwds:"devolución canje"},

  {id:"CM",proj:"Campo Madero",sit:"Estado — conexión eléctrica EPE",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Campo Madero.

La obra está prácticamente completa: calzadas, agua, planta, pluviales, alumbrado, forestación y señalización al 100%. Red eléctrica interna 95%.

El paso pendiente es la aprobación del proyecto técnico en EPE Santa Fe (Expte. 2/2025/16430). Una vez aprobado, se designa inspector y se realiza la conexión definitiva.

Apenás EPE nos dé la devolución, te avisamos.`,
   nota:"Destacar todo lo logrado. No prometer fecha EPE.",kwds:"eléctrica EPE 95%"},

  {id:"CM",proj:"Campo Madero",sit:"Reclamo por inseguridad en el predio",niv:"2",canal:"WhatsApp",
   texto:`Entendemos y nos preocupa lo que describís. Estamos tomando acciones de coordinación en el predio.

Te pedimos que informes cualquier incidente también a las autoridades locales y que nos lo hagas saber para actuar internamente.`,
   nota:"Verificar qué acción hay planificada ANTES de responder.",kwds:"inseguridad robo predio"},

  {id:"CM",proj:"Campo Madero",sit:"Consulta sobre escrituración",niv:"1",canal:"WhatsApp",
   texto:`La escrituración se inicia después del final de obra y la subdivisión en Catastro. Hoy estamos en la habilitación eléctrica (Expte. 2/2025/16430 en EPE).

Una vez completada, el proceso sigue: recepción de obra → Catastro → escrituración. Es secuencial. Te avisamos cuando esté disponible.`,
   nota:"No dar fechas. Explicar la secuencia lógica.",kwds:"escrituración catastro secuencia"},

  {id:"CM2",proj:"Campo Madero 2",sit:"Estado general — admisibilidad completada",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Campo Madero 2.

Buena noticia: la admisibilidad de proyecto fue aprobada. El expediente de Ventanilla Única (Nº 00115-0015043-0) está en revisión técnica provincial.

Desde oct. 2024, la normativa exige todas las aprobaciones hídricas y ambientales antes de iniciar obras. Estamos trabajando activamente en esas gestiones.

Apenás tengamos definición concreta, te lo comunicamos.`,
   nota:"Destacar admisibilidad como novedad positiva (completado 24/03).",kwds:"admisibilidad VUI"},

  {id:"CM2",proj:"Campo Madero 2",sit:"Plazo de boleto vencido",niv:"3",canal:"Reunión",
   texto:`El plazo de posesión corre desde la firma del uso conforme de suelo, que es la aprobación de la que parte el proceso. Mientras esa instancia no esté completamente aprobada, el plazo contractual no está vencido.

Si querés revisarlo con el equipo de legales, coordinamos esa reunión.`,
   nota:"CLAVE JURÍDICA. No admitir vencimiento por WhatsApp. Escalar a legales.",kwds:"plazo vencimiento boleto contractual"},

  {id:"EN",proj:"El Naranjo",sit:"Estado — aguardando CH2",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre El Naranjo.

El barrio tiene el 100% de obras internas ejecutadas: calzadas, agua, red eléctrica (finalizada jul 2025), alumbrado, forestación y señalización.

Lo que está pendiente es la aprobación del Certificado Hídrico 2 (Expte. 01907-0004920-0), en evaluación en el Ministerio de Infraestructura de Santa Fe.

Apenás tengamos resolución, te informamos.`,
   nota:"Destacar el 100% de obra interna como fortaleza.",kwds:"CH2 ministerio 100% obra"},

  {id:"EN2",proj:"El Naranjo 2",sit:"Estado — obra bloqueada por CH2",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre El Naranjo 2.

Las obras internas están suspendidas hasta obtener el Certificado Hídrico 2 — exigencia provincial obligatoria. La obra de descarga hídrica externa (clave para el CH2) tiene más del 80% de avance.

Una vez aprobado el CH2, se retoman y finalizan todas las obras internas.`,
   nota:"Explicar el bloqueo como normativo, no como decisión de la empresa.",kwds:"CH2 bloqueado obra externa"},

  {id:"VI",proj:"Vitta",sit:"Estado — CH2 aprobado, CAT en trámite",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Vitta.

Buena noticia: el Certificado Hídrico 2 fue aprobado (Expte. 01909-0000288-9). Las obras estructurales están completas: agua 100%, cloacas 100%, calzadas 100%.

Actualmente tramitamos la Categorización Ambiental (Expte. 02102-0014904-9), instancia que habilita continuar obras y proyectar posesión.`,
   nota:"Destacar CH2 como novedad positiva. Reciente aprobación.",kwds:"CH2 aprobado CAT ambiental"},

  {id:"CEPE",proj:"CEPE",sit:"Estado general post levantamiento",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Comunidad Evolutiva Pueblo Esther.

Tenemos todas las aprobaciones vigentes: CH1 y CH2, CAT y EIA aprobados, CUR obtenido (28/10/2025), y la suspensión de obra fue levantada formalmente el 10/11/2025.

Obras en ejecución: calzadas 97%, agua 80%, cloacas 80%, eléctrica 70%. Además ya está en CLESAPE el transformador de 5 MVA.`,
   nota:"Destacar el transformador como hito positivo. Mostrar que está activo.",kwds:"CUR levantamiento transformador 5MVA"},

  {id:"OR",proj:"Orígenes",sit:"Estado — convenio eléctrico",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Orígenes.

Todas las gestiones están aprobadas: uso conforme, convenio, factibilidades, CH1, CH2 y categorización ambiental.

El acuerdo técnico de la obra eléctrica está cerrado. Estamos en la formalización legal del contrato con la cooperativa, que habilita el inicio efectivo. Una vez firmado, el plazo estimado es de 3 a 5 meses.`,
   nota:"No decir 'la cooperativa no firma'. Usar: 'formalización contractual'. Sin fecha hasta firma.",kwds:"cooperativa convenio eléctrico 3-5 meses"},

  {id:"OR",proj:"Orígenes",sit:"Reclamo por alquiler / compensación",niv:"3",canal:"WhatsApp",
   texto:`Grupo Roma no cubre gastos como alquileres, ya que los plazos son estimativos y sujetos a aprobaciones externas, como figura en el contrato. Entendemos que es una situación incómoda.

Si querés conversar tu caso particular, coordinamos una reunión.`,
   nota:"Remitir al contrato. No abrir puerta a compensaciones.",kwds:"alquiler compensación contrato"},

  {id:"CDE",proj:"Clos del Este",sit:"Estado general",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Clos del Este.

El proyecto está en gestión administrativa municipal y provincial.

A nivel municipal, el expediente está en el Concejo Municipal de Roldán (Expte. 1617) para habilitación como proyecto especial. A nivel provincial, fue ingresado en Ventanilla Única de Inversiones el 29/01/2025.

Seguimos gestionando activamente ambas instancias.`,
   nota:"No prometer fecha del Concejo. No tiene plazos preestablecidos.",kwds:"concejo municipal VUI roldán"},

  {id:"CDE",proj:"Clos del Este",sit:"Propuesta de canje a CEPE",niv:"3-4",canal:"Reunión",
   texto:`Podemos evaluar tomar el saldo abonado en Clos del Este y analizar la diferencia para aplicarlo a un lote en Comunidad Evolutiva Pueblo Esther, que está en una instancia considerablemente más avanzada.

Si estás de acuerdo, te armamos una propuesta concreta desde el área comercial.`,
   nota:"Solo ofrecer cuando el cliente está en salida activa. Coordinar con comercial antes.",kwds:"canje CEPE saldo transferencia"},

  {id:"VR",proj:"Vitta Río",sit:"Estado general",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Vitta Río.

Aprobaciones vigentes: uso conforme, CH1 (Expte. 01909-0000680-7), convenio EPE, factibilidades de agua, gas, electricidad, fibra y RSU.

Estamos a la espera del CH2 y la instancia ambiental. Sin esas aprobaciones, la normativa no habilita continuar con obra.

Apenás tengamos habilitación formal, te avisamos.`,
   nota:"Enumerar aprobaciones para mostrar solidez.",kwds:"CH1 CH2 normativa habilitación"},

  {id:"CZ",proj:"CEZA",sit:"Estado general",niv:"1",canal:"WhatsApp",
   texto:`Hola [Nombre], te actualizo sobre Comunidad Evolutiva Zavalla.

El proyecto está en gestión hídrica y ambiental. La Categorización Ambiental (Expte. 02102-0014860-4) fue presentada en abril 2025.

Desde dic. 2025, la provincia analiza simultáneamente todos los expedientes de la misma cuenca hídrica, lo que genera tiempos adicionales pero garantiza un análisis técnico integral.

Seguimos con seguimiento permanente.`,
   nota:"Mencionar criterio de cuenca como contexto técnico, no como excusa.",kwds:"CAT cuenca hídrica zavalla"},
];
