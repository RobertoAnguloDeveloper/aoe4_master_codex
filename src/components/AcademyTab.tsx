import React from 'react';
import { TrendingUp, Users, Construction, Trash2, Info } from 'lucide-react';
import { mechanicsData } from '../data/mechanics';

export default function AcademyTab() {
  const { villagerGrowth, constructionPower, populationBalance } = mechanicsData;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-white mb-2">La Academia del Maestro</h2>
        <p className="text-slate-400">Análisis cuantitativo para la optimización imperial. El control de las matemáticas es la base de la victoria.</p>
      </header>

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
