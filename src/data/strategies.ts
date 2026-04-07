export const civStrategies: Record<string, { fortalezas: string, debilidades: string, early: string, mid: string, late: string }> = {
  'english': {
    fortalezas: 'Excelente economía agrícola (granjas baratas) y defensa superior con la Red de Castillos.',
    debilidades: 'Unidades lentas y vulnerables a asedios de largo alcance antes de la Edad Imperial.',
    early: 'Presión con Arqueros de Tiro Largo y torres defensivas. Asegurar granjas tempranas.',
    mid: 'Transición a Hombres de Armas resistentes y control de zonas sagradas con castillos.',
    late: 'Dominación total con granjas infinitas y artillería protegida por muros de flechas.'
  },
  'house-of-lancaster': {
    fortalezas: 'Generación pasiva en Mansiones y ráfagas sincronizadas letales. Defensa inexpugnable.',
    debilidades: 'Extremadamente dependiente de la integridad de sus Mansiones iniciales.',
    early: 'Fortificar el Centro Urbano y construir Mansiones en zonas seguras. Uso de Hobilars para hostigamiento.',
    mid: 'Despliegue del Lord of Lancaster para bonificar la infantería. Control de cuellos de botella.',
    late: 'Uso de ráfagas masivas de arqueros de élite que borran ejércitos enteros en segundos.'
  },
  'french': {
    fortalezas: 'Caballería pesada inigualable en Feudal y edificios económicos con descuento.',
    debilidades: 'Previsibilidad táctica. Los oponentes suelen sobre-producir Piqueros.',
    early: 'Acoso constante con Caballeros Reales para forzar al enemigo a quedarse en base.',
    mid: 'Expansión con varios Centros Urbanos baratos y comercio protegido por caballería.',
    late: 'Ejército de Caballeros Reales de élite apoyados por Ballesteros con pavés.'
  },
  'templars': {
    fortalezas: 'Resistencia en guerras largas y economía sagrada a través de Peregrinos.',
    debilidades: 'Inicio muy lento y dependencia del oro generado por sitios sagrados.',
    early: 'Sobrevivir al acoso inicial usando defensas mínimas y recolectando reliquias/sitios con Peregrinos.',
    mid: 'Despliegue de Caballeros Hospitalarios para aguantar líneas de frente infinitas.',
    late: 'Economía de "Préstamos" y sanación masiva que impide que el ejército templario sea derrotado.'
  },
  'rus': {
    fortalezas: 'Control forestal, oro por caza y barcos que cambian de rol instantáneamente.',
    debilidades: 'Incapacidad de construir muros de piedra (depende de empalizadas fuertes).',
    early: 'Cazar todos los animales del mapa para maximizar el Bounty y el oro pasivo.',
    mid: 'Uso de Monjes Guerreros para buffs de daño y combate cuerpo a cuerpo veloz.',
    late: 'Ejércitos de Streltsy de pólvora y artillería masiva (Espingardas rusas de gran rango).'
  },
  'hre': {
    fortalezas: 'Prelados potencian economía un 40%. Infantería pesada con gran daño de área.',
    debilidades: 'Vulnerable a incursiones tempranas que maten a los Prelados.',
    early: 'Maximizar recolección con Prelados y buscar un avance rápido a la Edad de los Castillos.',
    mid: 'Guardar reliquias en Catedrales o Castillos para oro pasivo masivo y defensa.',
    late: 'Masas de Landsknechts y Hombres de Armas con maces que destruyen cualquier infantería.'
  },
  'mongols': {
    fortalezas: 'Movilidad total, recolección de piedra gratuita y bonos por quemar edificios.',
    debilidades: 'Sin murallas ni fortificaciones de piedra. Vulnerable si el ejército es aniquilado.',
    early: 'Torre de asalto en nodos de recursos enemigos. Hostigamiento con arqueros a caballo.',
    mid: 'Uso del Ovoo para doble producción de unidades clave y control nómada del mapa.',
    late: 'Artillería móvil y Khan potenciando la velocidad de ataque de ejércitos masivos en movimiento.'
  },
  'golden-horde': {
    fortalezas: 'Khan heroico y tropas Torguud que absorben daño. Reclutamiento doble agresivo.',
    debilidades: 'Requiere microgestión del Khan. Economía inicial frágil en mapas cerrados.',
    early: 'Escoltas Torguud junto al Khan para incursiones seguras. Quema de aldeas para recursos.',
    mid: 'Uso de la Carpa Dorada para centralizar la producción y buffs de moral en batalla.',
    late: 'Oleadas interminables de Kharash (carne de cañón) seguidas por arqueros Kipchak letales.'
  },
  'chinese': {
    fortalezas: 'Dinastías que otorgan bonos dobles y defensa de pólvora inigualable.',
    debilidades: 'Alto coste de microgestión fiscal y vulnerabilidad pre-Feudal.',
    early: 'Recolección de impuestos con oficiales y defensa con Zhuge Nu contra infantería ligera.',
    mid: 'Transición a Nidos de Abejas para control de área y expansión de Centros Urbanos.',
    late: 'Pólvora total con Bombardas Chinas de gran alcance y ejércitos imperiales mixtos.'
  },
  'delhi': {
    fortalezas: 'Tecnologías gratuitas. Elefantes de guerra que actúan como tanques asediadores.',
    debilidades: 'Investigación frenada si se pierden Eruditos o Mezquitas.',
    early: 'Capturar Sitios Sagrados inmediatamente en Feudal para generar oro y presión.',
    mid: 'Producción de Elefantes de Torre para asediar castillos enemigos tempranos.',
    late: 'Ejército de Elefantes de Guerra sanados por Eruditos que son casi inmortales.'
  },
  'tughlaq': {
    fortalezas: 'Elefantes sanadores y Gobernadores en fuertes que automatizan la logística.',
    debilidades: 'Si los elefantes mueren, la inversión económica es casi irrecuperable.',
    early: 'Asegurar el control de Gobernadores en fronteras clave. Uso de elefantes de incursión.',
    mid: 'Pisotones coordinados de elefantes para romper formaciones de piqueros.',
    late: 'Elefantes Ballesta que disparan proyectiles múltiples, borrando infantería en masa.'
  },
  'abbasid': {
    fortalezas: 'Camellos que debilitan la caballería enemiga y avance orgánico sin aldeanos.',
    debilidades: 'Poca adaptabilidad defensiva única. Dependencia de la Casa de la Sabiduría.',
    early: 'Ala económica para expansión rápida con aldeanos baratos. Bayas infinitas.',
    mid: 'Sustituir caballería por Camellos para neutralizar a franceses o ingleses.',
    late: 'Edad Imperial dorada con bonificaciones masivas a la infantería y salud de edificios.'
  },
  'malians': {
    fortalezas: 'Oro pasivo infinito (Pit Mines) y ganado que genera comida en base.',
    debilidades: 'Infantería muy vulnerable al daño de área y fuego de arqueros pesados.',
    early: 'Establecer redes de minas de oro y hostigar con Guerreros Musofadi furtivos.',
    mid: 'Lanzadores de Jabalina para anular a los arqueros enemigos y Sofa para contacto.',
    late: 'Masas de Musofadi que funden armaduras pesadas gracias a su daño por veneno/emboscada.'
  },
  'japanese': {
    fortalezas: 'Samuráis con escudos deflectores y Bannermen que guían al ejército.',
    debilidades: 'Carencia de movilidad extrema. Dependientes de peleas frontales.',
    early: 'Aprovechar el bono de piedra al minar oro para fortificar rápido con torres.',
    mid: 'Despliegue de Samuráis y Onna-Bugeisha para control de melé absoluto.',
    late: 'Infantería de élite con armaduras Shogun y pólvora de corto alcance devastadora.'
  },
  'sengoku-daimyo': {
    fortalezas: 'Soporte de clanes y recolectores Yatai que no agotan los recursos.',
    debilidades: 'Elección de clan errónea puede dejarte sin contramedidas adecuadas.',
    early: 'Elegir el clan de recolección para un boom explosivo o el de guerra para milicias.',
    mid: 'Uso de Samuráis Kanabo para aplastar la vanguardia pesada del enemigo.',
    late: 'Invocaciones masivas de clanes aliados y armas de fuego Tanegashima de precisión.'
  },
  'byzantines': {
    fortalezas: 'Logística hídrica con Cisternas y mercenarios importados con Aceite de Oliva.',
    debilidades: 'Alta complejidad macro y dependencia del alimento para generar aceite.',
    early: 'Construir Cisternas conectadas y reclutar mercenarios (Keshiks/Jabalinas) con aceite.',
    mid: 'Despliegue de Catafractos, la caballería más pesada del juego, para asalto frontal.',
    late: 'Fuego Griego en barcos y asedio. Guardias Varegos con hachas para defensa final.'
  },
  'macedonia': {
    fortalezas: 'Tecnología de Plata y Riddari que destruyen líneas de apoyo enemigas.',
    debilidades: 'Necesitan nodos de oro constantes para que el sistema de Plata no colapse.',
    early: 'Desenterrar plata mientras se mina oro para invocar Borgmadr (unidades tácticas).',
    mid: 'Transición a Riddari (caballería pesada) para flanquear y destruir artillería.',
    late: 'Dominancia militar total con armas de asedio macedonias de gran resistencia.'
  },
  'ottomans': {
    fortalezas: 'Escuelas Militares que producen unidades gratis y Gran Bombarda devastadora.',
    debilidades: 'Producción gratuita lenta y vulnerabilidad a ataques rápidos pre-pólvora.',
    early: 'Subir Escuelas Militares rápido para goteo constante de tropas y control de mapa.',
    mid: 'Mehter (tamborilero) para buffs y Jenízaros para anular caballería pesada enemiga.',
    late: 'Cortejo de Grandes Bombardas protegidas por masas infinitas de Jenízaros de élite.'
  },
  'ayyubid': {
    fortalezas: 'Sistemas asimétricos de Alas y Mamelucos que anulan ejércitos terrestres.',
    debilidades: 'Menor defensa estática y dependencia de la progresión de la Casa de la Sabiduría.',
    early: 'Ala de Crecimiento para boom económico o Ala Militar para incursiones rápidas.',
    mid: 'Uso de Incursores del Desierto (híbridos) para hostigamiento constante en granjas.',
    late: 'Mamelucos del Sultán que dominan cualquier melé. Artillería con gran velocidad de fuego.'
  }
};
