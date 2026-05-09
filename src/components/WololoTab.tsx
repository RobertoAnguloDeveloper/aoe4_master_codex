import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, Shield, Trophy, Zap, AlertCircle, Info, RefreshCw, Star } from 'lucide-react';

interface ReligiousCiv {
  name: string;
  unit: string;
  building: string;
  mechanic: string;
  description: string;
  rating: number;
  perks: string[];
  color: string;
}

const religiousCivs: ReligiousCiv[] = [
  {
    name: 'Sacro Imperio Romano Germánico',
    unit: 'Prelado (Prelate)',
    building: 'Catedral de Regnitz',
    mechanic: 'Inspiración Divina y Oro de Reliquias',
    description: 'Los prelados inspiran a los aldeanos (+40% velocidad de recolección) desde el primer minuto y curan masivamente en batalla. La Catedral de Regnitz multiplica por 300% el oro generado por las reliquias resguardadas.',
    rating: 5,
    perks: ['Inspiración desde la Edad I', '+200% de oro por reliquia en Regnitz', 'Soporte militar defensivo excelente'],
    color: 'from-yellow-600 to-amber-900 border-yellow-500/30'
  },
  {
    name: 'Rus',
    unit: 'Guerrero Monje (Warrior Monk)',
    building: 'Abadía de la Trinidad',
    mechanic: 'Bautismo de Combate y Caballería Sagrada',
    description: 'Monjes montados con altísima movilidad que corren para reclamar reliquias antes que nadie. Al atacar, otorgan una bendición que aumenta la armadura y el daño de todas las tropas militares cercanas.',
    rating: 5,
    perks: ['Gran movilidad a caballo', 'Buff de combate activo (+daño/armadura)', 'Monjes de bajo costo en Abadía de la Trinidad'],
    color: 'from-red-700 to-slate-900 border-red-500/30'
  },
  {
    name: 'Sultanato de Delhi',
    unit: 'Erudito (Scholar)',
    building: 'Cúpula de la Fe',
    mechanic: 'Investigación Gratuita y Sitios Sagrados',
    description: 'Los Eruditos se guarnecen en Mezquitas para acelerar la investigación científica (que es gratis). Además, pueden capturar Sitios Sagrados en plena Edad Feudal, asegurando un ingreso de oro masivo temprano.',
    rating: 4,
    perks: ['Tecnologías gratis aceleradas', 'Captura de Sitios Sagrados en Edad II', 'Producción descontada en Cúpula de la Fe'],
    color: 'from-emerald-700 to-teal-900 border-emerald-500/30'
  },
  {
    name: 'Zhu Xi\'s Legacy',
    unit: 'Monje Shaolin (Shaolin Monk)',
    building: 'Monasterio del Templo',
    mechanic: 'Cuerpo a Cuerpo y Desvío de Flechas',
    description: 'Monjes guerreros letales que no sanan pero actúan como tanques de primera línea. Cuentan con una habilidad activa para desviar proyectiles y regenerar salud fuera de combate rápidamente mientras cantan mantras.',
    rating: 4,
    perks: ['Monjes letales en melé', 'Inmunidad temporal a proyectiles', 'Pueden capturar reliquias bajo fuego'],
    color: 'from-orange-600 to-amber-900 border-orange-500/30'
  },
  {
    name: 'Dinastía Jin',
    unit: 'Emisario Jin',
    building: 'Estados Tributarios',
    mechanic: 'Sobornos Activos y Diplomacia Coactiva',
    description: 'Unidades diplomáticas-religiosas que pueden establecer Estados Tributarios en puestos comerciales y utilizar el oro de las arcas imperiales para comprar de forma instantánea tropas hostiles en plena batalla.',
    rating: 5,
    perks: ['Soborno y conversión de tropas pagando oro', 'Estados Tributarios económicos', 'Sinergia de pastizales sagrados'],
    color: 'from-amber-600 to-yellow-800 border-amber-500/30'
  }
];

const targetUnits = [
  { name: 'Caballero Real Francés', type: 'Pesada', resistance: 'Alta (4.5s)', delay: 4500, score: 200, difficulty: 'Difícil' },
  { name: 'Arquero de Tiro Largo', type: 'Ligera', resistance: 'Media (3.5s)', delay: 3500, score: 100, difficulty: 'Normal' },
  { name: 'Elefante de Guerra Delhi', type: 'Titán', resistance: 'Extrema (6.0s)', delay: 6000, score: 500, difficulty: 'Muy Difícil' },
  { name: 'Gran Bombarda Otomana', type: 'Asedio', resistance: 'Crítica (7.0s)', delay: 7000, score: 800, difficulty: 'Pesadilla' }
];

