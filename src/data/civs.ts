export const civData = [
  {
    id: 'french',
    name: 'Franceses',
    theme: 'from-blue-600 to-blue-800',
    accent: 'text-blue-400',
    ultimateUnit: 'Caballero Real de Élite + Cañón Real',
    difficulty: 'Fácil (Agresiva)',
    masterTip: 'El error del novato francés es dejar de hacer unidades en la Edad 3 para ahorrar para la 4. Tu pico de poder es en Feudal y Castillos. La Edad Imperial es solo para cerrar la partida con cañones si el enemigo resistió.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Condición de Victoria', units: 'Caballero Real & Cañón Real', desc: 'Unidades determinantes. Si el enemigo no tiene la respuesta exacta (piqueros/espingardas), ganas la partida.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Núcleo de Daño', units: 'Arbalétrier (Ballestero)', desc: 'Su trabajo es asesinar a los piqueros pesados que intenten matar a tus Caballeros Reales.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Apoyo Táctico', units: 'Jinete Ligero & Arquero', desc: 'Se usan solo al inicio para defenderse o hacer incursiones baratas si falta oro.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Unidades de "basura". Solo las creas si el enemigo te ataca con pura caballería y no tienes oro.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🥇 Oro', unit: 'Aldeanos', action: 'Mantén el Centro Urbano produciendo. 6 a ovejas, luego 3 a oro. Tu objetivo es 400 comida y 200 oro rápido.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Caballero Real (Temprano)', action: 'Avanza con "Escuela de Caballería". Crea 2-3 Caballeros Reales y envíalos a matar aldeanos enemigos.' },
      { num: 3, name: 'Edad de los Castillos', focus: '🥩 Comida, 🥇 Oro y 🪵 Madera', unit: 'Caballero + Arbalétrier', action: 'Avanza con "Salón del Gremio". Añade Ballesteros (Arbalétriers) para destruir a los piqueros enemigos.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro masivo y 🥩 Comida', unit: 'Cañón Real', action: 'Avanza con "Palacio Rojo". Mejora la Universidad y Taller de Asedio. Produce Cañones y borra bases.' }
    ],
    mapSynergy: 'Dry Arabia (El Yermo Móvil)'
  },
  {
    id: 'english',
    name: 'Ingleses',
    theme: 'from-red-600 to-red-800',
    accent: 'text-red-400',
    ultimateUnit: 'Arquero de Tiro Largo + Trebuchet',
    difficulty: 'Fácil (Defensiva/Asedio)',
    masterTip: 'Nunca pelees lejos de tus torres o castillos si puedes evitarlo. Ganas por "Red de Castillos", que hace que tus unidades disparen mucho más rápido bajo tus defensas.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Condición de Victoria', units: 'Arquero Tiro Largo & Trebuchet', desc: 'Masa crítica. 30 arqueros y 3 lanzapiedras destruyen cualquier base desde lejos.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Muro de Hierro', units: 'Hombre de Armas', desc: 'Con armadura extra. Actúan como un muro impenetrable para tus arqueros.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Contra-Asedio', units: 'Caballero Ligero (Jinete)', desc: 'Para correr e interceptar las catapultas enemigas.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Protección barata contra cargas de caballería temprana.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida (Granjas)', unit: 'Aldeanos', action: 'Granjas a mitad de precio. Recolecta ovejas, junta oro y transiciona aldeanos a madera para granjas.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Arquero Tiro Largo', action: 'Avanza con "Sala del Consejo". Imprime Arqueros, llévalos con un aldeano para construir una torre ofensiva.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Hombre de Armas', action: 'Avanza con "Torre Blanca". Usa Hombres de Armas blindados como escudo para tus arqueros.' },
      { num: 4, name: 'Edad Imperial', focus: '🪵 Madera y 🥇 Oro', unit: 'Lanzapiedras de Área', action: 'Avanza con "Palacio de Berkshire". Mejora Lanzapiedras con daño en área (Devastadores).' }
    ],
    mapSynergy: 'Marshland y Black Forest'
  },
  {
    id: 'hre',
    name: 'Sacro Imperio',
    theme: 'from-yellow-600 to-yellow-800',
    accent: 'text-yellow-500',
    ultimateUnit: 'Landsknecht + Hombre de Armas c/ Mazas',
    difficulty: 'Intermedia (Macroeconomía)',
    masterTip: 'Tu partida se decide en Edad 3. Debes recolectar las Reliquias con tus Prelados y meterlas en la Catedral de Regnitz. El oro infinito que generan es tu victoria.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Condición de Victoria', units: 'Landsknecht & Hombre Armas', desc: 'Marea imparable. El Landsknecht borra ejércitos con daño en área.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Motor Económico', units: 'Prelado (Monje)', desc: 'Inspiran aldeanos (40% más rápidos) y curan en combate.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Asedio Pesado', units: 'Catapulta (Mangonel)', desc: 'Imprescindible si el enemigo hace masas de ballesteros.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Rara vez usados; tu infantería pesada hace el trabajo.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🥇 Oro', unit: 'Prelado', action: 'Crea un Prelado ANTES que aldeanos para inspirar a recolectores. Avanza rápido.' },
      { num: 2, name: 'Edad Feudal', focus: 'Todo', unit: 'Hombre de Armas', action: 'Construye "Capilla de Aquisgrán". Defiéndete con Hombres de Armas tempranos y corre a Edad 3.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Infantería Pesada', action: 'Avanza con "Catedral de Regnitz" (oro) o "Palacio Burgrave". Mejora mazas a dos manos.' },
      { num: 4, name: 'Edad Imperial', focus: '🥩 Comida', unit: 'Landsknecht', action: 'Avanza con "Palacio de Suabia" (aldeanos baratos/rápidos). Mezcla Landsknechts en tu masa de infantería.' }
    ],
    mapSynergy: 'Hill & Dale (Las Alturas)'
  },
  {
    id: 'mongols',
    name: 'Mongoles',
    theme: 'from-teal-600 to-teal-800',
    accent: 'text-teal-400',
    ultimateUnit: 'Mangudai de Élite + Lancero a Caballo',
    difficulty: 'Difícil (Movilidad)',
    masterTip: 'No puedes construir murallas. Si estás jugando a defenderte en tu base con los mongoles, ya perdiste. Debes estar todo el tiempo hostigando.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'El Terror', units: 'Mangudai & Lancer', desc: 'Mangudai mata aldeanos en movimiento, la caballería remata.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Asedio de Campo', units: 'Lanzapiedras de Tracción', desc: 'Construidos en el campo por la infantería.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Control Territorial', units: 'Kurultai', desc: 'Campamento móvil que cura y potencia a todo tu ejército.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Para quemar edificios y robar recursos (Botín).' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🪵 Madera y 🪨 Piedra', unit: 'Lancero', action: 'Ovoo sobre piedra. Crea lanceros dobles para quemar campamentos y robar oro (Botín).' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Mangudai', action: 'Avanza with "Piedras del Ciervo". Usa piedra para Mangudais dobles. Corre y mata aldeanos.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Lancero a Caballo', action: 'Avanza with "Reducto de Estepa". Transiciona a Caballería Pesada + Kurultai.' },
      { num: 4, name: 'Edad Imperial', focus: '🪵 Madera, 🥇 Oro', unit: 'Lanzapiedras', action: 'Avanza with "Palacio del Khaganato". Mejora Geometría en el Ovoo y construye asedio en el frente.' }
    ],
    mapSynergy: 'Dry Arabia (El Yermo)'
  },
  {
    id: 'golden-horde',
    name: 'Horda de Oro',
    theme: 'from-amber-600 to-yellow-800',
    accent: 'text-amber-400',
    ultimateUnit: 'Khan de Élite + Torguuds',
    difficulty: 'Muy Difícil (Variante Mongola)',
    isVariant: true,
    masterTip: 'El genio táctico reside en acompañar al Khan con sus Torguuds (guardias) que absorben pasivamente el daño dirigido al héroe, mientras la carne de cañón de los Kharash proporciona bonificaciones defensivas.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Héroe Central', units: 'Khan de la Horda', desc: 'Unidad heroica que inspira a las tropas y dicta el ritmo del combate. Si cae, la ofensiva se paraliza.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Guardia Real', units: 'Torguud', desc: 'Caballería de élite diseñada para proteger al Khan absorbiendo daño.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Hostigamiento', units: 'Arquero Kipchak', desc: 'Caballería ligera a distancia que dispara en movimiento con gran agilidad.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Kharash', desc: 'Infantería ligera que otorga ventajas protectoras a tropas cercanas y absorbe impactos.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida', unit: 'Khan', action: 'Mantén al Khan explorando. Recolecta ovejas y prepara el terreno para la Carpa Dorada.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Torguud', action: 'Establece la Carpa Dorada. Inicia la producción militar doble bajo su influencia.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro y 🥩 Comida', unit: 'Kipchak', action: 'Transiciona a una fuerza móvil. Usa al Khan para inspirar cargas de Torguuds y Kipchaks.' },
      { num: 4, name: 'Edad Imperial', focus: 'Todo', unit: 'Horda Masiva', action: 'Maximiza la producción doble. Abruma al enemigo con oleadas ininterrumpidas de caballería de élite.' }
    ],
    mapSynergy: 'Dry Arabia (Dominio Móvil)'
  },
  {
    id: 'japanese',
    name: 'Japoneses',
    theme: 'from-red-500 to-red-700',
    accent: 'text-red-300',
    ultimateUnit: 'Samurái c/ Estandarte + Ozutsu',
    difficulty: 'Intermedia (Infantería)',
    masterTip: 'Mejorar el Centro Urbano a Mansión Daimyo es vital. Genera aura y te permite reclutar "Bannermen" (Abanderados) que potencian a todo su pelotón.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'El Honor', units: 'Samurái & Ozutsu', desc: 'Samuráis con escudos reflectantes pasivos y artilleros pesados de mano (Ozutsu).' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Caza y Rango', units: 'Onna-Musha', desc: 'Arqueras a caballo rápidas que destrozan unidades con armadura pesada.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'El Oficial', units: 'Bannerman (Abanderado)', desc: 'Líderes de pelotón que otorgan buffs de daño y velocidad a tus unidades.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Ashigaru', desc: 'Lanceros básicos. No tan fuertes pero se benefician masivamente del Bannerman y la Herrería.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🪨 Piedra', unit: 'Daimyo (TC)', action: 'Junta piedra para mejorar tu Centro Urbano y granjas (te dan comida y algo de madera).' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Samurái Temprano', action: 'Sube Cuartel Koka (Ninjas) o Almacén. Puedes hacer Samuráis en Edad 2; úsalos para aguantar.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Bannerman + Onna-Musha', action: 'Puerta Flotante (saca monjes especiales o Yorishiro para dopar edificios). Forma pelotones con líderes.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro y 🪵 Madera', unit: 'Ozutsu', action: 'Castillo de la Garza o Armería. Saca Ozutsus para volar castillos a disparos y Samuráis montados.' }
    ],
    mapSynergy: 'Hill & Dale / Mapas Cerrados'
  },
  {
    id: 'sengoku-daimyo',
    name: 'Sengoku Daimyo',
    theme: 'from-orange-700 to-red-900',
    accent: 'text-orange-400',
    ultimateUnit: 'Samurái Kanabo + Ashigaru Tanegashima',
    difficulty: 'Difícil (Variante Japonesa)',
    isVariant: true,
    masterTip: 'Requiere la construcción de fincas (Daimyo Estates) para desbloquear bonificaciones marciales específicas de los clanes Hojo, Oda o Takeda.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Demoledores', units: 'Samurái Kanabo', desc: 'Infantería pesada con daño proporcional a la vida máxima del enemigo. Destruyen tanques.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Pólvora Frontal', units: 'Ashigaru Tanegashima', desc: 'Pólvora japonesa de primera línea. Letales en cortas distancias.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Acoso', units: 'Caballería Yari', desc: 'Caballería de acoso especializado para interceptar asedio y unidades en retirada.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Soporte Religioso', units: 'Monje Ikko-Ikki', desc: 'Sanan en área durante la refriega. Vitales para mantener la línea.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida', unit: 'Aldeanos', action: 'Establece tu economía base y elige tu primer clan en la Finca Daimyo.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Samurái Naginata', action: 'Usa infantería de tajo pesada para abrumar a piqueros y milicias enemigas.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro', unit: 'Yari / Kanabo', action: 'Desbloquea el poder de los clanes. Usa Kanabos contra caballería pesada enemiga.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro y Pólvora', unit: 'Tanegashima', action: 'Forma líneas de fuego impenetrables con Ashigarus y soporte de Monjes Ikko-Ikki.' }
    ]
  },
  {
    id: 'byzantines',
    name: 'Bizantinos',
    theme: 'from-purple-600 to-purple-800',
    accent: 'text-purple-400',
    ultimateUnit: 'Catafracto + Mercenarios',
    difficulty: 'Muy Difícil (Doble Recurso)',
    masterTip: 'El "Aceite de Oliva" es tu 5to recurso. Lo generas pasivamente en granjas/bayas. Úsalo para comprar Mercenarios extranjeros en tus puestos comerciales.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Condición de Victoria', units: 'Catafracto', desc: 'La caballería más dura del juego con la habilidad "Arrollar" (Pisotear en área).' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Frente Sólido', units: 'Guardia Varega', desc: 'Infantería de élite con escudos. Pueden pasar a armas a dos manos perdiendo armadura por daño.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Soporte y Asedio', units: 'Mercenarios & Cheirosiphon', desc: 'Keshiks, Arqueros a Camello (comprados con aceite) y tu lanzallamas de asedio.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Limitanei', desc: 'Piqueros con habilidad "Muro de Escudos". Aguantan flechas magistralmente.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🪨 Piedra y 🥩 Comida', unit: 'Cisterna', action: 'Extrae piedra desde el segundo 1. Conecta cisternas por tu base con acueductos para acelerar tu imperio.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Limitanei & Mercenario', action: 'Hipódromo o Gran Bodega. Establece tu contrato mercenario y defiéndete con Muro de Escudos.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Catafracto', action: 'Cuerno de Oro (te da mercenarios gratis continuos). Saca tus pesados Catafractos.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro y Aceite', unit: 'Legión Extranjera', action: 'Torre Palatina. Mezcla tu ejército base con máquinas de asedio pesadas y Mercenarios exóticos.' }
    ]
  },
  {
    id: 'macedonia',
    name: 'Macedonia / Bizancio',
    theme: 'from-violet-700 to-purple-900',
    accent: 'text-violet-400',
    ultimateUnit: 'Riddari + Guardia Varega',
    difficulty: 'Difícil (Variante Bizantina)',
    isVariant: true,
    masterTip: 'Se benefician de la extracción económica de Plata, la cual permite investigar tecnologías de la herrería prematuramente. Un asalto Varego en la Edad Feudal lucha con blindajes inflados.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Fuerza de Choque', units: 'Riddari', desc: 'Caballería Varega devastadora contra arqueros y redes de asedio.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Élite Marcial', units: 'Guardia Varega', desc: 'Infantería pesada con furia. Pueden demoler edificios con sus propias manos.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Tácticos', units: 'Borgmadr', desc: 'Infantería Varega táctica para incursiones asimétricas.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Defensa', units: 'Limitanei', desc: 'Infantería ligera defensiva con el muro de escudos esencial.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥈 Plata y 🥩 Comida', unit: 'Mineros', action: 'Prioriza la recolección de Plata para acelerar tus mejoras de Herrería.' },
      { num: 2, name: 'Edad Feudal', focus: '🥇 Oro y 🥈 Plata', unit: 'Guardia Varega', action: 'Inicia el asalto temprano con Varegos bufados por tecnologías de plata.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro', unit: 'Riddari', action: 'Despliega a los Riddari para colapsar las líneas de proyectiles enemigas.' },
      { num: 4, name: 'Edad Imperial', focus: 'Todo', unit: 'Ejército Varego', action: 'Domina el mapa con infantería pesada de élite y soporte de asedio.' }
    ]
  },
  {
    id: 'tughlaq',
    name: 'Dinastía Tughlaq',
    theme: 'from-green-700 to-emerald-900',
    accent: 'text-green-400',
    ultimateUnit: 'Elefante Ballesta + Sanador',
    difficulty: 'Muy Difícil (Variante Delhi)',
    isVariant: true,
    masterTip: 'Introduce gobernadores estacionarios en fuertes que alteran la recolección económica. Sus elefantes tienen mecánicas de pisotón y curación simbiótica.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Asedio Pesado', units: 'Elefante Ballesta', desc: 'Asedio pesad montado que inflige daño perforante múltiple en áreas densas.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Soporte Vital', units: 'Elefante Sanador', desc: 'Sana masivamente a la infantería cercana. Escala su eficiencia con el número de tropas.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Flanqueo', units: 'Elefante de Incursión', desc: 'Caballería pesada que usa pisotones para evadir bloqueos de piqueros.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Religiosos', units: 'Erudito', desc: 'Aceleradores de tecnologías y soporte económico.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida', unit: 'Gobernadores', action: 'Estaciona tus gobernadores en fuertes para maximizar la recolección temprana.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Elefante Sanador', action: 'Haz que tu ejército feudal sea casi inmortal con el soporte de elefantes sanadores.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro', unit: 'Elefante Incursión', action: 'Rompe formaciones enemigas con la mecánica de pisotón.' },
      { num: 4, name: 'Edad Imperial', focus: 'Todo', unit: 'Elefante Ballesta', action: 'Desintegra ejércitos y edificios por igual con artillería montada.' }
    ]
  },
  {
    id: 'house-of-lancaster',
    name: 'Casa de Lancaster',
    theme: 'from-red-800 to-rose-950',
    accent: 'text-rose-500',
    ultimateUnit: 'Lord of Lancaster + Arqueros Largos',
    difficulty: 'Dificultad Media (Variante Inglesa)',
    isVariant: true,
    masterTip: 'Se beneficia de valles estrechos para defensa económica temprana. El Lord of Lancaster es una unidad heroica que consolida la línea defensiva.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Héroe Defensivo', units: 'Lord of Lancaster', desc: 'Infantería heroica con aura de soporte que consolida la línea de frente.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Asedio y Rango', units: 'Arquero de Tiro Largo', desc: 'La mítica unidad inglesa con rango superior y fuego letal.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Intercepción', units: 'Hobilar', desc: 'Caballería ligera especializada en intercepción económica y asedio rápido.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Muro', units: 'Hombre de Armas', desc: 'Infantería pesada para absorber el daño mientras los arqueros disparan.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida', unit: 'Aldeanos', action: 'Asegura los cuellos de botella del mapa con empalizadas tempranas.' },
      { num: 2, name: 'Edad Feudal', focus: '🪵 Madera y 🥩 Comida', unit: 'Arquero Largo', action: 'Establece una red de castillos y torres para aprovechar los buffs de ataque.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro', unit: 'Lord Lancaster', action: 'Despliega al Lord para liderar tus contraofensivas desde las alturas.' },
      { num: 4, name: 'Edad Imperial', focus: 'Todo', unit: 'Lanzapiedras de Lancaster', action: 'Asedio masivo desde la seguridad de tus murallas fortificadas.' }
    ]
  },
  {
    id: 'templars',
    name: 'Caballeros Templarios',
    theme: 'from-slate-200 to-red-600',
    accent: 'text-red-500',
    ultimateUnit: 'Caballero Hospitalario + Peregrinos',
    difficulty: 'Difícil (Religión y Guerra)',
    isVariant: true,
    masterTip: 'Los Peregrinos generan oro masivo en sitios sagrados y permiten préstamos económicos. El Caballero Hospitalario sobresale en conflictos de desgaste prologado.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Tanque Sanador', units: 'Caballero Hospitalario', desc: 'Caballería pesada que se sana en combate, ideal para asedios largos.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Logística Sagrada', units: 'Peregrino (Pilgrim)', desc: 'Civil de captura sagrada que genera oro y estabilidad económica por fe.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Soporte de Fuego', units: 'Arbalétrier', desc: 'Ballesteros con pavés para proteger a la caballería de piqueros.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Infantería', units: 'Lancero Templario', desc: 'Defensores de los sitios sagrados.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '⛪ Fe y 🥩 Comida', unit: 'Peregrino', action: 'Envía peregrinos a los sitios sagrados para iniciar la generación de oro pasivo.' },
      { num: 2, name: 'Edad Feudal', focus: '🥇 Oro', unit: 'Caballero Templario', action: 'Inicia incursiones con caballería pesada mientras consolidas tus préstamos.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥇 Oro y ⛪ Fe', unit: 'Hospitalario', action: 'Transiciona a Hospitalarios para dominar los enfrentamientos de desgaste.' },
      { num: 4, name: 'Edad Imperial', focus: 'Todo', unit: 'Ejército de la Fe', action: 'Abruma al enemigo con una economía basada en reliquias y sitios sagrados.' }
    ]
  },
  {
    id: 'chinese',
    name: 'Chinos',
    theme: 'from-orange-600 to-orange-800',
    accent: 'text-orange-400',
    ultimateUnit: 'Granaderos + Nido de Abejas',
    difficulty: 'Muy Difícil (Supervivencia)',
    masterTip: 'La mecánica de "Dinastías" exige construir AMBOS edificios distintivos de una edad. Cuesta muchos recursos, pero las unidades secretas valen la pena.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Dioses de Pólvora', units: 'Nido Abejas & Granadero', desc: 'Daño en área absurdo. Si llegas a esto, ganas.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Enjambre Rápido', units: 'Lancero de Fuego', desc: 'Destruyen edificios en segundos. Masa de 30 borra Centros Urbanos.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Defensores', units: 'Zhuge Nu (Ballestero)', desc: 'Vitales en Edad 2 y 3 para sobrevivir.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Muro humano descartable para tus Nidos de Abejas.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🪵 Madera', unit: 'Oficial Imperial', action: 'Crea Oficiales Imperiales. Supervisan producción (20%+) y recogen impuestos (oro).' },
      { num: 2, name: 'Edad Feudal', focus: '🪵 Madera y 🥇 Oro', unit: 'Zhuge Nu', action: 'Entra a Dinastía Song (ambos edificios). Usa Zhuge Nu en masa para defender agresiones.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Com., 🪵 Mad., 🥇 Oro', unit: 'Lancero de Fuego', action: 'Alcanza Dinastía Yuan. Acumula Lanceros de Fuego y destruye edificios por la espalda.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro masivo', unit: 'Nido de Abejas', action: 'Desbloquea Dinastía Ming. Granaderos y Nidos de Abejas mejorados al máximo.' }
    ],
    mapSynergy: 'Hill & Dale (Las Alturas)'
  },
  {
    id: 'rus',
    name: 'Rusos (Rus)',
    theme: 'from-red-700 to-orange-800',
    accent: 'text-orange-400',
    ultimateUnit: 'Streltsy (Artillero) + Caballería Pesada',
    difficulty: 'Intermedia (Micro de Mapa)',
    masterTip: 'Tu minijuego es la Caza. Debes matar tantos lobos, ciervos y jabalíes como puedas al inicio para acumular "Recompensas" (Oro y buffs). Si no cazas, no tienes economía.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Condición de Victoria', units: 'Streltsy', desc: 'Los mejores artilleros manuales del juego, se vuelven más letales si se mantienen estáticos.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Buff y Captura', units: 'Guerrero Monje', desc: 'A caballo, rápido, captura reliquias pronto y da un buff en área al golpear enemigos.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Presión Móvil', units: 'Caballero Temprano', desc: 'Caballeros pesados en Edad 2 para dominar el mapa.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Construyen empalizadas (fortalezas de madera) que bufean la recolección de madera.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y Caza', unit: 'Explorador', action: 'Crea 3 exploradores. Mátalos a todos los ciervos/lobos del mapa para el buff de Recompensa Nivel 3.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Caballero', action: 'Avanza con "Puerta Dorada" (mejor mercado del juego). Haz Caballeros tempranos para presionar.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Guerrero Monje', action: 'Avanza con "Abadía de la Trinidad". Roba las reliquias rápido con tus monjes a caballo.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro y 🥩 Comida', unit: 'Streltsy', action: 'Avanza con "Alta Armería". Imprime Streltsys y artillería bufada.' }
    ],
    mapSynergy: 'High View (Bosque de Recompensas)'
  },
  {
    id: 'delhi',
    name: 'Sultanato de Delhi',
    theme: 'from-emerald-600 to-emerald-800',
    accent: 'text-emerald-400',
    ultimateUnit: 'Elefante de Guerra + Eruditos',
    difficulty: 'Difícil (Macro y Timing)',
    masterTip: 'Todas tus tecnologías son GRATIS, pero tardan muchísimo. Tienes que crear Eruditos (monjes) y guarnecerlos en Mezquitas/Madrazas para acelerar la investigación.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Tanque Supremo', units: 'Elefantes (Torre y Guerra)', desc: 'Bestias con HP masivo. Necesitan arqueros o infantería que los protejan de piqueros.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Acelerador/Captura', units: 'Erudito (Scholar)', desc: 'Capturan Sitios Sagrados en Edad 2 (oro masivo temprano) y curan elefantes.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Núcleo Temprano', units: 'Ghazi Raider (Jinete)', desc: 'Reemplazo del jinete normal. Destruye infantería pesada en el juego temprano.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero', desc: 'Pueden construir empalizadas, esenciales para defender tus Sitios Sagrados.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🪵 Madera', unit: 'Erudito', action: 'Construye una Mezquita enseguida. Inicia mejoras económicas gratis. Crea 1-2 Eruditos.' },
      { num: 2, name: 'Edad Feudal', focus: 'Todo (Sitios Sagrados)', unit: 'Ghazi Raider', action: 'Avanza con "Cúpula de la Fe". Envía eruditos escoltados a capturar los Sitios Sagrados del mapa y amurállalos.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Elefante', action: 'El oro de los Sitios paga tus elefantes y unidades pesadas. Gana el control central.' },
      { num: 4, name: 'Edad Imperial', focus: '🥩 Comida y 🪵 Madera', unit: 'Elefante de Torre', action: 'Avanza con "Palacio del Sultán" (da elefantes gratis). Satura a tus ejércitos con bestias y sanadores.' }
    ],
    mapSynergy: 'Lipany (Llanuras)'
  },
  {
    id: 'abbasid',
    name: 'Dinastía Abasí',
    theme: 'from-stone-600 to-stone-800',
    accent: 'text-stone-300',
    ultimateUnit: 'Infantería Ghulam + Camellos',
    difficulty: 'Fácil/Intermedia (Anti-Caballería)',
    masterTip: 'No tienes edificios para avanzar de edad. Todo se hace añadiendo "Alas" a tu Casa de la Sabiduría. Conecta tus edificios para entrar en la Edad de Oro.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Núcleo de Asalto', units: 'Ghulam', desc: 'Infantería pesada rapidísima y que ataca doble. Perfectos para masacrar arqueros.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Debilitadores', units: 'Jinete/Arquero en Camello', desc: 'Su presencia reduce pasivamente el daño de la caballería enemiga un 20%.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Frente Sólido', units: 'Lancero Veterano', desc: 'La infantería abasí construye Arietes y Torres de Asedio sin necesidad de herrero.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Arquero', desc: 'Utilitarios al inicio con "Alimentos Frescos" (aldeanos a mitad de precio en TC).' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🥩 Comida y 🪵 Madera', unit: 'Aldeanos (Baratos)', action: 'Construye la Casa de la Sabiduría y junta edificios para activar Nivel 1 de Edad de Oro.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Camello / Arquero', action: 'Avanza con el Ala Económica (Investiga "Alimentos Frescos" para aldeanos baratos) o Ala Militar.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Ghulam', action: 'Añade el Ala Cultural o Militar. Cambia la producción a Ghulams para arrasar la línea trasera enemiga.' },
      { num: 4, name: 'Edad Imperial', focus: '🥩 Comida, 🪵 Mad, 🥇 Oro', unit: 'Camello Élite', action: 'Añade el Ala Comercial. Mejora tus Camellos con escudos y acompáñalos con artillería pesada.' }
    ],
    mapSynergy: 'Lipany (Llanuras)'
  },
  {
    id: 'ottomans',
    name: 'Otomanos',
    theme: 'from-rose-700 to-rose-900',
    accent: 'text-rose-400',
    ultimateUnit: 'Gran Bombarda + Jenízaros',
    difficulty: 'Intermedia (Presión Temprana)',
    masterTip: 'Las "Escuelas Militares" producen unidades GRATIS (pero lento). Tu objetivo es acumular tropas constantes y mejorarlas con el sistema de visires.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Aniquilación', units: 'Gran Bombarda', desc: 'El cañón más grande del juego. Destruye castillos y ejércitos en área.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Escolta Letal', units: 'Jenízaro (Janissary)', desc: 'Artilleros manuales tempranos. Hacen daño masivo a la caballería enemiga, protegiendo tus cañones.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Soporte y Carga', units: 'Sipahi & Mehter', desc: 'Caballería rápida y el Mehter (tamborilero) que da buffs de velocidad de ataque en área.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Lancero de Escuela', desc: 'Tropas gratis para servir de escudo humano perpetuo.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🪵 Madera y 🪨 Piedra', unit: 'Lancero', action: 'Sube una Escuela Militar rápido para tener tropas gratis goteando desde el inicio.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🪵 Madera', unit: 'Sipahi y Mehter', action: 'Red de Consejos Dobles. Acumula Sipahis, ponles un Mehter (buf de ataque) y ahoga al enemigo.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Jenízaro', action: 'Avanza con Armería Imperial. Empieza a preparar el terreno para pólvora y gana puntos de visir.' },
      { num: 4, name: 'Edad Imperial', focus: '🪵 Madera y 🥇 Oro masivo', unit: 'Gran Bombarda', action: 'Saca el Observatorio. Imprime Grandes Bombardas escoltadas por un escudo de 40 Jenízaros.' }
    ]
  },
  {
    id: 'malians',
    name: 'Malienses',
    theme: 'from-fuchsia-700 to-fuchsia-900',
    accent: 'text-fuchsia-400',
    ultimateUnit: 'Guerreras Musofadi + Vacas',
    difficulty: 'Difícil (Macro Anti-Meta)',
    masterTip: '¡No minas oro de forma tradicional! Construyes Minas de Pozo sobre las vetas y pones casas alrededor. Tu alimento late-game proviene de corrales con vacas.',
    hierarchy: [
      { tier: 'S', color: 'border-amber-500 bg-amber-950/30 text-amber-400', role: 'Asesinas', units: 'Guerrera/Artillera Musofadi', desc: 'Tienen sigilo. Aparecen de la nada y destruyen caballería y armaduras pesadas.' },
      { tier: 'A', color: 'border-purple-500 bg-purple-950/30 text-purple-400', role: 'Anti-Rango', units: 'Lanzadora de Jabalina', desc: 'La unidad contra-arquero por excelencia. Lanzan jabalinas con alcance ridículo.' },
      { tier: 'B', color: 'border-blue-500 bg-blue-950/30 text-blue-400', role: 'Asalto Temprano', units: 'Donso', desc: 'Un piquero que además lanza una jabalina al entrar en combate.' },
      { tier: 'C', color: 'border-slate-500 bg-slate-800/50 text-slate-400', role: 'Carne de Cañón', units: 'Arquero Tiro Corto / Sofá', desc: 'Arqueros venenosos rápidos o caballería ligera barata para abrumar.' }
    ],
    ages: [
      { num: 1, name: 'Edad Oscura', focus: '🪵 Madera', unit: 'Mina de Pozo', action: 'Asegure su oro con una Mina de Pozo y rodéela de casas/campamentos madereros.' },
      { num: 2, name: 'Edad Feudal', focus: '🥩 Comida y 🥇 Oro', unit: 'Donso & Jabalina', action: 'Sube Cantera Mansa. Usa infantería barata para proteger tus minas pasivas en el mapa.' },
      { num: 3, name: 'Edad de Castillos', focus: '🥩 Comida y 🥇 Oro', unit: 'Musofadi', action: 'Sube Guarnición Farimba (vomita tropas masivas usando oro). Usa vacas en corrales para comida.' },
      { num: 4, name: 'Edad Imperial', focus: '🥇 Oro y 🥩 Comida', unit: 'Artillería Venenosa', action: 'Fuerte de la Cazadora. Tus Musofadi se vuelven invisibles casi siempre. Tácticas de guerrilla letales.' }
    ]
  }
];
