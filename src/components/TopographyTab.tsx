import React, { useState } from 'react';
import { Map, Globe, Shield, Search } from 'lucide-react';
import { civData } from '../data/civs';

export default function TopographyTab({ selectedCiv, onSelectCiv }: { selectedCiv: any, onSelectCiv: (civ: any) => void }) {
  const [civSearch, setCivSearch] = useState('');

  const civsToDisplay = civData.filter(civ => 
    civ.name.toLowerCase().includes(civSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <header className="mb-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Topografía Táctica</h2>
          <p className="text-slate-400">Análisis de sinergias entre civilizaciones y el terreno predominante.</p>
        </div>
        
        {/* Civ Filter with Search */}
        <div className="flex flex-col gap-3 md:items-end">
           <div className="relative group w-full md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
             <input 
               type="text" 
               placeholder="Buscar facción..." 
               className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all font-medium placeholder:text-slate-600"
               value={civSearch}
               onChange={(e) => setCivSearch(e.target.value)}
             />
           </div>
           
           <div className="flex items-center gap-2 overflow-x-auto pb-2 self-start md:self-end max-w-full md:max-w-2xl no-scrollbar">
              {civsToDisplay.map(civ => (
                <button
                  key={civ.id}
                  onClick={() => onSelectCiv(civ)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${selectedCiv.id === civ.id ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
                >
                  {civ.name}
                </button>
              ))}
           </div>
        </div>
      </header>

      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <Map className="w-48 h-48 text-white" />
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedCiv.theme} flex items-center justify-center border border-white/20 shadow-xl`}>
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white">{selectedCiv.name}</h3>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Análisis de Mapa</span>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 relative z-10">
          <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Dominancia Ambiental</h4>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed italic border-l-4 border-amber-500 pl-6 py-2">
              "{selectedCiv.mapSynergy}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