export default function WololoTab() {
  const [selectedTarget, setSelectedTarget] = useState(targetUnits[0]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [converted, setConverted] = useState(false);
  const [wololoSoundEffect, setWololoSoundEffect] = useState(false);
  const [convertedUnits, setConvertedUnits] = useState<string[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isConverting) {
      const step = 100 / (selectedTarget.delay / 100);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsConverting(false);
            setConverted(true);
            setWololoSoundEffect(false);
            setConvertedUnits(old => [selectedTarget.name, ...old.slice(0, 4)]);
            setTotalScore(s => s + selectedTarget.score);
            return 100;
          }
          return prev + step;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isConverting, selectedTarget]);

  const handleStartConversion = () => {
    if (isConverting) return;
    setConverted(false);
    setProgress(0);
    setIsConverting(true);
    setWololoSoundEffect(true);
  };

  const handleReset = () => {
    setIsConverting(false);
    setProgress(0);
    setConverted(false);
    setWololoSoundEffect(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Tab Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 font-black text-[10px] tracking-widest uppercase flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3 h-3" /> Conversión y Reliquias
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            Templo del <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Wololo</span>
          </h2>
          <p className="text-slate-400 mt-1">Análisis de las civilizaciones teocráticas y el misticismo del campo de batalla en AoE4.</p>
        </div>
      </header>

      {/* Grid Layout: Simulator + Doctrines */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Wololo Simulator (5 Columns) */}
        <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl">
          
          {/* Animated Background Rings */}
          {isConverting && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-96 h-96 border-4 border-amber-500/20 rounded-full animate-ping duration-1000 absolute"></div>
              <div className="w-64 h-64 border-2 border-orange-500/30 rounded-full animate-ping duration-700 absolute"></div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                Simulador de Conversión
              </h3>
              <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-black text-slate-300">{totalScore} PTS</span>
              </div>
            </div>

            {/* Target Select */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Seleccionar Objetivo Hostil</label>
              <div className="grid grid-cols-2 gap-2">
                {targetUnits.map(unit => (
                  <button
                    key={unit.name}
                    disabled={isConverting}
                    onClick={() => { setSelectedTarget(unit); setConverted(false); setProgress(0); }}
                    className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${isConverting ? 'opacity-40 cursor-not-allowed' : ''} ${selectedTarget.name === unit.name ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg' : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <span className="text-xs font-bold truncate block">{unit.name}</span>
                    <span className="text-[10px] font-black text-slate-500 mt-1 uppercase tracking-wider">{unit.difficulty}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Arena of Faith (The Interactive Screen) */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 relative flex flex-col items-center justify-center min-h-[180px] overflow-hidden">
              
              {/* Monk Graphic */}
              <div className="flex justify-between items-center w-full max-w-xs relative z-10">
                {/* Friendly Monk */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg border border-white/20 transition-all ${isConverting ? 'scale-110 rotate-12 animate-bounce' : ''}`}>
                    <Zap className="w-6 h-6 text-slate-950 font-bold" />
                  </div>
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Monje Aliado</span>
                </div>

                {/* Spell Indicator */}
                <div className="flex-1 flex flex-col items-center justify-center px-4">
                  {isConverting ? (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-black text-amber-500 uppercase tracking-widest animate-pulse">¡WOLOLO!</span>
                      <span className="text-[10px] text-slate-400 font-bold">{Math.round(progress)}%</span>
                    </div>
                  ) : converted ? (
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest animate-bounce">¡CONVERTIDO!</span>
                  ) : (
                    <div className="w-12 h-0.5 bg-dashed border-t border-slate-800"></div>
                  )}
                </div>

                {/* Enemy/Converted Target */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border transition-all duration-500 
                    ${converted 
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500 border-white/20 scale-105 animate-pulse' 
                      : 'bg-gradient-to-br from-red-600 to-red-900 border-red-500/40'}`}>
                    <Shield className={`w-6 h-6 ${converted ? 'text-slate-950' : 'text-white'}`} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-all ${converted ? 'text-amber-500' : 'text-red-500'}`}>
                    {converted ? 'Aliado' : 'Enemigo'}
                  </span>
                </div>
              </div>

              {/* Success Particle Effect */}
              {converted && (
                <div className="absolute inset-0 bg-amber-500/5 backdrop-blur-[1px] flex items-center justify-center animate-out fade-out duration-1000">
                  <span className="text-amber-400 font-black tracking-widest text-lg uppercase animate-pulse">✨ ÉXITO ✨</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {/* Progress Bar */}
            {isConverting && (
              <div className="space-y-1.5 animate-in fade-in">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <span>Canto de Conversión...</span>
                  <span>Tiempo restante: {((selectedTarget.delay * (100 - progress)) / 100000).toFixed(1)}s</span>
                </div>
                <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-100" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                disabled={isConverting}
                onClick={handleStartConversion}
                className={`flex-1 py-4.5 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 border 
                  ${isConverting 
                    ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-amber-500 to-orange-600 border-amber-400 text-slate-950 hover:shadow-amber-500/10 hover:brightness-110 active:scale-[0.98]'}`}
              >
                <Zap className="w-5 h-5 fill-current" />
                Cantar ¡WOLOLO!
              </button>
              
              {(converted || isConverting) && (
                <button
                  onClick={handleReset}
                  className="p-4 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-white transition-all"
                  title="Reiniciar simulador"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* History of Converts */}
            {convertedUnits.length > 0 && (
              <div className="border-t border-slate-800/80 pt-4 mt-2">
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-2">Historial de Conversiones Recientes</span>
                <div className="flex flex-wrap gap-1.5">
                  {convertedUnits.map((name, i) => (
                    <span key={i} className="text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Comparative Doctrines (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* General Rules & Mechanics */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white">¿Cómo Funciona el "Wololo" en AoE4?</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A diferencia de títulos anteriores de la saga, los monjes en AoE4 **requieren portar una Reliquia** en sus manos para poder realizar conversiones grupales (con la excepción de mecánicas especiales de soborno). 
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-2 text-xs">
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-850">
                    <span className="font-black text-amber-500 uppercase block mb-1">Mecánica del Área</span>
                    El monje canaliza un círculo sagrado enorme. Todas las unidades enemigas dentro del radio tras el conteo cambian permanentemente de bando.
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-850">
                    <span className="font-black text-amber-500 uppercase block mb-1">Riesgo / Recompensa</span>
                    El monje es extremadamente vulnerable durante el cántico. Si el monje es eliminado o aturdido, la reliquia cae al suelo y la conversión se cancela.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* El Secreto de las Pagodas y el Bosque de Pagodas */}
          <div className="bg-slate-900/60 border border-amber-500/30 rounded-3xl p-6 relative overflow-hidden group/pagoda shadow-lg bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_50%)]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/pagoda:opacity-10 transition-opacity">
              <Sparkles className="w-24 h-24 text-amber-500" />
            </div>
            
            <h4 className="text-xl font-black text-white flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-amber-500" />
              Guía del Templo: Cómo obtener el Bosque de Pagodas
            </h4>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Las pagodas y los bosques de pagodas representan el pináculo económico y religioso de las dinastías orientales en Age of Empires IV. Aquí te explicamos cómo desbloquear cada uno:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              
              {/* Dinastía Jin - Bosque de Pagodas */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/20 space-y-2 hover:border-amber-500/40 transition-all">
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">Dinastía Jin (DLC)</span>
                <h5 className="font-bold text-white text-sm">Hito: El Bosque de Pagodas (Pagoda Forest)</h5>
                <p className="text-slate-400 leading-relaxed">
                  Para obtenerlo, avanza a la <strong>Edad de los Castillos (Edad III)</strong> y selecciona el hito económico <strong>"El Bosque de Pagodas"</strong>. 
                </p>
                <ul className="space-y-1 text-slate-400 pl-1">
                  <li>• Genera pequeños brotes forestales que dan madera pasiva de forma continua.</li>
                  <li>• Ralentiza de forma pasiva a las tropas enemigas que entren en la zona.</li>
                  <li>• Guarnece hasta 3 Monjes para desatar un <strong>canto de conversión en cascada masivo</strong>.</li>
                </ul>
              </div>

              {/* Chinos / Zhu Xi - Pagodas Estándar */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-800 px-2 py-0.5 rounded-md border border-white/5">Chinos y Zhu Xi's Legacy</span>
                <h5 className="font-bold text-slate-200 text-sm">Edificio Único: Pagoda Tradicional</h5>
                <p className="text-slate-400 leading-relaxed">
                  Para construirlas, debes entrar en la <strong>Dinastía Song o Dinastía Yuan</strong> (construyendo ambos hitos de una misma edad) para desbloquear el plano arquitectónico.
                </p>
                <ul className="space-y-1 text-slate-400 pl-1">
                  <li>• Permite depositar reliquias capturadas en su interior.</li>
                  <li>• Genera una corriente pasiva de <strong>todos los recursos</strong> (Alimento, Madera, Oro, Piedra) a la vez.</li>
                  <li>• Máximo de 3 pagodas permitidas simultáneamente.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Top Teocratic Civilizations */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-400 uppercase tracking-widest px-1">Élite Religiosa de AoE4</h3>
            
            <div className="grid md:grid-cols-1 gap-4">
              {religiousCivs.map(civ => (
                <div 
                  key={civ.name}
                  className={`bg-gradient-to-r ${civ.color} border p-5 rounded-2xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-300 shadow-md`}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 relative z-10">
                    
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-black text-white">{civ.name}</h4>
                        <div className="flex">
                          {[...Array(civ.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{civ.description}</p>
                      
                      {/* Perks */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {civ.perks.map(perk => (
                          <span key={perk} className="text-[10px] font-bold bg-slate-950/60 text-slate-300 px-2.5 py-1 rounded-lg border border-white/5">
                            ✓ {perk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats summary box */}
                    <div className="md:w-48 bg-slate-950/80 rounded-xl p-3.5 border border-white/5 flex flex-col justify-between text-xs flex-shrink-0">
                      <div>
                        <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block mb-1">Unidad Sagrada</span>
                        <span className="font-bold text-white block truncate">{civ.unit}</span>
                      </div>
                      <div className="mt-2.5">
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-0.5">Edificio Clave</span>
                        <span className="font-bold text-slate-300 block truncate">{civ.building}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
