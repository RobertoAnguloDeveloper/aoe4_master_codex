export const mechanicsData = {
  villagerGrowth: {
    title: 'Cálculo Cuantitativo de la Expansión Laboral',
    description: 'Un Centro Urbano operando con una eficiencia del 100% producirá aproximadamente tres aldeanos por minuto (50 de alimento / 20s).',
    singleTC: [
      { minute: 5, population: 21 },
      { minute: 10, population: 36 },
      { minute: 20, population: 66 },
      { minute: 30, population: 96 }
    ],
    doubleTC: [
      { minute: 15, population: 66 },
      { minute: 20, population: 96 },
      { minute: 30, population: 156 }
    ],
    rule: 'Poseer más Centros Urbanos que el oponente garantiza una ventaja económica irrefutable a mediano plazo.'
  },
  constructionPower: {
    title: 'Matemática de la Construcción',
    formula: 'Primer aldeano = 3 pts de poder. Cada aldeano extra = 1 pt de poder.',
    efficiency: '3 a 5 aldeanos es el equilibrio óptimo para Hitos. Más de 5 provoca rendimientos decrecientes severos.',
    example: '10 aldeanos construyen solo 4 veces más rápido que 1, pero cuestan 10 veces más en tiempo de recolección perdido.'
  },
  populationBalance: {
    title: 'Optimización del Juego Tardío',
    targets: '80-140 aldeanos para la fase de expansión. 60-80 para la fase de combate final (Deathball).',
    strategy: 'La Purga Táctica: Eliminar aldeanos una vez que las reservas son masivas para liberar espacio para 120+ unidades militares de élite.'
  }
};
