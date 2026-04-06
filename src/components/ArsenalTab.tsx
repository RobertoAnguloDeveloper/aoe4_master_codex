import React, { useState } from 'react';
import { Search, Sword, Shield, Target, Zap, Filter } from 'lucide-react';
import { counterData } from '../data/units';

export default function ArsenalTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredUnits = counterData.filter(unit => {
    const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          unit.civ.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'All' || unit.type.includes(filterType);
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', 'Infantería', 'Caballería', 'Asedio', 'Pólvora', 'Arquero'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6">
        <h2 className="text-3xl font-black text-white mb-2">Arsenal Maestro</h2>
        <p className="text-slate-400">Matriz de contrarrestos y especializaciones militares.</p>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar por unidad o civilización..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-4 py-2 rounded-xl border text-sm font-bold whitespace-nowrap transition-all
                ${filterType === cat 
                  ? 'bg-amber-600 border-amber-500 text-white shadow-lg' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Units Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((unit, idx) => (
            <div key={idx} className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-600 transition-all group hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{unit.name}</h4>
                  <span className="text-xs font-mono text-slate-500 uppercase">{unit.civ}</span>
                </div>
                <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-400">
                  {unit.type}
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                    <Shield className="w-3 h-3" /> Fuerte contra
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{unit.strong}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-[10px] uppercase tracking-wider">
                    <Sword className="w-3 h-3" /> Débil contra
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{unit.weak}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-600">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="text-lg font-bold">No se encontraron unidades con estos criterios.</p>
          </div>
        )}
      </div>
    </div>
  );
}
