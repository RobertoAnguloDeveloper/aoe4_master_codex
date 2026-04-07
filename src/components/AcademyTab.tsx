import React, { useState } from 'react';
import { TrendingUp, Users, Construction, Trash2, Info, ChevronUp, Coins, Wheat, TreeDeciduous } from 'lucide-react';
import { mechanicsData } from '../data/mechanics';
import { civData } from '../data/civs';

export default function AcademyTab() {
  const { villagerGrowth, constructionPower, populationBalance, ageUpCosts } = mechanicsData;
  const [selectedCivId, setSelectedCivId] = useState('All');

  const filteredAgeUpCosts = selectedCivId === 'Byzantine' || selectedCivId === 'Ayyubid' || selectedCivId === 'Abbasid'
    ? { ...ageUpCosts, note: 'Nota: Esta civilización usa un sistema único de avance (Alas o Hitos específicos).' }
    : ageUpCosts;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <header className="mb-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">La Academia del Maestro</h2>
          <p className="text-slate-400">Análisis cuantitativo para la optimización imperial. El control de las matemáticas es la base de la victoria.</p>
        </div>
        
        {/* Civ Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 self-start md:self-end">
           <button
             onClick={() => setSelectedCivId('All')}
             className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${selectedCivId === 'All' ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
           >
             Todas
           </button>
           {civData.map(civ => (
             <button
               key={civ.id}
               onClick={() => setSelectedCivId(civ.id)}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${selectedCivId === civ.id ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
             >
               {civ.name}
             </button>
           ))}
        </div>
      </header>

      {/* Age Up Costs - NEW SECTION */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
           <ChevronUp className="w-32 h-32 text-white" />
        </div>
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center border border-amber-500/30">
            <TrendingUp className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{ageUpCosts.title}</h3>
        </div>
        
        <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl relative z-10">{ageUpCosts.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {ageUpCosts.ages.map((age) => (
            <div key={age.num} className="bg-slate-950/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Era {age.num}</span>
                <span className="text-sm font-bold text-white uppercase">{age.name}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between group/res">
                  <div className="flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-slate-400">Comida</span>
                  </div>
                  <span className="font-mono text-white font-bold">{age.food}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-slate-400">Oro</span>
                  </div>
                  <span className="font-mono text-white font-bold">{age.gold}</span>
                </div>
                {age.wood > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TreeDeciduous className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-400">Madera</span>
                    </div>
                    <span className="font-mono text-white font-bold">{age.wood}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-start gap-4">
          <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-400 italic">{filteredAgeUpCosts.note}</p>
        </div>
      </section>

      {/* Villager Growth */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{villagerGrowth.title}</h3>
        </div>
        
        <p className="text-slate-400 mb-6 leading-relaxed">{villagerGrowth.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Progresión: 1 Centro Urbano</h4>
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
              {villagerGrowth.singleTC.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-800 last:border-0">
                  <span className="text-slate-400">Minuto {item.minute}</span>
                  <span className="font-mono text-blue-400 font-bold">{item.population} Aldeanos</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Progresión: 2 Centros Urbanos</h4>
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
              {villagerGrowth.doubleTC.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-800 last:border-0">
                  <span className="text-slate-400">Minuto {item.minute}</span>
                  <span className="font-mono text-emerald-400 font-bold">{item.population} Aldeanos</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-950/20 border border-amber-500/20 rounded-2xl flex items-start gap-4">
          <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200/80 italic">{villagerGrowth.rule}</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Construction Power */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center border border-orange-500/30">
              <Construction className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{constructionPower.title}</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <p className="text-sm font-mono text-white mb-2">{constructionPower.formula}</p>
              <p className="text-xs text-slate-500 line-clamp-2">{constructionPower.example}</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {constructionPower.efficiency}
            </p>
          </div>
        </section>

        {/* Population Balance */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center border border-purple-500/30">
              <Trash2 className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{populationBalance.title}</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Métricas de Control</span>
              <p className="text-sm font-bold text-white">{populationBalance.targets}</p>
            </div>
            <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl">
              <h4 className="text-sm font-bold text-red-400 mb-1">La Purga Táctica</h4>
              <p className="text-xs text-slate-400">{populationBalance.strategy}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
